'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, Bot, Gamepad2 } from 'lucide-react';

interface Obstacle {
  x: number;
  type: 'cactus_small' | 'cactus_large' | 'pterodactyl';
  width: number;
  height: number;
  yOffset: number;
  subType?: number; // 0: single, 1: double, 2: triple
}

interface Cloud {
  x: number;
  y: number;
  speed: number;
}

export const DinoRunner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Audio Context
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Settings & Modes
  const [isAutoLoop, setIsAutoLoop] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [colorTheme, setColorTheme] = useState<'retro' | 'cyber' | 'yellow'>('retro');
  const [score, setScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(9999);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [jumpCount, setJumpCount] = useState<number>(0);

  // Game internal state kept in refs for 60fps loop performance
  const stateRef = useRef({
    score: 0,
    highScore: 9999,
    dinoX: 50,
    dinoY: 0, // relative to ground
    dinoWidth: 44,
    dinoHeight: 47,
    velocityY: 0,
    isJumping: false,
    groundY: 130,
    canvasWidth: 800,
    canvasHeight: 160,
    baseSpeed: 6.5,
    currentSpeed: 6.5,
    speedMultiplier: 1,
    groundOffset: 0,
    animFrame: 0,
    tick: 0,
    isAutoLoop: true,
    soundEnabled: false,
    colorTheme: 'retro' as 'retro' | 'cyber' | 'yellow',
    isGameOver: false,
    jumpCount: 0,
    obstacles: [] as Obstacle[],
    clouds: [] as Cloud[],
    spriteLoaded: false,
    lastObstacleSpawn: 0,
    spriteImg: null as HTMLImageElement | null,
    inView: true,
  });

  // Keep stateRef synced with React state
  useEffect(() => {
    stateRef.current.isAutoLoop = isAutoLoop;
  }, [isAutoLoop]);

  useEffect(() => {
    stateRef.current.soundEnabled = soundEnabled;
  }, [soundEnabled]);

  useEffect(() => {
    stateRef.current.speedMultiplier = speedMultiplier;
  }, [speedMultiplier]);

  useEffect(() => {
    stateRef.current.colorTheme = colorTheme;
  }, [colorTheme]);

  // Sound synthesis via Web Audio API
  const playSound = useCallback((type: 'jump' | 'score' | 'hit') => {
    if (!stateRef.current.soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'jump') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.09);
      } else if (type === 'score') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.setValueAtTime(1200, now + 0.08);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
        osc.start(now);
        osc.stop(now + 0.18);
      } else if (type === 'hit') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.15);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.16);
      }
    } catch {
      // AudioContext failure safely ignored
    }
  }, []);

  // Jump trigger
  const triggerJump = useCallback(() => {
    const s = stateRef.current;
    if (s.isGameOver) {
      // Restart on jump if game over
      s.isGameOver = false;
      s.score = 0;
      s.obstacles = [];
      s.velocityY = 0;
      s.dinoY = 0;
      s.isJumping = false;
      setIsGameOver(false);
      setScore(0);
      return;
    }

    if (!s.isJumping) {
      s.isJumping = true;
      s.velocityY = -12.5; // Upward impulse
      s.jumpCount++;
      setJumpCount(s.jumpCount);
      playSound('jump');
    }
  }, [playSound]);

  // Handle Keydown & Touch
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        const active = document.activeElement;
        if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA')) {
          return;
        }
        e.preventDefault();
        triggerJump();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerJump]);

  // Main Canvas & Game Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Load High-Res Sprite Sheet
    const sprite = new Image();
    sprite.src = '/dino-sprite.png';
    sprite.onload = () => {
      stateRef.current.spriteLoaded = true;
      stateRef.current.spriteImg = sprite;
    };

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      const targetWidth = Math.max(320, Math.floor(rect.width));
      const targetHeight = 160;

      // Handle HiDPI
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = targetWidth * dpr;
      canvas.height = targetHeight * dpr;
      canvas.style.width = `${targetWidth}px`;
      canvas.style.height = `${targetHeight}px`;

      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = false; // Keep pixel crispness!

      const s = stateRef.current;
      s.canvasWidth = targetWidth;
      s.canvasHeight = targetHeight;
      s.groundY = targetHeight - 25;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Pause loop when out of viewport to preserve 60fps & battery
    const observer = new IntersectionObserver(
      ([entry]) => {
        stateRef.current.inView = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Initialize initial clouds
    stateRef.current.clouds = [
      { x: 120, y: 35, speed: 0.8 },
      { x: 380, y: 20, speed: 0.6 },
      { x: 620, y: 45, speed: 0.9 },
    ];

    let lastTime = performance.now();

    // 60FPS Game Loop
    const renderLoop = (time: number) => {
      animFrameRef.current = requestAnimationFrame(renderLoop);

      const s = stateRef.current;
      if (!s.inView) return;

      const dt = Math.min((time - lastTime) / 1000, 0.05); // cap delta
      lastTime = time;

      s.tick++;

      // Theme Colors
      let bgCol = '#FFFFFF';
      let mainCol = '#18181B'; // zinc-900
      let groundCol = '#27272A';

      if (s.colorTheme === 'cyber') {
        bgCol = '#09090B'; // zinc-950
        mainCol = '#22C55E'; // green-500
        groundCol = '#15803D';
      } else if (s.colorTheme === 'yellow') {
        bgCol = '#FEF08A'; // yellow-200
        mainCol = '#18181B';
        groundCol = '#18181B';
      }

      // Clear Canvas
      ctx.fillStyle = bgCol;
      ctx.fillRect(0, 0, s.canvasWidth, s.canvasHeight);

      // Current Speed
      const speed = s.baseSpeed * s.speedMultiplier;

      // Update State if not Game Over
      if (!s.isGameOver) {
        // Ground offset
        s.groundOffset = (s.groundOffset + speed) % 1200;

        // Score tracking
        s.score += speed * 0.05;
        const currentScoreInt = Math.floor(s.score);
        if (currentScoreInt > 0 && currentScoreInt % 100 === 0 && Math.floor(s.score - speed * 0.05) % 100 !== 0) {
          playSound('score');
        }

        // Update Dino Physics (Jump)
        if (s.isJumping) {
          s.dinoY += s.velocityY;
          s.velocityY += 0.65; // Gravity

          if (s.dinoY >= 0) {
            s.dinoY = 0;
            s.velocityY = 0;
            s.isJumping = false;
          }
        }

        // Update Clouds
        for (let i = 0; i < s.clouds.length; i++) {
          const cl = s.clouds[i];
          cl.x -= cl.speed * s.speedMultiplier;
          if (cl.x < -60) {
            cl.x = s.canvasWidth + Math.random() * 80;
            cl.y = 15 + Math.random() * 45;
          }
        }

        // Spawn Obstacles
        if (time - s.lastObstacleSpawn > 1800 / s.speedMultiplier) {
          const lastObs = s.obstacles[s.obstacles.length - 1];
          const minDistance = 260 + Math.random() * 160;

          if (!lastObs || s.canvasWidth - lastObs.x > minDistance) {
            const rand = Math.random();
            let newObs: Obstacle;

            if (rand < 0.45) {
              // Cactus Small
              const sub = Math.floor(Math.random() * 3); // 1, 2, or 3 cacti
              newObs = {
                x: s.canvasWidth + 20,
                type: 'cactus_small',
                width: 17 * (sub + 1),
                height: 35,
                yOffset: 0,
                subType: sub,
              };
            } else if (rand < 0.8) {
              // Cactus Large
              const sub = Math.floor(Math.random() * 2);
              newObs = {
                x: s.canvasWidth + 20,
                type: 'cactus_large',
                width: 25 * (sub + 1),
                height: 50,
                yOffset: 0,
                subType: sub,
              };
            } else {
              // Pterodactyl Bird
              newObs = {
                x: s.canvasWidth + 20,
                type: 'pterodactyl',
                width: 46,
                height: 36,
                yOffset: Math.random() > 0.5 ? 25 : 48, // low or mid flight
              };
            }

            s.obstacles.push(newObs);
            s.lastObstacleSpawn = time;
          }
        }

        // Move Obstacles
        for (let i = s.obstacles.length - 1; i >= 0; i--) {
          const obs = s.obstacles[i];
          obs.x -= speed;

          // AUTO-LOOP JUMP LOGIC:
          // The Dino detects oncoming obstacle and jumps automatically in perfect timing!
          if (s.isAutoLoop && !s.isJumping) {
            const distanceToObs = obs.x - (s.dinoX + s.dinoWidth);
            // Trigger jump when obstacle is in optimal launch window
            const jumpDistanceThreshold = Math.max(45, 75 * s.speedMultiplier);

            // If it's a cactus or low-flying pterodactyl, jump over it!
            if (distanceToObs > 0 && distanceToObs < jumpDistanceThreshold) {
              if (obs.type !== 'pterodactyl' || obs.yOffset < 40) {
                triggerJump();
              }
            }
          }

          // Collision Detection (for Manual Play mode)
          if (!s.isAutoLoop) {
            const dinoBox = {
              left: s.dinoX + 6,
              right: s.dinoX + s.dinoWidth - 6,
              top: s.groundY - s.dinoHeight + s.dinoY + 4,
              bottom: s.groundY + s.dinoY,
            };

            const obsBox = {
              left: obs.x + 4,
              right: obs.x + obs.width - 4,
              top: s.groundY - obs.height - obs.yOffset + 4,
              bottom: s.groundY - obs.yOffset,
            };

            if (
              dinoBox.right > obsBox.left &&
              dinoBox.left < obsBox.right &&
              dinoBox.bottom > obsBox.top &&
              dinoBox.top < obsBox.bottom
            ) {
              s.isGameOver = true;
              setIsGameOver(true);
              playSound('hit');
            }
          }

          // Remove off-screen obstacles
          if (obs.x + obs.width < -50) {
            s.obstacles.splice(i, 1);
          }
        }
      }

      // ----------------------------------------------------
      // DRAWING SECTION
      // ----------------------------------------------------

      // 1. Draw Clouds
      for (const cl of s.clouds) {
        if (s.spriteLoaded && s.spriteImg) {
          // Cloud in 2x sprite: x=166, y=2, w=92, h=28
          ctx.drawImage(s.spriteImg, 166, 2, 92, 28, cl.x, cl.y, 46, 14);
        } else {
          // Canvas vector fallback
          ctx.fillStyle = s.colorTheme === 'cyber' ? '#27272A' : '#E4E4E7';
          ctx.fillRect(cl.x, cl.y + 4, 38, 8);
          ctx.fillRect(cl.x + 8, cl.y, 22, 12);
        }
      }

      // 2. Draw Ground Line
      ctx.strokeStyle = groundCol;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, s.groundY);
      ctx.lineTo(s.canvasWidth, s.groundY);
      ctx.stroke();

      // Ground bumps & texture
      if (s.spriteLoaded && s.spriteImg) {
        // Draw 2x sprite ground: x=2, y=104, w=2400, h=24
        const sx = (s.groundOffset * 2) % 2400;
        ctx.drawImage(s.spriteImg, sx, 104, s.canvasWidth * 2, 24, 0, s.groundY - 1, s.canvasWidth, 12);
      } else {
        // Procedural dots fallback
        ctx.fillStyle = groundCol;
        for (let i = 0; i < s.canvasWidth; i += 28) {
          const px = (i - s.groundOffset * 1.2) % s.canvasWidth;
          const xPos = px < 0 ? px + s.canvasWidth : px;
          ctx.fillRect(xPos, s.groundY + 3, 4, 2);
          if (i % 56 === 0) {
            ctx.fillRect(xPos + 10, s.groundY + 6, 2, 2);
          }
        }
      }

      // 3. Draw Obstacles (Cacti & Birds)
      for (const obs of s.obstacles) {
        const drawY = s.groundY - obs.height - obs.yOffset;

        if (s.spriteLoaded && s.spriteImg) {
          if (obs.type === 'cactus_small') {
            // Cactus Small: x=446, y=2, w=34 per cactus, h=70
            const sub = obs.subType || 0;
            const sw = 34 * (sub + 1);
            ctx.drawImage(s.spriteImg, 446, 2, sw, 70, obs.x, drawY, obs.width, obs.height);
          } else if (obs.type === 'cactus_large') {
            // Cactus Large: x=652, y=2, w=50 per cactus, h=100
            const sub = obs.subType || 0;
            const sw = 50 * (sub + 1);
            ctx.drawImage(s.spriteImg, 652, 2, sw, 100, obs.x, drawY, obs.width, obs.height);
          } else {
            // Pterodactyl Bird: x=260 (frame 1) or 352 (frame 2), y=2, w=92, h=80
            const birdFrame = Math.floor(s.tick / 10) % 2;
            const sx = birdFrame === 0 ? 260 : 352;
            ctx.drawImage(s.spriteImg, sx, 2, 92, 80, obs.x, drawY, obs.width, obs.height);
          }
        } else {
          // Pixel vector fallback
          ctx.fillStyle = mainCol;
          if (obs.type === 'pterodactyl') {
            ctx.fillRect(obs.x + 10, drawY + 8, 26, 12);
            const wingY = Math.floor(s.tick / 10) % 2 === 0 ? drawY : drawY + 16;
            ctx.fillRect(obs.x + 16, wingY, 8, 10);
          } else {
            ctx.fillRect(obs.x + 4, drawY, obs.width - 8, obs.height);
            ctx.fillRect(obs.x, drawY + 8, 6, 14);
            ctx.fillRect(obs.x + obs.width - 6, drawY + 12, 6, 14);
          }
        }
      }

      // 4. Draw Dino T-Rex
      const dinoDrawX = s.dinoX;
      const dinoDrawY = s.groundY - s.dinoHeight + s.dinoY;

      if (s.spriteLoaded && s.spriteImg) {
        let sx = 1678; // Base standing frame in 2x sprite

        if (s.isGameOver) {
          sx = 2030; // Crashed frame with open eye
        } else if (s.isJumping) {
          sx = 1678; // Jumping posture (both legs slightly bent)
        } else {
          // Alternating running legs (cycle every 6 frames)
          const runCycle = Math.floor(s.tick / 5) % 2;
          sx = runCycle === 0 ? 1854 : 1942;
        }

        ctx.drawImage(s.spriteImg, sx, 2, 88, 94, dinoDrawX, dinoDrawY, s.dinoWidth, s.dinoHeight);
      } else {
        // Accurate pixel art silhouette fallback
        ctx.fillStyle = mainCol;
        // Head
        ctx.fillRect(dinoDrawX + 22, dinoDrawY, 20, 16);
        ctx.fillRect(dinoDrawX + 20, dinoDrawY + 4, 24, 12);
        // Eye cutout
        ctx.fillStyle = bgCol;
        ctx.fillRect(dinoDrawX + 26, dinoDrawY + 4, 3, 3);
        ctx.fillStyle = mainCol;
        // Body & Tail
        ctx.fillRect(dinoDrawX + 6, dinoDrawY + 14, 26, 18);
        ctx.fillRect(dinoDrawX, dinoDrawY + 18, 12, 8);
        // Arms
        ctx.fillRect(dinoDrawX + 32, dinoDrawY + 18, 6, 4);
        // Legs
        if (s.isJumping) {
          ctx.fillRect(dinoDrawX + 12, dinoDrawY + 32, 4, 10);
          ctx.fillRect(dinoDrawX + 22, dinoDrawY + 32, 4, 10);
        } else {
          const runCycle = Math.floor(s.tick / 5) % 2;
          if (runCycle === 0) {
            ctx.fillRect(dinoDrawX + 10, dinoDrawY + 32, 4, 15);
            ctx.fillRect(dinoDrawX + 24, dinoDrawY + 32, 6, 8);
          } else {
            ctx.fillRect(dinoDrawX + 12, dinoDrawY + 32, 6, 8);
            ctx.fillRect(dinoDrawX + 22, dinoDrawY + 32, 4, 15);
          }
        }
      }

      // Sync React state for display counters periodically
      if (s.tick % 6 === 0) {
        setScore(Math.floor(s.score));
      }
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [playSound, triggerJump]);

  // Restart handler
  const handleReset = () => {
    const s = stateRef.current;
    s.isGameOver = false;
    s.score = 0;
    s.obstacles = [];
    s.velocityY = 0;
    s.dinoY = 0;
    s.isJumping = false;
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div ref={containerRef} className="w-full select-none font-mono">
      {/* Top Retro Info Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-zinc-950 bg-[#F4F2EB] px-3.5 py-2 text-xs font-black">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse border border-zinc-950" />
          <span className="text-zinc-950 tracking-wider">CHROME_DINO.EXE // AUTONOMOUS RUNNER</span>
          <span className="hidden sm:inline bg-zinc-950 text-white text-[10px] px-1.5 py-0.5 border border-zinc-950">
            60 FPS
          </span>
        </div>

        {/* Retro Score HUD */}
        <div className="flex items-center gap-3">
          <div className="text-[11px] text-zinc-500 font-bold">
            HI <span className="text-zinc-700">{String(highScore).padStart(5, '0')}</span>
          </div>
          <div className="bg-zinc-950 text-[#FACC15] px-2 py-0.5 border border-zinc-950 font-bold text-xs tracking-widest shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            {String(score).padStart(5, '0')}
          </div>
          <div className="text-[10px] bg-white text-zinc-950 border border-zinc-950 px-1.5 py-0.5 font-bold">
            JUMPS: {jumpCount}
          </div>
        </div>
      </div>

      {/* Main Interactive Canvas Area */}
      <div
        className="relative w-full overflow-hidden cursor-pointer"
        onClick={triggerJump}
        role="button"
        tabIndex={0}
        aria-label="Click or press Space to jump Dino"
      >
        <canvas ref={canvasRef} className="w-full block" />

        {/* Status Overlays */}
        {isAutoLoop && (
          <div className="absolute top-2.5 left-3 bg-zinc-950/90 text-[#FACC15] border border-zinc-800 px-2.5 py-1 rounded text-[10px] font-black tracking-wider flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>AUTO-PILOT: INFINITE JUMP LOOP ACTIVE</span>
          </div>
        )}

        {isGameOver && (
          <div className="absolute inset-0 bg-zinc-950/70 backdrop-blur-[1px] flex flex-col items-center justify-center text-white z-10">
            <p className="font-mono text-base sm:text-lg font-black tracking-widest text-[#FF4D8D] animate-bounce">
              G A M E  O V E R
            </p>
            <p className="font-mono text-xs text-zinc-300 mt-1 mb-3">
              Press SPACE or click anywhere to respawn
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleReset();
              }}
              className="bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-4 py-1.5 font-black text-xs uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-white active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESTART RUN</span>
            </button>
          </div>
        )}
      </div>

      {/* Bottom Interactive Control Center */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-zinc-950 bg-white p-3 text-xs">
        {/* Left: Mode Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setIsAutoLoop(!isAutoLoop)}
            className={`px-3 py-1.5 border-2 border-zinc-950 font-black uppercase text-[11px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 cursor-pointer ${
              isAutoLoop
                ? 'bg-[#A7F3D0] text-zinc-950'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            {isAutoLoop ? <Bot className="w-3.5 h-3.5 text-emerald-800" /> : <Gamepad2 className="w-3.5 h-3.5" />}
            <span>{isAutoLoop ? 'AUTO LOOP [ON]' : 'MANUAL PLAY'}</span>
          </button>
        </div>

        {/* Center: Speed Control */}
        <div className="flex items-center gap-1 bg-zinc-100 p-1 border border-zinc-300 font-mono text-[10px] font-bold">
          <span className="text-zinc-500 px-1">SPEED:</span>
          {[1, 1.4, 1.8].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSpeedMultiplier(s)}
              className={`px-2 py-0.5 border border-zinc-950 transition-all cursor-pointer ${
                speedMultiplier === s
                  ? 'bg-[#FACC15] text-zinc-950 font-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
                  : 'bg-white text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

        {/* Right: Sound & Themes */}
        <div className="flex items-center gap-2">
          {/* Theme Selector */}
          <div className="flex items-center gap-1 bg-zinc-100 p-1 border border-zinc-300 text-[10px]">
            <button
              type="button"
              onClick={() => setColorTheme('retro')}
              className={`px-1.5 py-0.5 border border-zinc-950 cursor-pointer ${
                colorTheme === 'retro' ? 'bg-white font-black' : 'text-zinc-500'
              }`}
              title="Classic Retro Theme"
            >
              CLASSIC
            </button>
            <button
              type="button"
              onClick={() => setColorTheme('cyber')}
              className={`px-1.5 py-0.5 border border-zinc-950 cursor-pointer ${
                colorTheme === 'cyber' ? 'bg-zinc-950 text-emerald-400 font-black' : 'text-zinc-500'
              }`}
              title="Cyberpunk Dark Mode"
            >
              CYBER
            </button>
            <button
              type="button"
              onClick={() => setColorTheme('yellow')}
              className={`px-1.5 py-0.5 border border-zinc-950 cursor-pointer ${
                colorTheme === 'yellow' ? 'bg-[#FACC15] font-black' : 'text-zinc-500'
              }`}
              title="Neo Yellow Theme"
            >
              BRUTAL
            </button>
          </div>

          {/* Sound Toggle */}
          <button
            type="button"
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) playSound('score');
            }}
            className={`p-1.5 border-2 border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer ${
              soundEnabled ? 'bg-[#FACC15] text-zinc-950' : 'bg-white text-zinc-400'
            }`}
            title={soundEnabled ? 'Mute 8-bit Sound' : 'Enable 8-bit Sound'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
