'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { principles } from '@/data/principles';
import { Compass } from 'lucide-react';

export const Principles: React.FC = () => {
  return (
    <section id="principles" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-zinc-50 relative">
      <Container>
        <SectionHeader
          number="CORE"
          category="SYSTEM // PRINCIPLES"
          title="ENGINEERING MINDSET & PHILOSOPHY"
          subtitle="Guiding mental models for software maintainability, deterministic state, and user respect."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="border-2 border-zinc-950 bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b-2 border-zinc-950 font-mono">
                  <span className="text-xs font-black bg-yellow-300 text-zinc-950 px-2.5 py-0.5 border-2 border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    RULE_{principle.number}
                  </span>
                  <Compass className="h-4 w-4 text-zinc-950" />
                </div>

                <h3 className="text-base font-black text-zinc-950 mb-1 font-mono leading-snug">
                  {principle.title}
                </h3>
                <p className="text-xs font-bold text-zinc-500 font-mono mb-3">
                  //{principle.summary}
                </p>

                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

