'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, RotateCcw, Tv, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const FloatingTools: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [crtEnabled, setCrtEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerReboot = () => {
    window.dispatchEvent(new CustomEvent('danu-trigger-reboot'));
  };

  const toggleCrt = () => {
    const next = !crtEnabled;
    setCrtEnabled(next);
    if (next) {
      document.body.classList.add('crt-active');
    } else {
      document.body.classList.remove('crt-active');
    }
  };

  return (
    <>
      {/* CRT Scanline Overlay when enabled */}
      {crtEnabled && (
        <div className="pointer-events-none fixed inset-0 z-[99998] overflow-hidden select-none">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)',
              backgroundSize: '100% 4px',
            }}
          />
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]" />
        </div>
      )}

      {/* Floating Tool Dock in Bottom-Right */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-xl border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-mono text-xs">
        {/* Quick jump to Dino Runner */}
        <Link
          href="#dino-runner"
          data-cursor="DINO"
          className="p-1.5 bg-[#FACC15] hover:bg-yellow-300 text-zinc-950 rounded-lg border border-zinc-950 font-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 flex items-center gap-1"
          title="Jump to Chrome Dino Runner"
        >
          <span className="text-xs animate-bounce">🦖</span>
          <span className="hidden sm:inline text-[10px]">DINO</span>
        </Link>

        {/* CRT Scanline Toggle */}
        <button
          type="button"
          onClick={toggleCrt}
          data-cursor="CRT"
          className={`p-1.5 rounded-lg border border-zinc-950 font-bold transition-transform hover:-translate-y-0.5 cursor-pointer ${
            crtEnabled ? 'bg-emerald-400 text-zinc-950' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
          }`}
          title="Toggle Retro CRT Scanlines"
        >
          <Tv className="w-3.5 h-3.5" />
        </button>

        {/* Reboot Trigger */}
        <button
          type="button"
          onClick={triggerReboot}
          data-cursor="REBOOT"
          className="p-1.5 rounded-lg border border-zinc-950 bg-zinc-100 hover:bg-[#FF4D8D] hover:text-white text-zinc-700 font-bold transition-transform hover:-translate-y-0.5 cursor-pointer"
          title="Trigger System Reboot Animation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>

        {/* Scroll To Top */}
        {showTopBtn && (
          <button
            type="button"
            onClick={scrollToTop}
            data-cursor="TOP"
            className="p-1.5 rounded-lg border border-zinc-950 bg-zinc-950 text-white hover:bg-[#0038FF] font-bold transition-transform hover:-translate-y-0.5 cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </>
  );
};
