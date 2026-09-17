'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { developmentJourney } from '@/data/journey';
import { experiments } from '@/data/experiments';
import {
  Sparkles,
  ArrowRight,
  Terminal,
  ExternalLink,
  FlaskConical,
  CheckCircle2,
  Clock,
  Keyboard,
  BookOpen,
} from 'lucide-react';
import { Github } from '@/components/ui/SocialIcons';

export const DevActivityHub: React.FC = () => {
  const [subView, setSubView] = useState<'timeline' | 'lab'>('timeline');
  const [labFilter, setLabFilter] = useState<string>('All');

  const activeSprints = [
    {
      name: 'Kelana: Hangul IME & Spaced-Repetition System',
      category: 'FLAGSHIP // CORE ENGINE',
      progress: 92,
      tag: 'IN_SPRINT',
      color: 'bg-[#FACC15]',
    },
    {
      name: 'DANATRAIL: Sistem Booking & Validasi Jadwal Jalur',
      category: 'FULLSTACK // BACKEND',
      progress: 85,
      tag: 'TESTING',
      color: 'bg-[#A7F3D0]',
    },
    {
      name: 'ClassHub: Manajemen Tugas & Hak Akses Siswa-Guru',
      category: 'PRODUCTIVITY // FRONTEND',
      progress: 60,
      tag: 'ACTIVE_DEV',
      color: 'bg-[#FF4D8D]',
    },
  ];

  const filteredExperiments =
    labFilter === 'All' ? experiments : experiments.filter((e) => e.category === labFilter);

  return (
    <section id="dev-radar" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-zinc-50 relative overflow-hidden">
      <Container>
        <SectionHeader
          number="005"
          systemTag="DEV LOGS & INNOVATION"
          title="ACTIVITY RADAR & EXPERIMENTAL LAB."
          subtitle="Progres pengembangan proyek aktif, catatan pembelajaran terstruktur, dan eksplorasi fitur baru."
          badgeText="LIVE STREAM"
          badgeColor="emerald"
        />

        {/* 1. Active Sprints Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-2 border-zinc-950 bg-white p-5 sm:p-7 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-10 font-mono"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-zinc-950 pb-4 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-emerald-500 border border-zinc-950 animate-ping" />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-950">
                ACTIVE SPRINT LOG // LIVE PROGRESS METERS
              </span>
            </div>
            <span className="text-[11px] font-bold bg-zinc-100 px-2 py-0.5 border border-zinc-300 text-zinc-700">
              CURRENT SPRINT // 2026 ROADMAP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeSprints.map((sprint) => (
              <div
                key={sprint.name}
                className="p-4 rounded-xl border-2 border-zinc-950 bg-[#F4F2EB] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-zinc-500 mb-1">
                    <span>{sprint.category}</span>
                    <span className="bg-white border border-zinc-950 px-1.5 py-0.5 text-zinc-950">
                      {sprint.tag}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-zinc-950 leading-snug mb-3">
                    {sprint.name}
                  </h4>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] font-black text-zinc-800 mb-1">
                    <span>PROGRESS</span>
                    <span>{sprint.progress}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-white border border-zinc-950 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${sprint.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full ${sprint.color}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Sub-View Switcher: Timeline vs Lab Experiments */}
        <div className="border-2 border-zinc-950 rounded-2xl bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="bg-zinc-950 p-2.5 sm:p-3 border-b-2 border-zinc-950 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSubView('timeline')}
                data-cursor="TIMELINE"
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                  subView === 'timeline'
                    ? 'bg-[#FACC15] text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                01 // EVOLUTION TIMELINE
              </button>

              <button
                type="button"
                onClick={() => setSubView('lab')}
                data-cursor="LAB"
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                  subView === 'lab'
                    ? 'bg-[#A7F3D0] text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                02 // EXPERIMENTAL LAB ({experiments.length})
              </button>
            </div>

            <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
              BRANCH: main/dev_journey
            </span>
          </div>

          <div className="p-5 sm:p-7">
            <AnimatePresence mode="wait">
              {/* SUBVIEW 1: TIMELINE */}
              {subView === 'timeline' && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="relative border-l-4 border-zinc-950 ml-3 sm:ml-6 space-y-6 pl-5 sm:pl-8 font-mono">
                    {developmentJourney.map((milestone, idx) => (
                      <div key={milestone.step} className="group relative">
                        {/* Dot */}
                        <div className="absolute -left-[29px] sm:-left-[41px] top-1.5 w-5 h-5 border-2 border-zinc-950 bg-[#FACC15] flex items-center justify-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                          <span className="w-1.5 h-1.5 bg-zinc-950 rounded-full" />
                        </div>

                        <div className="border-2 border-zinc-950 bg-[#F4F2EB] p-4 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-300 pb-2 mb-2">
                            <span className="text-xs font-black text-zinc-950 bg-white px-2 py-0.5 border border-zinc-950">
                              {milestone.step}
                            </span>
                            <span className="text-[10px] font-bold text-zinc-600 bg-white px-2 py-0.5 border border-zinc-300">
                              {milestone.badge}
                            </span>
                          </div>
                          <h4 className="text-sm font-black text-zinc-950 mb-1">{milestone.title}</h4>
                          <p className="text-xs text-zinc-700 leading-relaxed font-sans mb-3">
                            {milestone.description}
                          </p>

                          <div className="pt-2 border-t border-zinc-300/80 flex items-center gap-1.5 text-xs text-zinc-700">
                            <span className="font-black text-[10px] text-zinc-500 uppercase">FOCUS:</span>
                            <span className="font-bold text-[11px] text-zinc-900">{milestone.focus}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* SUBVIEW 2: LAB EXPERIMENTS */}
              {subView === 'lab' && (
                <motion.div
                  key="lab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5 font-mono"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredExperiments.slice(0, 6).map((exp, idx) => (
                      <div
                        key={exp.id}
                        className="border-2 border-zinc-950 bg-[#F4F2EB] p-4 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-0.5 transition-transform"
                      >
                        <div>
                          <div className="flex items-center justify-between border-b border-zinc-300 pb-2 mb-2">
                            <span className="text-[10px] font-black bg-zinc-950 text-white px-2 py-0.5">
                              EXP_{String(idx + 1).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] font-bold text-zinc-600 bg-white px-1.5 py-0.5 border border-zinc-300">
                              {exp.status}
                            </span>
                          </div>
                          <div className="text-[10px] text-zinc-500 font-bold mb-1">
                            //{exp.category}
                          </div>
                          <h4 className="text-xs font-black text-zinc-950 mb-1.5">{exp.title}</h4>
                          <p className="text-xs text-zinc-700 font-sans leading-relaxed mb-3">
                            {exp.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-zinc-300 flex items-center justify-between text-xs">
                          <span className="text-[10px] text-zinc-500">{exp.tech[0]}</span>
                          {exp.githubUrl && (
                            <a
                              href={exp.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-950 hover:text-[#0038FF] font-bold flex items-center gap-1"
                            >
                              <span>CODE</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
