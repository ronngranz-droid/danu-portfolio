'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MiniTerminal } from '@/components/widgets/MiniTerminal';
import { personalInfo } from '@/data/socialLinks';
import { CheckCircle2, Code2, Cpu, Bot, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t-2 border-zinc-950 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          number="002"
          systemTag="SYSTEM OVERVIEW"
          title="PROFILE & DEVELOPMENT."
          description="Software Engineering student treating code as an engineering craft and digital products as practical problem-solving tools."
          badgeText="RPL // PROFILE"
          badgeColor="yellow"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Neo-Brutalist Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="w-full bg-[#F4F2EB] border-2 border-zinc-950 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
              {/* Operator Identity Card with Photo */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Photo Frame */}
                <div className="relative shrink-0 group">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-zinc-950 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-zinc-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/profile.jpg"
                      alt="Danu Sakti Aditya Permana — Software Engineering Student & Frontend Developer"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="absolute -bottom-2 -right-1.5 bg-emerald-300 text-zinc-950 border border-zinc-950 text-[9px] font-mono font-black px-1.5 py-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>OPERATOR</span>
                  </span>
                </div>

                {/* Title & Headline */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-[#FACC15] text-zinc-950 font-mono text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      FRONTEND DEV
                    </span>
                    <span className="bg-white text-zinc-950 font-mono text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      INDONESIA
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-zinc-950 leading-tight">
                    {personalInfo.name}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs text-zinc-700 leading-relaxed font-semibold">
                    Software Engineering (RPL) student focused on building functional web products, clean component architectures, and intuitive digital experiences.
                  </p>
                </div>
              </div>

              {/* Story Narrative */}
              <p className="font-mono text-xs sm:text-sm text-zinc-600 leading-relaxed pt-3 border-t border-zinc-300">
                Sebagai siswa jurusan Rekayasa Perangkat Lunak (RPL), saya percaya cara belajar paling efektif adalah dengan langsung membuat project nyata: memecahkan kebutuhan riil, merancang skema database yang rapi, menulis kode yang mudah dirawat, dan terus mencoba teknologi web terbaru.
              </p>

              {/* Engineering Specs Metadata Matrix */}
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-zinc-300/80 pb-2">
                  <dt className="text-zinc-500 font-bold uppercase text-[10px]">PRIMARY</dt>
                  <dd className="font-bold text-zinc-950">Frontend Engineering</dd>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-300/80 pb-2">
                  <dt className="text-zinc-500 font-bold uppercase text-[10px]">EXPLORING</dt>
                  <dd className="font-bold text-[#0038FF]">AI Assistants &amp; APIs</dd>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-300/80 pb-2">
                  <dt className="text-zinc-500 font-bold uppercase text-[10px]">DISCIPLINE</dt>
                  <dd className="font-bold text-zinc-950">Rekayasa Perangkat Lunak</dd>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-300/80 pb-2">
                  <dt className="text-zinc-500 font-bold uppercase text-[10px]">CURRENT</dt>
                  <dd className="font-bold text-emerald-700">Building Kelana</dd>
                </div>
              </dl>
            </div>
          </motion.div>

          {/* Right Column: Interactive Mini Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col space-y-4"
          >
            <div className="flex items-center justify-between font-mono text-xs font-bold text-zinc-700 px-1">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-4 w-4 text-[#0038FF]" />
                <span>INTERACTIVE CONSOLE WIDGET</span>
              </span>
              <span className="text-zinc-400 text-[11px]">[TYPE COMMANDS]</span>
            </div>

            <MiniTerminal />

            {/* Quick Command Suggestions */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-zinc-600 bg-zinc-100 p-2.5 rounded-xl border border-zinc-300">
              <span className="font-bold text-zinc-900">Try:</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-300 font-bold text-zinc-800">whoami</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-300 font-bold text-zinc-800">projects</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-300 font-bold text-zinc-800">skills</span>
              <span className="bg-white px-2 py-0.5 rounded border border-zinc-300 font-bold text-zinc-800">contact</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
