'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { DinoRunner } from '@/components/widgets/DinoRunner';
import { Bot, Sparkles, Terminal, ShieldAlert, Cpu } from 'lucide-react';

export const DinoSection: React.FC = () => {
  return (
    <section id="dino-runner" className="py-6 sm:py-8 border-t-2 border-zinc-950 bg-[#F4F2EB] relative overflow-hidden">
      {/* Ambient Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <Container>

        {/* Main Neo-Brutalist Game Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative w-full bg-white border-2 border-zinc-950 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl overflow-hidden"
        >
          {/* Top Status Bar */}
          <div className="bg-zinc-950 text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs border-b-2 border-zinc-950">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D8D] animate-ping" />
              <span className="font-bold tracking-tight text-[#FACC15]">CHROME_DINO // AUTO-PILOT MATRIX</span>
              <span className="hidden md:inline text-zinc-500">•</span>
              <span className="hidden md:inline text-zinc-300 text-[11px]">
                Target: Autonomous Obstacle Clearance (Looping)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="bg-zinc-900 border border-zinc-700 px-2 py-0.5 text-[10px] text-emerald-400 font-bold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE SIMULATION
              </span>
            </div>
          </div>

          {/* Dino Runner Canvas Engine */}
          <DinoRunner />

          {/* Bottom Technical Spec Ticker */}
          <div className="p-3.5 bg-zinc-50 border-t-2 border-zinc-950 grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-[11px] text-zinc-700">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-[#0038FF] shrink-0" />
              <div>
                <span className="font-black text-zinc-950 uppercase">Auto-Jump Logic:</span>
                <span className="text-zinc-600 block text-[10px]">Perhitungan trajectory &amp; jarak obstacle real-time</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#FF4D8D] shrink-0" />
              <div>
                <span className="font-black text-zinc-950 uppercase">60 FPS Canvas:</span>
                <span className="text-zinc-600 block text-[10px]">Render sprite HDPI 2x tanpa raster blur</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <span className="font-black text-zinc-950 uppercase">Interactive:</span>
                <span className="text-zinc-600 block text-[10px]">Bisa klik / tekan Space untuk kontrol manual</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
