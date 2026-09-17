import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FlagshipCard } from '@/components/projects/FlagshipCard';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Projects — Danu Sakti Aditya Permana',
  description:
    'Explore the complete catalogue of web applications, platforms, and software engineering projects built by Danu Sakti Aditya Permana.',
};

export default function ProjectsPage() {
  const projects = getFeaturedProjects();
  const flagship = projects.find((p) => p.isFlagship) || projects[0];
  const otherProjects = projects.filter((p) => p.slug !== flagship.slug);

  return (
    <div className="py-12 md:py-20">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow="Complete Catalogue"
          title="All Projects & Products"
          description="A comprehensive index of all software projects, web platforms, and experimental tools developed by Danu Sakti Aditya Permana."
        />

        {/* Flagship */}
        <div className="mb-10">
          <FlagshipCard project={flagship} />
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
