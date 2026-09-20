'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { developmentJourney } from '@/data/journey';
import { Terminal, CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          number="008"
          systemTag="VERSION TIMELINE"
          title="ENGINEERING JOURNEY & EVOLUTION."
          description="Changelog of technical progression as a Web Developer & Frontend Engineer — from fundamentals to modern web platforms."
          badgeText="DEV // JOURNEY"
          badgeColor="yellow"
        />

        {/* Git/Timeline Header Log */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 p-3 bg-zinc-950 text-white font-mono text-xs flex flex-wrap items-center justify-between gap-3 border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-yellow-400" />
            <span className="text-zinc-400">LOG_STREAM:</span>
            <span className="text-yellow-400 font-bold">COMMIT_HISTORY_TRACE</span>
          </div>
          <div className="text-zinc-400 text-[11px] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            BRANCH: <span className="text-emerald-400 font-bold">main/learning_path</span>
          </div>
        </motion.div>

        {/* Timeline Stream */}
        <div className="relative border-l-4 border-zinc-950 ml-4 sm:ml-6 md:ml-8 space-y-6 pl-6 sm:pl-8">
          {developmentJourney.map((milestone, idx) => (
            <motion.div
              key={milestone.step}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: 'easeOut' }}
              className="group relative"
            >
              {/* Timeline Indicator Dot */}
              <motion.div
                whileHover={{ scale: 1.25, rotate: 90 }}
                className="absolute -left-[32px] sm:-left-[40px] top-1.5 w-6 h-6 border-2 border-zinc-950 bg-yellow-300 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <span className="w-2 h-2 bg-zinc-950 rounded-full" />
              </motion.div>

              {/* Milestone Card */}
              <div className="border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-3 border-b-2 border-zinc-950">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black bg-zinc-950 text-white px-2 py-0.5">
                      LOG_{String(idx + 1).padStart(3, '0')}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-zinc-950 font-mono">
                      {milestone.title}
                    </h3>
                  </div>
                  {milestone.badge && (
                    <span className="font-mono text-[11px] font-bold text-zinc-950 bg-emerald-300 px-2.5 py-0.5 border-2 border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                      {milestone.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                  {milestone.description}
                </p>

                <div className="mt-4 pt-3 border-t-2 border-dashed border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="font-bold text-zinc-900">CORE FOCUS:</span>
                    <span className="bg-zinc-100 px-2 py-0.5 border border-zinc-300 text-zinc-800">{milestone.focus}</span>
                  </div>
                  <span className="text-zinc-400 text-[11px]">
                    STAGE {milestone.step} / {developmentJourney.length}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
