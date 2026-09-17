'use client';

import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural Canvas Texture for Danu's ID Badge
function createBadgeTextures() {
  if (typeof document === 'undefined') return null;

  // Front Canvas Texture (512 x 768)
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = 512;
  frontCanvas.height = 768;
  const ctx = frontCanvas.getContext('2d');
  if (!ctx) return null;

  // Background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, 512, 768);

  // Border & Grid header
  ctx.fillStyle = '#0A0A0A';
  ctx.fillRect(0, 0, 512, 110);

  ctx.fillStyle = '#FACC15';
  ctx.font = 'bold 24px monospace';
  ctx.fillText('DANU.SYSTEM // 0x7F', 32, 48);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '16px monospace';
  ctx.fillText('IDENTITY SPECIFICATION // RPL', 32, 82);

  // Status Chip
  ctx.fillStyle = '#A7F3D0';
  ctx.fillRect(360, 32, 120, 32);
  ctx.fillStyle = '#0A0A0A';
  ctx.font = 'bold 13px monospace';
  ctx.fillText('● ONLINE', 382, 54);

  // Avatar / Box Graphic
  ctx.fillStyle = '#F4F2EB';
  ctx.fillRect(32, 140, 448, 200);
  ctx.strokeStyle = '#0A0A0A';
  ctx.lineWidth = 4;
  ctx.strokeRect(32, 140, 448, 200);

  // Graphic Text
  ctx.fillStyle = '#FF4D8D';
  ctx.font = '900 48px monospace';
  ctx.fillText('KUZE3EZ', 56, 215);

  ctx.fillStyle = '#0038FF';
  ctx.font = 'bold 20px monospace';
  ctx.fillText('FRONTEND DEVELOPER', 56, 255);

  ctx.fillStyle = '#737373';
  ctx.font = '14px monospace';
  ctx.fillText('kuze3ez@system:~$ ./build-future', 56, 290);

  // Operator Details
  ctx.fillStyle = '#0A0A0A';
  ctx.font = 'bold 15px monospace';
  ctx.fillText('OPERATOR:', 32, 380);
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('Danu Sakti Aditya Permana', 32, 412);

  ctx.font = 'bold 15px monospace';
  ctx.fillText('DISCIPLINE:', 32, 460);
  ctx.fillStyle = '#0038FF';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('Software Engineering (RPL)', 32, 492);

  ctx.fillStyle = '#0A0A0A';
  ctx.font = 'bold 15px monospace';
  ctx.fillText('FLAGSHIP PLATFORM:', 32, 540);
  ctx.fillStyle = '#10B981';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('Kelana (Language Platform)', 32, 570);

  // Barcode decoration at bottom
  ctx.fillStyle = '#0A0A0A';
  for (let i = 32; i < 480; i += 6) {
    const barW = (i * 13) % 5 === 0 ? 4 : 2;
    ctx.fillRect(i, 630, barW, 60);
  }
  ctx.font = '12px monospace';
  ctx.fillText('DSAP-2026-RPL-PRODUCTION-TOKEN-OK', 110, 715);

  const frontTexture = new THREE.CanvasTexture(frontCanvas);
  frontTexture.anisotropy = 8;

  // Back Canvas Texture (512 x 768)
  const backCanvas = document.createElement('canvas');
  backCanvas.width = 512;
  backCanvas.height = 768;
  const bctx = backCanvas.getContext('2d');
  if (!bctx) return null;

  bctx.fillStyle = '#0A0A0A';
  bctx.fillRect(0, 0, 512, 768);

  // Technical blueprint cross-hatch
  bctx.strokeStyle = '#222222';
  bctx.lineWidth = 1;
  for (let x = 0; x < 512; x += 32) {
    bctx.beginPath();
    bctx.moveTo(x, 0);
    bctx.lineTo(x, 768);
    bctx.stroke();
  }
  for (let y = 0; y < 768; y += 32) {
    bctx.beginPath();
    bctx.moveTo(0, y);
    bctx.lineTo(512, y);
    bctx.stroke();
  }

  bctx.fillStyle = '#FACC15';
  bctx.font = 'bold 26px monospace';
  bctx.fillText('SYSTEM MATRIX // TECH', 48, 120);

  bctx.fillStyle = '#FFFFFF';
  bctx.font = '16px monospace';
  bctx.fillText('• Next.js 15 App Router', 48, 180);
  bctx.fillText('• React 19 + TypeScript', 48, 220);
  bctx.fillText('• Tailwind CSS + Framer', 48, 260);
  bctx.fillText('• MySQL 8 + 3NF Relational', 48, 300);
  bctx.fillText('• Web Audio & Speech APIs', 48, 340);
  bctx.fillText('• AI Agent Workflows', 48, 380);

  bctx.fillStyle = '#A7F3D0';
  bctx.font = 'italic 16px sans-serif';
  bctx.fillText('"Show what I build, how I build it,', 48, 480);
  bctx.fillText('and what problem it solves."', 48, 510);

  bctx.fillStyle = '#737373';
  bctx.font = '13px monospace';
  bctx.fillText('AUTHORIZED ACCESS: LEVEL_01', 48, 620);
  bctx.fillText('ID: 0xDANU_SAKTI_ADITYA_PERMANA', 48, 650);

  const backTexture = new THREE.CanvasTexture(backCanvas);
  backTexture.anisotropy = 8;

  // Lanyard ribbon strap texture
  const strapCanvas = document.createElement('canvas');
  strapCanvas.width = 64;
  strapCanvas.height = 512;
  const sctx = strapCanvas.getContext('2d');
  if (!sctx) return null;

  sctx.fillStyle = '#FACC15';
  sctx.fillRect(0, 0, 64, 512);

  sctx.fillStyle = '#0A0A0A';
  sctx.fillRect(26, 0, 12, 512);

  sctx.save();
  sctx.translate(32, 256);
  sctx.rotate(-Math.PI / 2);
  sctx.font = 'bold 24px monospace';
  sctx.fillText('KUZE3EZ // RPL // 2026', -180, 8);
  sctx.restore();

  const strapTexture = new THREE.CanvasTexture(strapCanvas);
  strapTexture.wrapS = THREE.RepeatWrapping;
  strapTexture.wrapT = THREE.RepeatWrapping;
  strapTexture.repeat.set(1, 4);

  return { frontTexture, backTexture, strapTexture };
}

// Function to generate ribbon geometry from 3D points
function updateRibbonGeometry(geometry: THREE.BufferGeometry, points: THREE.Vector3[], width = 0.26) {
  const numPts = points.length;
  const positions = new Float32Array(numPts * 2 * 3);
  const uvs = new Float32Array(numPts * 2 * 2);
  const indices: number[] = [];

  for (let i = 0; i < numPts; i++) {
    const p = points[i];
    const prev = points[Math.max(0, i - 1)];
    const next = points[Math.min(numPts - 1, i + 1)];
    const dir = new THREE.Vector3().subVectors(next, prev).normalize();
    if (dir.lengthSq() < 0.0001) dir.set(0, -1, 0);

    // Normal in screen-aligned plane
    const normal = new THREE.Vector3(-dir.y, dir.x, 0).normalize().multiplyScalar(width / 2);

    // Left vertex
    positions[i * 6] = p.x - normal.x;
    positions[i * 6 + 1] = p.y - normal.y;
    positions[i * 6 + 2] = p.z;

    // Right vertex
    positions[i * 6 + 3] = p.x + normal.x;
    positions[i * 6 + 4] = p.y + normal.y;
    positions[i * 6 + 5] = p.z;

    // UV coordinates
    const v = i / (numPts - 1);
    uvs[i * 4] = 0;
    uvs[i * 4 + 1] = v;
    uvs[i * 4 + 2] = 1;
    uvs[i * 4 + 3] = v;

    if (i < numPts - 1) {
      const a = i * 2;
      const b = i * 2 + 1;
      const c = (i + 1) * 2;
      const d = (i + 1) * 2 + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
}

interface InteractiveLanyardProps {
  textures: {
    frontTexture: THREE.Texture;
    backTexture: THREE.Texture;
    strapTexture: THREE.Texture;
  };
}

function InteractiveLanyard({ textures }: InteractiveLanyardProps) {
  const ribbonMeshRef = useRef<THREE.Mesh>(null);
  const cardGroupRef = useRef<THREE.Group>(null);
  const ribbonGeomRef = useRef<THREE.BufferGeometry>(new THREE.BufferGeometry());

  // Fixed top anchor pin
  const anchor = useMemo(() => new THREE.Vector3(0, 2.7, 0), []);

  // Physics state
  const cardPos = useRef(new THREE.Vector3(0, -0.4, 0));
  const cardVel = useRef(new THREE.Vector3(0, 0, 0));
  const cardRot = useRef(new THREE.Vector3(0, 0, 0));
  const targetRotY = useRef(0);

  // Interaction state
  const isDragging = useRef(false);
  const dragTarget = useRef(new THREE.Vector3(0, -0.4, 0));
  const pointerDownTime = useRef(0);

  // Bezier curve for dynamic ribbon
  const curve = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 2.7, 0),
        new THREE.Vector3(0, 1.8, 0),
        new THREE.Vector3(0, 0.9, 0),
        new THREE.Vector3(0, 0.2, 0),
        new THREE.Vector3(0, -0.4 + 1.35, 0),
      ]),
    []
  );

  // Initial ribbon geometry
  useEffect(() => {
    updateRibbonGeometry(ribbonGeomRef.current, curve.getPoints(24), 0.26);
  }, [curve]);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);

    if (isDragging.current) {
      // Smoothly follow drag target
      cardPos.current.lerp(dragTarget.current, 0.35);

      // Track drag velocity
      cardVel.current
        .copy(dragTarget.current)
        .sub(cardPos.current)
        .multiplyScalar(1 / (dt || 0.016));

      // Natural tilt while dragging
      cardRot.current.z = -cardPos.current.x * 0.18;
      cardRot.current.x = (cardPos.current.y - (-0.4)) * 0.12;
    } else {
      // Free swinging pendulum physics
      // Gravity
      cardVel.current.y -= 14 * dt;

      // Spring / string tension to top anchor
      const diff = new THREE.Vector3().subVectors(cardPos.current, anchor);
      const dist = diff.length();
      const stringLength = 3.1;

      if (dist > stringLength) {
        const excess = dist - stringLength;
        const tensionForce = diff.normalize().multiplyScalar(-excess * 32);
        cardVel.current.addScaledVector(tensionForce, dt);
      }

      // Restoring force toward center line
      cardVel.current.x -= cardPos.current.x * 10 * dt;

      // Ambient idle breathing sway
      const idleSway = Math.sin(state.clock.elapsedTime * 1.6) * 0.1;
      cardVel.current.x += idleSway * dt;

      // Damping (air resistance)
      cardVel.current.multiplyScalar(0.978);

      // Integrate position
      cardPos.current.addScaledVector(cardVel.current, dt);

      // Rotation dynamics
      cardRot.current.z += (-cardPos.current.x * 0.22 - cardRot.current.z) * 0.12;
      cardRot.current.x += (-cardVel.current.y * 0.02 - cardRot.current.x) * 0.12;
    }

    // Y rotation interpolation (flip)
    cardRot.current.y += (targetRotY.current - cardRot.current.y) * 0.1;

    // Apply to 3D Card Group
    if (cardGroupRef.current) {
      cardGroupRef.current.position.copy(cardPos.current);
      cardGroupRef.current.rotation.set(cardRot.current.x, cardRot.current.y, cardRot.current.z);
    }

    // Update Ribbon Curve
    const clipPos = new THREE.Vector3(
      cardPos.current.x,
      cardPos.current.y + 1.35,
      cardPos.current.z
    );

    curve.points[0].copy(anchor);
    curve.points[1].set(
      anchor.x * 0.7 + clipPos.x * 0.3,
      anchor.y * 0.65 + clipPos.y * 0.35,
      anchor.z * 0.7 + clipPos.z * 0.3
    );
    curve.points[2].set(
      anchor.x * 0.35 + clipPos.x * 0.65,
      anchor.y * 0.35 + clipPos.y * 0.65,
      anchor.z * 0.35 + clipPos.z * 0.65
    );
    curve.points[3].set(
      anchor.x * 0.1 + clipPos.x * 0.9,
      anchor.y * 0.1 + clipPos.y * 0.9,
      anchor.z * 0.1 + clipPos.z * 0.9
    );
    curve.points[4].copy(clipPos);

    updateRibbonGeometry(ribbonGeomRef.current, curve.getPoints(24), 0.26);
  });

  // Pointer event handlers
  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    isDragging.current = true;
    pointerDownTime.current = Date.now();
    (e.target as HTMLElement)?.setPointerCapture?.(e.pointerId);
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    isDragging.current = false;
    (e.target as HTMLElement)?.releasePointerCapture?.(e.pointerId);

    // If it was a quick click (< 200ms) without large drag, flip the card!
    if (Date.now() - pointerDownTime.current < 220) {
      targetRotY.current += Math.PI;
    }
  };

  const handlePlanePointerMove = (e: any) => {
    if (isDragging.current && e.point) {
      dragTarget.current.set(
        Math.max(-2.2, Math.min(2.2, e.point.x)),
        Math.max(-2.2, Math.min(1.2, e.point.y)),
        0
      );
    }
  };

  return (
    <>
      {/* Invisible plane for smooth raycasting during drag */}
      <mesh
        visible={false}
        position={[0, 0, 0]}
        onPointerMove={handlePlanePointerMove}
        onPointerUp={handlePointerUp}
      >
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Top Fixed Anchor Pin */}
      <mesh position={[0, 2.7, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.15, 16]} />
        <meshStandardMaterial color="#FACC15" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.7, 0.08]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#0A0A0A" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Dynamic Ribbon Mesh */}
      <mesh ref={ribbonMeshRef} geometry={ribbonGeomRef.current}>
        <meshStandardMaterial
          map={textures.strapTexture}
          roughness={0.5}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3D Physical Badge Card */}
      <group
        ref={cardGroupRef}
        position={[0, -0.4, 0]}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {/* Metal Top Clip */}
        <mesh position={[0, 1.4, 0]}>
          <boxGeometry args={[0.36, 0.18, 0.08]} />
          <meshStandardMaterial color="#CCCCCC" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.11, 0.025, 16, 32]} />
          <meshStandardMaterial color="#FACC15" metalness={0.85} roughness={0.2} />
        </mesh>

        {/* Dual-Sided Card Body */}
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.9, 2.65, 0.04]} />
          {/* Materials: [right, left, top, bottom, front, back] */}
          <meshStandardMaterial attach="material-0" color="#0A0A0A" />
          <meshStandardMaterial attach="material-1" color="#0A0A0A" />
          <meshStandardMaterial attach="material-2" color="#0A0A0A" />
          <meshStandardMaterial attach="material-3" color="#0A0A0A" />
          <meshStandardMaterial
            attach="material-4"
            map={textures.frontTexture}
            roughness={0.25}
            metalness={0.08}
          />
          <meshStandardMaterial
            attach="material-5"
            map={textures.backTexture}
            roughness={0.3}
            metalness={0.08}
          />
        </mesh>
      </group>
    </>
  );
}

export const Lanyard: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [textures, setTextures] = useState<{
    frontTexture: THREE.Texture;
    backTexture: THREE.Texture;
    strapTexture: THREE.Texture;
  } | null>(null);

  useEffect(() => {
    const generated = createBadgeTextures();
    if (generated) setTextures(generated);
  }, []);

  if (!textures) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center font-mono space-y-2">
        <div className="w-8 h-8 rounded-full border-2 border-[#FACC15] border-t-transparent animate-spin" />
        <span className="text-xs font-bold text-zinc-300">INITIALIZING 3D PHYSICS LANYARD...</span>
        <span className="text-[10px] text-zinc-500">DANU.SYSTEM // ID BADGE</span>
      </div>
    );
  }

  return (
    <div className={`w-full h-full relative select-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 9.5], fov: 32 }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[4, 8, 6]} intensity={2.0} />
        <directionalLight position={[-4, -4, -4]} intensity={0.8} color="#0038FF" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#FFFFFF" />

        <InteractiveLanyard textures={textures} />
      </Canvas>
    </div>
  );
};
