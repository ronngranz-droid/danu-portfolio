'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  Users,
  Monitor,
  Server,
  Database,
  Cloud,
  Terminal,
  ShieldCheck,
  Layers,
  ArrowRight,
  Activity,
} from 'lucide-react';

export const Architecture: React.FC = () => {
  const [activeTier, setActiveTier] = useState<string>('frontend');

  const tiers = [
    {
      id: 'client',
      tag: 'LAYER_01',
      label: 'Client / User Layer',
      icon: Users,
      tech: 'Browser DOM, Mobile PWA, Screen Readers',
      badgeColor: 'bg-yellow-300',
      responsibilities: [
        'Accessible DOM rendering & keyboard navigation',
        'Optimistic state updates & client cache validation',
        'Virtual Hangul input composition engine (in Kelana)',
      ],
    },
    {
      id: 'frontend',
      tag: 'LAYER_02',
      label: 'Next.js Presentation Tier',
      icon: Monitor,
      tech: 'React 19, Next.js App Router, Tailwind CSS',
      badgeColor: 'bg-emerald-300',
      responsibilities: [
        'Server-Side Rendering (SSR) & Static Site Generation (SSG)',
        'Edge middleware for route guarding & session verification',
        'Component isolation into declarative UI blocks',
      ],
    },
    {
      id: 'api',
      tag: 'LAYER_03',
      label: 'API & Business Logic Layer',
      icon: Server,
      tech: 'Node.js, Next.js Route Handlers, REST Endpoints',
      badgeColor: 'bg-blue-300',
      responsibilities: [
        'Input payload validation (Zod schema checking)',
        'JWT token verification & Role-Based Access Control (RBAC)',
        'Date-range collision math for rental booking logic',
      ],
    },
    {
      id: 'database',
      tag: 'LAYER_04',
      label: 'Relational Persistence Layer',
      icon: Database,
      tech: 'MySQL 8, Normalized 3NF Relational Schemas',
      badgeColor: 'bg-pink-300',
      responsibilities: [
        'ACID transactions for stock reservation',
        'Foreign key constraints & cascading referential integrity',
        'Indexed queries for sub-5ms catalog filtering',
      ],
    },
    {
      id: 'services',
      tag: 'LAYER_05',
      label: 'External Cloud Services',
      icon: Cloud,
      tech: 'Vercel Edge, LLM APIs (OpenAI / Gemini), Web APIs',
      badgeColor: 'bg-violet-300',
      responsibilities: [
        'Server-Sent Events streaming for AI responses',
        'Web Speech API for native audio pronunciation',
        'Production CI/CD pipelines and isolated environments',
      ],
    },
  ];

  const current = tiers.find((t) => t.id === activeTier) || tiers[1];
  const Icon = current.icon;

  return (
    <section id="architecture" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-zinc-50 relative overflow-hidden">
      <Container>
        <SectionHeader
          number="006"
          category="SYSTEM TOPOLOGY"
          title="END-TO-END ARCHITECTURE & DATA FLOW"
          subtitle="Beyond the interface: deterministic state flow, separation of concerns, and clean abstraction boundaries."
        />

        {/* System Topology Blueprint Window */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-2 border-zinc-950 bg-white p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        >
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-zinc-950 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-zinc-950" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-zinc-950">
                SYSTEM_TOPOLOGY_INSPECTOR // ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-zinc-500">
              <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>DATA FLOW: SYNCHRONIZED</span>
            </div>
          </div>

          {/* Topology Node Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative mb-6">
            {tiers.map((tier) => {
              const TierIcon = tier.icon;
              const isActive = activeTier === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier.id)}
                  data-cursor="INSPECT"
                  className={`text-left p-4 border-2 border-zinc-950 transition-all flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-zinc-950 text-white shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] -translate-x-0.5 -translate-y-0.5'
                      : 'bg-zinc-50 text-zinc-950 hover:bg-zinc-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-8 h-8 flex items-center justify-center border-2 border-zinc-950 font-bold ${
                          isActive ? 'bg-yellow-300 text-zinc-950' : 'bg-white text-zinc-950'
                        }`}
                      >
                        <TierIcon className="w-4 h-4" />
                      </div>
                      <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-yellow-400' : 'text-zinc-500'}`}>
                        {tier.tag}
                      </span>
                    </div>

                    <div className="text-xs font-black font-mono leading-tight mb-1">
                      {tier.label}
                    </div>
                    <div className={`text-[11px] font-mono truncate ${isActive ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {tier.tech}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-dashed border-zinc-700/50 flex items-center justify-between text-[10px] font-mono font-bold">
                    <span className={isActive ? 'text-yellow-400' : 'text-zinc-500'}>
                      {isActive ? '[ACTIVE]' : 'INSPECT'}
                    </span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Panel with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="border-2 border-zinc-950 bg-zinc-900 text-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800 pb-3 mb-4 font-mono">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 flex items-center justify-center border-2 border-zinc-950 ${current.badgeColor} text-zinc-950`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white">{current.label}</h4>
                    <p className="text-xs text-zinc-400">STACK: {current.tech}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-yellow-400 bg-zinc-800 px-3 py-1 border border-zinc-700">
                  // SELECTED_LAYER_SPEC
                </span>
              </div>

              <div className="space-y-3 font-mono">
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-bold">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ARCHITECTURAL_RESPONSIBILITIES:</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {current.responsibilities.map((resp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="border border-zinc-800 bg-zinc-950/80 p-3 text-xs text-zinc-300 flex flex-col justify-between"
                    >
                      <div className="flex items-center gap-2 text-yellow-400 text-[11px] font-bold mb-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>SPEC_0{i + 1}</span>
                      </div>
                      <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                        {resp}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};
