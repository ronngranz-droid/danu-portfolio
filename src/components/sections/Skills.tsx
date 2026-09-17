'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  Terminal,
} from 'lucide-react';

export const Skills: React.FC = () => {
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
        return 'bg-emerald-300 text-zinc-950 font-bold border-2 border-zinc-950';
      case 'Comfortable With':
        return 'bg-blue-300 text-zinc-950 font-bold border-2 border-zinc-950';
      case 'Currently Learning':
        return 'bg-amber-300 text-zinc-950 font-bold border-2 border-zinc-950';
      case 'Exploring':
        return 'bg-purple-300 text-zinc-950 font-bold border-2 border-zinc-950';
      default:
        return 'bg-zinc-200 text-zinc-950 font-bold border-2 border-zinc-950';
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

  return (
    <section id="skills" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          number="005"
          category="TECH ARSENAL"
          title="CAPABILITIES &amp; TOOLKIT MATRIX"
          subtitle="Grouped by practical domain. Evaluated by real project applications, architectural clarity, and clean code standards."
        />

        {/* Legend / Status bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 p-4 bg-zinc-100 border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs"
        >
          <div className="flex items-center gap-2 font-bold text-zinc-950">
            <Terminal className="w-4 h-4 text-zinc-950" />
            <span>ARSENAL_STATUS_KEY:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="px-2 py-0.5 border-2 border-zinc-950 bg-emerald-300 text-zinc-950 font-black">
              [IN_PROD] Used in Projects
            </span>
            <span className="px-2 py-0.5 border-2 border-zinc-950 bg-blue-300 text-zinc-950 font-black">
              [READY] Comfortable With
            </span>
            <span className="px-2 py-0.5 border-2 border-zinc-950 bg-amber-300 text-zinc-950 font-black">
              [LEARNING] Active Study
            </span>
            <span className="px-2 py-0.5 border-2 border-zinc-950 bg-purple-300 text-zinc-950 font-black">
              [EXPLORING] Experimental
            </span>
          </div>
        </motion.div>

        {/* Skill Category Cards Grid with Framer Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Code;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="flex flex-col justify-between border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-zinc-950">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 flex items-center justify-center border-2 border-zinc-950 bg-yellow-300 text-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-black text-sm text-zinc-950 font-mono tracking-tight">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-zinc-400">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 mb-4 leading-relaxed font-sans">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between gap-2 p-2 bg-zinc-50 border-2 border-zinc-950 text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 transition-colors"
                      >
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-zinc-950 font-mono truncate">{skill.name}</span>
                          {skill.note && (
                            <span className="text-[10px] text-zinc-500 font-sans truncate">
                              {skill.note}
                            </span>
                          )}
                        </div>
                        <span
                          className={`shrink-0 text-[10px] font-mono px-1.5 py-0.5 ${getBadgeStyle(
                            skill.level
                          )}`}
                        >
                          {getShortLevel(skill.level)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Marquee ticker */}
      <div className="mt-14">
        <TechMarquee />
      </div>
    </section>
  );
};
