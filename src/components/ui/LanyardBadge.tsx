'use client';

import React, { Component, ErrorInfo, ReactNode, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicLanyard = dynamic(
  () => import('./Lanyard').then((mod) => mod.Lanyard),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center font-mono space-y-2 bg-zinc-950/40 rounded-xl">
        <div className="w-8 h-8 rounded-full border-2 border-[#FACC15] border-t-transparent animate-spin" />
        <span className="text-xs font-bold text-zinc-300">LOADING 3D PHYSICS LANYARD...</span>
        <span className="text-[10px] text-zinc-500">DANU.SYSTEM // ID BADGE</span>
      </div>
    ),
  }
);

// Fallback CSS 3D Holographic Card in case WebGL is disabled or unsupported
const CSSFallbackBadge: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      {/* Yellow Ribbon Strap */}
      <div className="w-7 h-16 bg-[#FACC15] border-x-2 border-black flex items-center justify-center shadow-md relative z-10">
        <div className="w-1.5 h-full bg-black" />
      </div>
      {/* Metal clip */}
      <div className="w-8 h-3 bg-zinc-400 border-2 border-black rounded-xs -mt-1 z-20" />

      {/* 3D Card Container */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-[230px] sm:w-[250px] h-[330px] sm:h-[350px] relative cursor-pointer select-none -mt-1 group [perspective:1000px]"
        title="Click to flip card"
      >
        <div
          className={`w-full h-full relative duration-700 [transform-style:preserve-3d] transition-transform ${
            flipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-full bg-white rounded-xl border-3 border-zinc-950 p-3.5 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] [backface-visibility:hidden]">
            <div>
              <div className="bg-zinc-950 text-[#FACC15] px-2 py-1.5 rounded flex items-center justify-between text-[11px] font-mono font-bold">
                <span>DANU.SYSTEM // 0x7F</span>
                <span className="text-emerald-400 text-[10px]">● ONLINE</span>
              </div>
              <div className="mt-3 p-3 bg-zinc-100 border-2 border-zinc-950 rounded text-left">
                <span className="text-2xl font-black font-mono text-[#FF4D8D] block">KUZE3EZ</span>
                <span className="text-xs font-bold font-mono text-[#0038FF] block">FRONTEND DEVELOPER</span>
                <span className="text-[10px] font-mono text-zinc-500 mt-1 block">kuze3ez@system:~$ ./build</span>
              </div>
            </div>

            <div className="space-y-1 text-left font-mono text-[11px]">
              <div>
                <span className="text-zinc-500 text-[9px] block">OPERATOR</span>
                <span className="font-bold text-zinc-950">Danu Sakti Aditya Permana</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[9px] block">DISCIPLINE</span>
                <span className="font-bold text-[#0038FF]">Software Engineering (RPL)</span>
              </div>
              <div>
                <span className="text-zinc-500 text-[9px] block">FLAGSHIP</span>
                <span className="font-bold text-emerald-600">Kelana (Platform)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-200">
              <div className="h-6 bg-zinc-900 rounded-xs flex items-center justify-center">
                <span className="font-mono text-[9px] text-zinc-400 tracking-widest font-bold">
                  DSAP-2026-RPL-TOKEN
                </span>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 w-full h-full bg-zinc-950 text-white rounded-xl border-3 border-[#FACC15] p-4 flex flex-col justify-between shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="text-left font-mono">
              <span className="text-sm font-black text-[#FACC15] block border-b border-zinc-800 pb-2">
                SYSTEM MATRIX // TECH
              </span>
              <ul className="text-xs space-y-1.5 mt-3 text-zinc-300">
                <li>• Next.js 15 App Router</li>
                <li>• React 19 + TypeScript</li>
                <li>• Tailwind CSS + Framer</li>
                <li>• MySQL 8 + 3NF Schema</li>
                <li>• Web Audio Synthesizer</li>
              </ul>
            </div>

            <div className="p-2 bg-zinc-900 rounded border border-zinc-800 text-left font-mono text-[10px] text-emerald-400 italic">
              "Show what I build, how I build it, and what problem it solves."
            </div>

            <div className="text-[10px] font-mono text-zinc-500 text-left">
              AUTHORIZED: LEVEL_01 // RPL_2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Lanyard 3D Canvas error caught, rendering fallback:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface LanyardBadgeProps {
  className?: string;
}

export const LanyardBadge: React.FC<LanyardBadgeProps> = ({ className = '' }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={`w-full h-full flex items-center justify-center p-6 ${className}`}>
        <div className="w-8 h-8 rounded-full border-2 border-[#FACC15] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className={`w-full h-full min-h-[380px] sm:min-h-[440px] relative ${className}`}>
      <ErrorBoundary fallback={<CSSFallbackBadge />}>
        <DynamicLanyard />
      </ErrorBoundary>
      <div className="absolute bottom-2 inset-x-0 flex items-center justify-center pointer-events-none z-30">
        <span className="px-2.5 py-1 bg-white/95 border border-zinc-950 font-mono text-[10px] font-black text-zinc-900 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider backdrop-blur-xs">
          DRAG TO SWING • CLICK TO FLIP
        </span>
      </div>
    </div>
  );
};
