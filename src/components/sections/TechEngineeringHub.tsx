'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechMarquee } from '@/components/ui/TechMarquee';
import { skillCategories } from '@/data/skills';
import { SkillLevel } from '@/types/project';
import {
  Code,
  Server,
  Database,
  GitBranch,
  Cloud,
  Wrench,
  Bot,
  Users,
  Monitor,
  ShieldCheck,
  Layers,
  ArrowRight,
  Activity,
  Key,
  Link2,
  Terminal,
} from 'lucide-react';

export const TechEngineeringHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'architecture' | 'database'>('stack');
  const [activeTier, setActiveTier] = useState<string>('frontend');

  // Category Icon Map for Skills
  const categoryIcons: Record<string, any> = {
    'Frontend Development': Code,
    'Backend & Server Logic': Server,
    'Database & Data Modeling': Database,
    'Software Engineering & Practices': GitBranch,
    'Deployment & Environments': Cloud,
    'Development Tools & Workspace': Wrench,
    'AI-Assisted Development': Bot,
  };

  const getBadgeStyle = (level: SkillLevel) => {
    switch (level) {
      case 'Used in Projects':
        return 'bg-[#A7F3D0] text-zinc-950 font-bold border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]';
      case 'Comfortable With':
        return 'bg-blue-200 text-zinc-950 font-bold border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]';
      case 'Currently Learning':
        return 'bg-[#FACC15] text-zinc-950 font-bold border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]';
      case 'Exploring':
        return 'bg-purple-200 text-zinc-950 font-bold border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]';
      default:
        return 'bg-zinc-200 text-zinc-950 font-bold border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]';
    }
  };

  const getShortLevel = (level: SkillLevel) => {
    switch (level) {
      case 'Used in Projects':
        return 'IN_PROD';
      case 'Comfortable With':
        return 'READY';
      case 'Currently Learning':
        return 'LEARNING';
      case 'Exploring':
        return 'EXPLORING';
      default:
        return 'ACTIVE';
    }
  };

  // Architecture Tiers
  const tiers = [
    {
      id: 'client',
      tag: 'LAYER_01',
      label: 'Client / User Layer',
      icon: Users,
      tech: 'Browser DOM, Mobile PWA, Screen Readers',
      badgeColor: 'bg-[#FACC15]',
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
      badgeColor: 'bg-[#A7F3D0]',
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
      id: 'data',
      tag: 'LAYER_04',
      label: 'Relational Persistence Tier',
      icon: Database,
      tech: 'PostgreSQL / Supabase, Prisma ORM, SQL',
      badgeColor: 'bg-[#FF4D8D]',
      responsibilities: [
        '3NF normalized relations with foreign key constraints',
        'ACID transactions for critical booking & order flows',
        'Connection pooling via Supabase PgBouncer',
      ],
    },
  ];

  // Database Schema Data
  const tables = [
    {
      name: 'users',
      purpose: 'User credentials & role authorization',
      fields: [
        { name: 'id', type: 'INT (PK)', isKey: true, desc: 'Auto increment primary key' },
        { name: 'name', type: 'VARCHAR(100)', isKey: false, desc: 'Full customer / user name' },
        { name: 'email', type: 'VARCHAR(150) UNIQUE', isKey: false, desc: 'Unique account identifier' },
        { name: 'role', type: 'ENUM("admin","user")', isKey: false, desc: 'Authorization scope' },
        { name: 'created_at', type: 'TIMESTAMP', isKey: false, desc: 'Record creation timestamp' },
      ],
    },
    {
      name: 'products',
      purpose: 'Equipment catalog & inventory control',
      fields: [
        { name: 'id', type: 'INT (PK)', isKey: true, desc: 'Auto increment primary key' },
        { name: 'name', type: 'VARCHAR(150)', isKey: false, desc: 'Item model (e.g., Tenda 4P)' },
        { name: 'category', type: 'VARCHAR(50)', isKey: false, desc: 'Tents, Packs, Cooking' },
        { name: 'price_per_day', type: 'DECIMAL(10,2)', isKey: false, desc: 'Daily rental fee' },
        { name: 'stock_total', type: 'INT', isKey: false, desc: 'Physical inventory units' },
      ],
    },
    {
      name: 'rentals',
      purpose: 'Temporal reservation & booking transactions',
      fields: [
        { name: 'id', type: 'INT (PK)', isKey: true, desc: 'Auto increment primary key' },
        { name: 'user_id', type: 'INT (FK)', isKey: true, desc: 'References users(id)' },
        { name: 'product_id', type: 'INT (FK)', isKey: true, desc: 'References products(id)' },
        { name: 'start_date', type: 'DATE', isKey: false, desc: 'Booking start date' },
        { name: 'end_date', type: 'DATE', isKey: false, desc: 'Expected return date' },
        { name: 'status', type: 'ENUM("booked","active")', isKey: false, desc: 'Reservation lifecycle' },
      ],
    },
  ];

  const currentTierData = tiers.find((t) => t.id === activeTier) || tiers[1];

  return (
    <section id="tech-hub" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          number="004"
          systemTag="TECH STACK & TOOLS"
          title="TECH STACK & DEVELOPMENT TOOLS."
          subtitle="Teknologi yang saya pelajari dan gunakan untuk membangun web modern: mulai dari UI interaktif di frontend, logika backend & API, hingga database relasional MySQL."
          badgeText="BENTO // HUB"
          badgeColor="yellow"
        />

        {/* Neo-Brutalist Main Bento Container */}
        <div className="border-2 border-zinc-950 rounded-2xl bg-[#F4F2EB] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          {/* Top Interactive Tab Bar */}
          <div className="bg-zinc-950 p-2 sm:p-3 border-b-2 border-zinc-950 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('stack')}
                data-cursor="STACK"
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                  activeTab === 'stack'
                    ? 'bg-[#FACC15] text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                01 // CORE STACK
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                data-cursor="ARCH"
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-[#A7F3D0] text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                02 // ARCHITECTURE
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('database')}
                data-cursor="DATA"
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-black uppercase transition-all cursor-pointer ${
                  activeTab === 'database'
                    ? 'bg-[#FF4D8D] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white'
                }`}
              >
                03 // DATA ENGINE (3NF)
              </button>
            </div>

            <div className="hidden md:flex items-center gap-2 text-zinc-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM READY</span>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="p-4 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              {/* TAB 1: CORE STACK */}
              {activeTab === 'stack' && (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.slice(0, 6).map((cat) => {
                      const Icon = categoryIcons[cat.category] || Code;
                      return (
                        <div
                          key={cat.category}
                          className="border-2 border-zinc-950 bg-white p-4 sm:p-5 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-transform"
                        >
                          <div className="flex items-center gap-2.5 border-b-2 border-zinc-950 pb-2.5 mb-3.5">
                            <div className="p-1.5 bg-[#FACC15] border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                              <Icon className="w-4 h-4 text-zinc-950" />
                            </div>
                            <h3 className="font-mono text-xs font-black uppercase text-zinc-950">
                              {cat.category}
                            </h3>
                          </div>

                          <div className="space-y-2">
                            {cat.skills.map((skill) => (
                              <div
                                key={skill.name}
                                className="flex items-center justify-between text-xs font-mono py-1 border-b border-zinc-100 last:border-0"
                              >
                                <span className="font-bold text-zinc-900">{skill.name}</span>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded ${getBadgeStyle(skill.level)}`}>
                                  {getShortLevel(skill.level)}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-2">
                    <TechMarquee />
                  </div>
                </motion.div>
              )}

              {/* TAB 2: SYSTEM ARCHITECTURE */}
              {activeTab === 'architecture' && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Tier Selector Buttons */}
                    <div className="lg:col-span-5 space-y-3">
                      {tiers.map((tier) => {
                        const Icon = tier.icon;
                        const isSelected = activeTier === tier.id;
                        return (
                          <button
                            key={tier.id}
                            type="button"
                            onClick={() => setActiveTier(tier.id)}
                            className={`w-full text-left p-4 rounded-xl border-2 border-zinc-950 font-mono transition-all cursor-pointer ${
                              isSelected
                                ? `${tier.badgeColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-1`
                                : 'bg-white hover:bg-zinc-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[10px] font-black uppercase text-zinc-600 bg-white/80 px-1.5 py-0.5 border border-zinc-950">
                                {tier.tag}
                              </span>
                              <Icon className="w-4 h-4 text-zinc-950" />
                            </div>
                            <div className="font-black text-sm text-zinc-950">{tier.label}</div>
                            <div className="text-[11px] text-zinc-700 mt-1">{tier.tech}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Tier Inspector */}
                    <div className="lg:col-span-7 bg-white border-2 border-zinc-950 rounded-xl p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-mono space-y-4">
                      <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-3">
                        <div>
                          <span className="text-[10px] font-black uppercase text-zinc-500">INSPECTING TIER</span>
                          <h4 className="text-base sm:text-lg font-black text-zinc-950">{currentTierData.label}</h4>
                        </div>
                        <span className={`px-2.5 py-1 text-xs font-black border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ${currentTierData.badgeColor}`}>
                          {currentTierData.tag}
                        </span>
                      </div>

                      <div>
                        <div className="text-xs font-black uppercase text-zinc-500 mb-2">ENGINEERING RESPONSIBILITIES:</div>
                        <ul className="space-y-2">
                          {currentTierData.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-zinc-800 leading-relaxed bg-zinc-50 p-2.5 border border-zinc-200 rounded">
                              <ArrowRight className="w-3.5 h-3.5 text-[#0038FF] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-500">
                        <span>DATA FLOW: SYNCHRONIZED</span>
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          60 FPS REACTIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: DATA ENGINE (3NF) */}
              {activeTab === 'database' && (
                <motion.div
                  key="database"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 font-mono">
                    {tables.map((table) => (
                      <div
                        key={table.name}
                        className="bg-white border-2 border-zinc-950 rounded-xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-2.5 mb-2">
                            <span className="font-black text-sm text-zinc-950 bg-[#FACC15] px-2 py-0.5 border border-zinc-950">
                              tbl_{table.name}
                            </span>
                            <Database className="w-4 h-4 text-zinc-700" />
                          </div>
                          <p className="text-[11px] text-zinc-600 mb-3 leading-snug">{table.purpose}</p>

                          <div className="space-y-1.5 text-[11px]">
                            {table.fields.map((f) => (
                              <div key={f.name} className="flex items-center justify-between py-0.5 border-b border-zinc-100 last:border-0">
                                <span className="font-bold flex items-center gap-1 text-zinc-900">
                                  {f.isKey && <Key className="w-2.5 h-2.5 text-[#FF5500]" />}
                                  {f.name}
                                </span>
                                <span className="text-zinc-500 text-[10px]">{f.type}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-2 border-t border-zinc-200 text-[10px] text-zinc-500 flex items-center justify-between">
                          <span>3NF NORMALIZED</span>
                          <span className="text-emerald-700 font-bold">STABLE</span>
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
