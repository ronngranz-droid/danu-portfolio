'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] text-white font-mono p-6 select-none">
      {/* Neo-brutalist technical loading container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-md bg-[#121214] border-2 border-zinc-700 p-6 sm:p-8 rounded-2xl shadow-[8px_8px_0px_0px_#FACC15] space-y-6"
      >
        {/* Top technical bar */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D8D] animate-ping" />
            <span className="text-white font-bold tracking-wider">KUZE3EZ // OS_LOADER</span>
          </div>
          <span className="text-emerald-400 font-bold text-[11px] bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
            PORT: 3050
          </span>
        </div>

        {/* Center Loader Graphics */}
        <div className="flex flex-col items-center justify-center py-6 space-y-5">
          {/* Animated Reticle Radar */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#FACC15]"
            />
            {/* Inner reverse rotating ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-[#FF5500]/60"
            />
            {/* Center pulsing core */}
            <motion.div
              animate={{ scale: [0.85, 1.15, 0.85] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-8 h-8 rounded-full bg-[#0038FF] border-2 border-white flex items-center justify-center shadow-[0_0_12px_rgba(0,56,255,0.6)]"
            >
              <span className="w-2 h-2 rounded-full bg-white block" />
            </motion.div>
          </div>

          <div className="text-center space-y-1">
            <h2 className="text-lg font-black tracking-tight text-white uppercase">
              LOADING SYSTEM RESOURCES
            </h2>
            <p className="text-xs text-zinc-400">
              Synchronizing UI modules, graphics &amp; repositories...
            </p>
          </div>
        </div>

        {/* Bottom Loading Progress Meter */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-zinc-400">BUFFERING ENGINE...</span>
            <span className="text-[#FACC15] font-bold animate-pulse">SYNCHRONIZING</span>
          </div>
          <div className="h-2.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-700">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
              className="h-full w-2/3 bg-gradient-to-r from-transparent via-[#FACC15] to-[#FF4D8D]"
            />
          </div>
        </div>

        {/* System identity tag */}
        <div className="pt-2 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-500 font-bold uppercase">
          <span>RONNGRANZ</span>
          <span>WEB DEVELOPER</span>
        </div>
      </motion.div>
    </div>
  );
}
