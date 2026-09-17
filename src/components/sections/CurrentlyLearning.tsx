'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { currentlyLearningItems } from '@/data/skills';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-b-2 border-zinc-950 bg-zinc-50 relative">
      <Container>
        <SectionHeader
          number="RADAR"
          category="RADAR // ACTIVE EXPLORATION"
          title="HORIZONS & EXPERIMENTAL STUDY DESK"
          subtitle="Continuous curiosity in software engineering. Emerging topics, architectural models, and tools under active investigation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentlyLearningItems.map((item, idx) => (
            <div
              key={item.title}
              className="border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b-2 border-zinc-950 font-mono">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-yellow-300 text-zinc-950 px-2 py-0.5 border border-zinc-950">
                    {item.tag}
                  </span>
                  <span className="text-[11px] font-bold text-zinc-400">#{String(idx + 1).padStart(2, '0')}</span>
                </div>

                <h3 className="text-sm font-black text-zinc-950 mb-2 font-mono">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-dashed border-zinc-200 flex items-center gap-2 text-[11px] font-mono font-bold text-emerald-700">
                <span className="w-2 h-2 bg-emerald-500 animate-pulse border border-zinc-950" />
                <span>ACTIVE_PROTOTYPING</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

