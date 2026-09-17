'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { personalInfo, socialLinks } from '@/data/socialLinks';
import { SystemWindow } from '@/components/ui/SystemWindow';
import { LanyardBadge } from '@/components/ui/LanyardBadge';
import {
  ArrowDown,
  Sparkles,
  MapPin,
  GraduationCap,
  ArrowUpRight,
  Code2,
} from 'lucide-react';
import { Github } from '@/components/ui/SocialIcons';
import { TextScramble } from '@/components/ui/TextScramble';
import { CountUp } from '@/components/ui/CountUp';

export const Hero: React.FC = () => {
  const githubLink = socialLinks.find((s) => s.label === 'GitHub')?.href || 'https://github.com/ronngranz-droid';
  const [coords, setCoords] = useState({ x: 124.5, y: 88.2 });
  const [cardMode, setCardMode] = useState<'3d-lanyard' | 'specs'>('3d-lanyard');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCoords({
        x: Number((e.clientX / 10).toFixed(1)),
        y: Number((e.clientY / 10).toFixed(1)),
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="hero" className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
      <Container>
        {/* Main Neo-Brutalist Poster Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full bg-white border-2 border-zinc-950 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-5 sm:p-8 md:p-10 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle Scanning Radar Line */}
          <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF4D8D]/40 to-transparent pointer-events-none animate-radar-scan z-0" />

          {/* Top Header Grid Metadata Bar */}
          <div className="w-full pb-3 sm:pb-5 border-b-2 border-zinc-950 flex flex-row justify-between items-center gap-2 font-mono text-xs uppercase font-black text-zinc-950 relative z-10">
            <div className="flex items-center gap-2">
              <span className="bg-zinc-950 text-white px-2 sm:px-2.5 py-1 border border-zinc-950 font-mono text-[10px] sm:text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                DANU.SYSTEM // 001
              </span>
              <span className="hidden sm:inline text-zinc-500 font-bold">•</span>
              <span className="hidden sm:inline font-bold text-zinc-700">PORTFOLIO OS</span>
              <span className="hidden md:inline text-zinc-400 font-normal">
                [X: {coords.x} Y: {coords.y}]
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="#dino-runner"
                data-cursor="DINO"
                className="bg-[#FACC15] hover:bg-yellow-300 text-zinc-950 border border-zinc-950 px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1 transition-transform hover:-translate-y-0.5"
              >
                <span>🦖 DINO RUNNER</span>
              </Link>
              <span className="bg-[#A7F3D0] text-zinc-950 border border-zinc-950 px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 border border-zinc-950 animate-pulse" />
                <span>ONLINE &amp; BUILDING</span>
              </span>
            </div>
          </div>

          {/* Center Main Content Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full my-6 sm:my-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10"
          >
            {/* Left Column: Developer System Card & Action Buttons */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col space-y-4">
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative w-full bg-zinc-950 rounded-2xl p-4 border-2 border-zinc-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-white font-mono"
              >
                {/* Floating Top Tag with View Switcher */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D8D] animate-pulse" />
                    <span className="text-[11px] font-bold text-zinc-300 uppercase">SYSTEM IDENTITY</span>
                  </div>
                  <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded border border-zinc-700 font-mono text-[10px]">
                    <button
                      type="button"
                      onClick={() => setCardMode('3d-lanyard')}
                      data-cursor="3D"
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                        cardMode === '3d-lanyard'
                          ? 'bg-[#FACC15] text-black font-black'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      3D BADGE
                    </button>
                    <button
                      type="button"
                      onClick={() => setCardMode('specs')}
                      data-cursor="SPECS"
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                        cardMode === 'specs'
                          ? 'bg-[#FACC15] text-black font-black'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      SPECS
                    </button>
                  </div>
                </div>

                {cardMode === '3d-lanyard' ? (
                  /* 3D Physics Lanyard Card Mode */
                  <div className="relative w-full h-[420px] sm:h-[460px] overflow-hidden rounded-xl bg-zinc-900/80 border border-zinc-800">
                    <LanyardBadge />
                  </div>
                ) : (
                  /* Developer Spec Sheet Mode */
                  <>
                    {/* Operator Photo in Specs Mode */}
                    <div className="flex items-center gap-3 pb-3 mb-3 border-b border-zinc-800">
                      <div className="relative w-14 h-14 rounded-xl border-2 border-zinc-700 overflow-hidden shadow-[2px_2px_0px_0px_rgba(250,204,21,1)] shrink-0 bg-zinc-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src="/images/profile.jpg"
                          alt="ronngranz"
                          width={56}
                          height={56}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono text-[#FACC15] font-black uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>OPERATOR SPEC // 001</span>
                        </div>
                        <div className="text-white font-bold text-xs truncate mt-0.5">
                          {personalInfo.name}
                        </div>
                        <div className="text-[10px] text-zinc-400 font-mono">
                          Web Development • Frontend
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                        <span className="text-zinc-400">OPERATOR</span>
                        <span className="text-white font-bold">{personalInfo.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                        <span className="text-zinc-400">DISCIPLINE</span>
                        <span className="text-[#FACC15] font-bold">Web Application Engineering</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                        <span className="text-zinc-400">ROLE</span>
                        <span className="text-white font-bold">Frontend &amp; Web Developer</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-800/80 pb-1.5">
                        <span className="text-zinc-400">FLAGSHIP</span>
                        <span className="text-emerald-400 font-bold">Kelana Platform</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-zinc-400">STATUS</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active Building
                        </span>
                      </div>
                    </div>

                    {/* Micro Terminal Quote */}
                    <div className="mt-4 p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 leading-snug">
                      <span className="text-[#FF4D8D] font-bold">&gt; </span>
                      <span>&quot;Show what I build, how I build it, and what problem it solves.&quot;</span>
                    </div>
                  </>
                )}
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link
                  href="#projects"
                  data-cursor="PROJECTS"
                  className="bg-zinc-950 text-white border-2 border-zinc-950 px-4 py-2 rounded-xl font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#0038FF] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="GITHUB"
                  className="bg-white text-zinc-950 border-2 border-zinc-950 px-4 py-2 rounded-xl font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FACC15] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Staggered Large Typography & Interactive Code Window */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                {/* Micro Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-[#FF4D8D] text-white font-mono text-[10px] font-black uppercase px-2.5 py-0.5 border border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                    WEB DEVELOPER // INDONESIA
                  </span>
                  <span className="bg-[#F4F2EB] text-zinc-950 font-mono text-[10px] font-bold px-2 py-0.5 border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    MODERN WEB PLATFORMS
                  </span>
                </div>

                {/* Main Staggered Headline */}
                <h1 className="space-y-1 sm:space-y-2">
                  <span className="sr-only">
                    ronngranz — Web Developer &amp; Frontend Engineer
                  </span>
                  <motion.span
                    aria-hidden="true"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="block font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-zinc-950 leading-[0.95] glitch-hover select-none cursor-default"
                  >
                    <TextScramble text="KUZE3EZ" scrambleOnHover triggerOnView />
                  </motion.span>

                  <div aria-hidden="true" className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                    <motion.span
                      whileHover={{ scale: 1.05, rotate: -2 }}
                      className="bg-[#FACC15] text-zinc-950 font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase px-3 py-0.5 sm:px-4 sm:py-1 border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-1 inline-block select-none cursor-default"
                    >
                      <TextScramble text="FRONTEND" scrambleOnHover triggerOnView />
                    </motion.span>
                    <span className="font-extrabold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-zinc-950 select-none cursor-default">
                      <TextScramble text="DEVELOPER" scrambleOnHover triggerOnView />
                    </span>
                  </div>
                </h1>

                <p className="mt-4 text-sm sm:text-base font-mono text-zinc-700 leading-relaxed max-w-xl">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Terminal Code Window Preview */}
              <motion.div
                variants={itemVariants}
                className="w-full space-y-3"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <SystemWindow
                  title="kuze3ez@portfolio:~$ ./build-future"
                  status="EXEC"
                  variant="dark"
                  bodyClassName="font-mono text-xs p-3.5 space-y-1.5"
                >
                  <p className="text-zinc-400 text-[11px]">
                    <span className="text-[#FF4D8D] font-bold">const</span> developer = &#123;
                  </p>
                  <p className="text-emerald-400 pl-4 text-[11px]">
                    name: <span className="text-[#FACC15]">&quot;{personalInfo.name}&quot;</span>,
                  </p>
                  <p className="text-emerald-400 pl-4 text-[11px]">
                    role: <span className="text-[#FACC15]">&quot;Web Developer &amp; Frontend Engineer&quot;</span>,
                  </p>
                  <p className="text-emerald-400 pl-4 text-[11px]">
                    focus: <span className="text-[#FACC15]">&quot;Web Development &amp; AI Tools&quot;</span>,
                  </p>
                  <p className="text-emerald-400 pl-4 text-[11px]">
                    flagship: <span className="text-[#FACC15]">&quot;Kelana (Language Platform)&quot;</span>
                  </p>
                  <p className="text-zinc-400 text-[11px]">&#125;;</p>
                  <p className="text-zinc-500 pt-1 text-[10px] border-t border-zinc-800">
                    &gt; Process exited with code 0. System ready for exploration.
                  </p>
                </SystemWindow>

                {/* Live Animated Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono">
                  <div className="bg-[#F4F2EB] border-2 border-zinc-950 p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
                    <div className="text-xl sm:text-2xl font-black text-zinc-950">
                      <CountUp end={4} padZero={2} />
                    </div>
                    <div className="text-[9px] font-bold text-zinc-600 uppercase">SHIPPED BUILDS</div>
                  </div>
                  <div className="bg-[#F4F2EB] border-2 border-zinc-950 p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
                    <div className="text-xl sm:text-2xl font-black text-[#0038FF]">
                      <CountUp end={100} suffix="%" />
                    </div>
                    <div className="text-[9px] font-bold text-zinc-600 uppercase">TYPE SAFETY</div>
                  </div>
                  <div className="bg-[#F4F2EB] border-2 border-zinc-950 p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
                    <div className="text-xl sm:text-2xl font-black text-[#22C55E]">
                      <CountUp end={60} suffix="FPS" />
                    </div>
                    <div className="text-[9px] font-bold text-zinc-600 uppercase">MOTION ENGINE</div>
                  </div>
                  <div className="bg-[#F4F2EB] border-2 border-zinc-950 p-2.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
                    <div className="text-xl sm:text-2xl font-black text-[#FF4D8D]">
                      <CountUp end={1} suffix=" YR+" />
                    </div>
                    <div className="text-[9px] font-bold text-zinc-600 uppercase">ACTIVE DEV</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Frame Bar */}
          <div className="w-full pt-4 border-t-2 border-zinc-950 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-[10px] sm:text-xs font-black uppercase text-zinc-950 relative z-10">
            <span className="bg-zinc-950 text-white px-2.5 py-0.5 border border-zinc-950">
              001 // SYSTEM ENTRY
            </span>
            <span className="text-zinc-600">INDONESIA • BUILD 2026</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
