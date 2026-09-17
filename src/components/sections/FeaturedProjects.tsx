'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FlagshipCard } from '@/components/projects/FlagshipCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';
import { ArrowRight, Layers } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const allProjects = getFeaturedProjects();
  const flagship = allProjects.find((p) => p.isFlagship) || allProjects[0];
  const otherProjects = allProjects.filter((p) => p.slug !== flagship.slug);

  return (
    <section id="projects" className="py-16 md:py-24 bg-zinc-50/50 border-b-2 border-zinc-950 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <SectionHeader
            number="003"
            category="PRODUCTION REPOSITORIES"
            title="SELECTED WORK &amp; EXPERIMENTS"
            subtitle="A curated suite of real-world web applications, productivity utilities, and intelligent agents."
            className="mb-0"
          />
          <Link
            href="/projects"
            data-cursor="ALL"
            className="self-start md:self-end shrink-0 mb-6 font-mono text-xs font-black uppercase bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5"
          >
            <span>ALL WORK ({allProjects.length})</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Flagship Showcase (Kelana) */}
        <div className="mb-10">
          <FlagshipCard project={flagship} />
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};
