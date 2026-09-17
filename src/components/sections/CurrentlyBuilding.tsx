'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Keyboard,
  Clock,
  Terminal,
  ExternalLink,
} from 'lucide-react';

export const CurrentlyBuilding: React.FC = () => {
  const currentFocusAreas = [
    {
      title: 'Learning Experience & Ergonomics',
      desc: 'Refining micro-lesson progression curves, visual answer validation, and audio instant feedback.',
      icon: Sparkles,
      tag: 'UI_ERGONOMICS',
    },
    {
      title: 'Virtual Hangul & Script IME',
      desc: 'Optimizing touch targets for on-screen Jamo and syllabic keyboards across mobile viewport sizes.',
      icon: Keyboard,
      tag: 'INPUT_SYSTEM',
    },
    {
      title: 'Smart Spaced-Repetition Engine',
      desc: 'Calibrating retention intervals dynamically based on user Mistake Notebook blunder frequencies.',
      icon: Clock,
      tag: 'ALGO_SRS',
    },
    {
      title: 'Indonesian Regional Modules',
      desc: 'Structuring progressive syllabary and beginner conversational units for Bahasa Jawa and Sunda.',
      icon: BookOpen,
      tag: 'CONTENT_PIPELINE',
    },
  ];

  return (
    <section className="py-16 md:py-24 border-b-2 border-zinc-950 bg-zinc-50 relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-2 border-zinc-950 bg-white p-6 sm:p-8 lg:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-zinc-950 pb-5 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 bg-emerald-400 border border-zinc-950 animate-pulse" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-zinc-950">
                SYSTEM // CURRENT ACTIVE SPRINT
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-black bg-emerald-300 text-zinc-950 px-3 py-1 border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                ● ACTIVE_DEV
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left side: Project details */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-zinc-950 bg-yellow-300 px-3 py-1 border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <span>PROJECT_FLAGSHIP_01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 font-mono">
                KELANA — LANGUAGE PLATFORM
              </h3>

              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
                A web-based language learning platform designed to make daily practice structured, interactive, and culturally inclusive — featuring bite-sized interactive quizzes, virtual input composers, and regional language preservation.
              </p>

              {/* Focus List */}
              <div className="pt-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-zinc-950 uppercase tracking-wider mb-3">
                  <Terminal className="w-4 h-4 text-zinc-950" />
                  <span>ACTIVE_SPRINT_OBJECTIVES:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentFocusAreas.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="border-2 border-zinc-950 bg-zinc-50 p-3.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2 font-black text-xs text-zinc-950 font-mono">
                            <Icon className="w-3.5 h-3.5 text-blue-600" />
                            <span>{item.title}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-zinc-600 leading-snug font-sans">{item.desc}</p>
                        <div className="mt-2 text-[10px] font-mono font-bold text-zinc-400">
                          // {item.tag}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="https://belajarsamakelana.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="LAUNCH"
                  className="inline-flex items-center gap-2 font-mono font-black text-xs px-5 py-2.5 bg-yellow-300 text-zinc-950 border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>LAUNCH APP DEMO</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://github.com/ronngranz-droid/Kelana"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="REPO"
                  className="inline-flex items-center gap-2 font-mono font-black text-xs px-5 py-2.5 bg-white text-zinc-950 border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5"
                >
                  <span>GITHUB REPO</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right side: Sprint Status & Roadmap Terminal */}
            <div className="lg:col-span-5">
              <div className="border-2 border-zinc-950 bg-zinc-950 text-white p-5 space-y-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between text-xs border-b border-zinc-800 pb-3 font-mono">
                  <span className="font-black text-yellow-400">SPRINT_HEALTH // METRICS</span>
                  <span className="text-zinc-400">v0.9.4-BETA</span>
                </div>

                <div className="space-y-3.5 text-xs font-mono">
                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span className="text-zinc-300">Question Engine</span>
                      <span className="text-emerald-400">92% // READY</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-900 border border-zinc-700 p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '92%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full bg-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span className="text-zinc-300">Virtual Hangul Composer</span>
                      <span className="text-blue-400">85% // TESTING</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-900 border border-zinc-700 p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
                        className="h-full bg-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold mb-1.5">
                      <span className="text-zinc-300">Nusantara Languages</span>
                      <span className="text-amber-400">55% // IN_PROGRESS</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-900 border border-zinc-700 p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '55%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className="h-full bg-amber-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-400 flex flex-col gap-1 font-mono">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">STACK:</span>
                    <span className="text-white">Next.js 16, Tailwind, Web Audio</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COMMIT FREQUENCY:</span>
                    <span className="text-emerald-400">Daily Iterations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
