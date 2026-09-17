'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const SoundEffects: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('danu_sfx_enabled');
    if (saved === 'true') {
      setEnabled(true);
    }
  }, []);

  const playTone = useCallback((freq: number, duration: number, type: OscillatorType = 'sine', decay = true) => {
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
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.03, now);
      if (decay) {
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch {
      // AudioContext failure safely ignored
    }
  }, []);

  const toggleSound = () => {
    const next = !enabled;
    setEnabled(next);
    localStorage.setItem('danu_sfx_enabled', String(next));
    if (next) {
      playTone(600, 0.08, 'sine');
      setTimeout(() => playTone(900, 0.12, 'sine'), 80);
    }
  };

  useEffect(() => {
    if (!enabled) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('button, a, [role="button"], [data-cursor]')) {
        playTone(720, 0.03, 'sine');
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('button, a, [role="button"]')) {
        playTone(320, 0.05, 'triangle');
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('click', handleClick);
    };
  }, [enabled, playTone]);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        type="button"
        onClick={toggleSound}
        data-cursor="AUDIO"
        aria-label={enabled ? 'Disable Sound Effects' : 'Enable Sound Effects'}
        className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border-2 border-zinc-950 font-mono text-[10px] font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
          enabled
            ? 'bg-[#A7F3D0] text-zinc-950 hover:bg-emerald-300'
            : 'bg-white text-zinc-700 hover:bg-zinc-100'
        }`}
      >
        {enabled ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-emerald-800 animate-pulse" />
            <span>SFX: ON</span>
            <span className="flex gap-0.5 items-end h-2.5">
              <span className="w-0.5 h-1.5 bg-emerald-700 animate-pulse" />
              <span className="w-0.5 h-2.5 bg-emerald-700 animate-bounce" />
              <span className="w-0.5 h-1 bg-emerald-700 animate-pulse" />
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-zinc-400" />
            <span>SFX: OFF</span>
          </>
        )}
      </button>
    </div>
  );
};
