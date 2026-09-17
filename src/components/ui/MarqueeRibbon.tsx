'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Zap, Code2, Layers, CheckCircle2 } from 'lucide-react';

interface MarqueeRibbonProps {
  variant?: 'yellow' | 'pink' | 'dark';
  className?: string;
}

export const MarqueeRibbon: React.FC<MarqueeRibbonProps> = ({
  variant = 'yellow',
  className = '',
}) => {
  const items = [
    { label: 'FULL ANIMATION SUITE', icon: Sparkles },
    { label: 'FLAGSHIP // KELANA SYSTEM', icon: Zap },
    { label: 'NEXT.JS 16 + TURBOPACK', icon: Cpu },
    { label: '60 FPS 3D & CANVAS ENGINES', icon: Layers },
    { label: 'CLEAN ARCHITECTURAL PATTERNS', icon: Code2 },
    { label: 'SOFTWARE ENGINEERING (RPL)', icon: Terminal },
    { label: 'AVAILABLE FOR NEW BUILDS', icon: CheckCircle2 },
  ];

  const bgClasses = {
    yellow: 'bg-[#FACC15] text-zinc-950 border-y-2 border-zinc-950',
    pink: 'bg-[#FF4D8D] text-white border-y-2 border-zinc-950',
    dark: 'bg-zinc-950 text-white border-y-2 border-zinc-950',
  };

  return (
    <div className={`relative w-full overflow-hidden py-2.5 font-mono text-xs font-black uppercase tracking-wider select-none ${bgClasses[variant]} ${className}`}>
      {/* Moving Marquee Track */}
      <div className="flex w-max animate-marquee space-x-6">
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center space-x-2 shrink-0">
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
              <span className="opacity-40">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
