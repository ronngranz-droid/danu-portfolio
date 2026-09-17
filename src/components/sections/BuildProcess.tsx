'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  Compass,
  FileCheck,
  LayoutTemplate,
  Code2,
  Database,
  CheckCircle2,
  Rocket,
  RefreshCw,
  Terminal,
} from 'lucide-react';

export const BuildProcess: React.FC = () => {
  const steps = [
    {
      phase: '01',
      code: 'DISCOVER',
      title: 'Requirement & Friction Analysis',
      desc: 'Dissecting user constraints, problem space, and product scope before writing a single line of code.',
      icon: Compass,
      tag: 'SDLC: REQ_ANALYSIS',
      badgeBg: 'bg-yellow-300 text-zinc-950',
    },
    {
      phase: '02',
      code: 'PLAN',
      title: 'Architecture & User Flow',
      desc: 'Mapping state machines, database schemas (3NF), navigation paths, and modular component hierarchy.',
      icon: FileCheck,
      tag: 'SDLC: ARCHITECTURE',
      badgeBg: 'bg-emerald-300 text-zinc-950',
    },
    {
      phase: '03',
      code: 'DESIGN',
      title: 'UI Ergonomics & Design Tokens',
      desc: 'Engineering accessible typography, high-contrast layouts, interaction feedback, and responsive grids.',
      icon: LayoutTemplate,
      tag: 'SDLC: UI_UX_SPEC',
      badgeBg: 'bg-pink-300 text-zinc-950',
    },
    {
      phase: '04',
      code: 'DEVELOP',
      title: 'Frontend & Logic Implementation',
      desc: 'Building performant Next.js/React applications with strict TypeScript safety and clean state stores.',
      icon: Code2,
      tag: 'SDLC: DEV_TYPESCRIPT',
      badgeBg: 'bg-blue-300 text-zinc-950',
    },
    {
      phase: '05',
      code: 'DATABASE',
      title: 'Data Modeling & Persistence',
      desc: 'Integrating relational models (MySQL/PostgreSQL), RESTful/Server Actions, and local caching.',
      icon: Database,
      tag: 'SDLC: SCHEMA_MODEL',
      badgeBg: 'bg-violet-300 text-zinc-950',
    },
    {
      phase: '06',
      code: 'VERIFY',
      title: 'Edge Case & Responsiveness QA',
      desc: 'Auditing mobile touch targets, viewport scaling, keyboard navigation, and bundle payload footprint.',
      icon: CheckCircle2,
      tag: 'SDLC: AUDIT_QA',
      badgeBg: 'bg-amber-300 text-zinc-950',
    },
    {
      phase: '07',
      code: 'DEPLOY',
      title: 'Production CI/CD Release',
      desc: 'Configuring Edge deployment on Vercel, DNS management, environment isolation, and instant builds.',
      icon: Rocket,
      tag: 'SDLC: PRODUCTION_SHIP',
      badgeBg: 'bg-lime-300 text-zinc-950',
    },
    {
      phase: '08',
      code: 'ITERATE',
      title: 'Real-World Feedback Loop',
      desc: 'Analyzing user interactions, resolving friction points, and refactoring for long-term maintainability.',
      icon: RefreshCw,
      tag: 'SDLC: CONTINUOUS_IMP',
      badgeBg: 'bg-cyan-300 text-zinc-950',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <section id="process" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-zinc-50 relative overflow-hidden">
      <Container>
        <SectionHeader
          number="004"
          category="DEVELOPMENT PIPELINE"
          title="SYSTEMATIC SDLC METHODOLOGY"
          subtitle="A disciplined engineering workflow from problem space to production rollout."
        />

        {/* Pipeline Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 p-3 bg-zinc-950 text-white font-mono text-xs flex flex-wrap items-center justify-between gap-3 border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-400">PIPELINE:</span>
            <span className="text-emerald-400 font-bold">SDLC_EXECUTION_V2.0</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
            <span>STAGES: 8</span>
            <span>•</span>
            <span className="text-yellow-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              STATUS: ACTIVE_STANDARD
            </span>
          </div>
        </motion.div>

        {/* 8-Step Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.phase}
                variants={cardVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group relative flex flex-col justify-between border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b-2 border-zinc-950">
                    <span className={`font-mono text-xs font-black px-2 py-0.5 border-2 border-zinc-950 ${step.badgeBg}`}>
                      PHASE_{step.phase}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center border-2 border-zinc-950 bg-zinc-100 group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="font-mono text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-1">
                    //{step.code}
                  </div>
                  <h3 className="text-sm font-black text-zinc-950 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-dashed border-zinc-200 flex items-center justify-between text-[10px] font-mono font-bold text-zinc-500">
                  <span>{step.tag}</span>
                  <span className="text-zinc-950 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
