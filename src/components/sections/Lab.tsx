'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { experiments } from '@/data/experiments';
import { FlaskConical, ExternalLink } from 'lucide-react';
import { Github } from '@/components/ui/SocialIcons';

export const Lab: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'JavaScript Experiments',
    'UI Experiments',
    'AI Experiments',
    'Database Experiments',
    'API Experiments',
  ];

  const filteredExperiments =
    selectedFilter === 'All'
      ? experiments
      : experiments.filter((exp) => exp.category === selectedFilter);

  return (
    <section id="lab" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-zinc-50 relative">
      <Container>
        <SectionHeader
          number="008"
          category="R&D SANDBOX"
          title="EXPERIMENTAL LAB & PROTOTYPES"
          subtitle="Micro-explorations in algorithmic parsers, UI state machines, and emerging Web APIs."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`font-mono text-xs px-3.5 py-1.5 border-2 border-zinc-950 transition-all font-bold ${
                selectedFilter === category
                  ? 'bg-yellow-300 text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              {category === 'All' ? '[ ALL_EXPERIMENTS ]' : category}
            </button>
          ))}
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredExperiments.map((exp, idx) => (
            <div
              key={exp.id}
              className="flex flex-col justify-between border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b-2 border-zinc-950 pb-2.5 mb-3 font-mono">
                  <span className="text-[11px] font-black text-zinc-950 bg-yellow-300 px-2 py-0.5 border border-zinc-950">
                    EXP_{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-600 bg-zinc-100 px-2 py-0.5 border border-zinc-300">
                    {exp.status}
                  </span>
                </div>

                <div className="font-mono text-[11px] text-zinc-500 font-bold mb-1">
                  //{exp.category}
                </div>
                <h3 className="text-sm font-black text-zinc-950 mb-2 font-mono">
                  {exp.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-sans">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] font-bold px-2 py-0.5 bg-zinc-100 text-zinc-800 border border-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t-2 border-dashed border-zinc-200 flex items-center justify-between font-mono text-xs">
                {exp.githubUrl ? (
                  <a
                    href={exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-zinc-950 hover:underline"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>SOURCE_CODE</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-zinc-400 text-[11px]">// INTERNAL_LAB</span>
                )}
                <FlaskConical className="h-4 w-4 text-zinc-400" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

