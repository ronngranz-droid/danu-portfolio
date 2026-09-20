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
  title: 'Projects',
  description:
    'Explore web applications and digital products built by ronngranz, including Kelana, DANATRAIL, and DanewAI.',
  alternates: {
    canonical: 'https://kuze3ez.is-a.dev/projects',
  },
  openGraph: {
    title: 'Projects | ronngranz',
    description:
      'Explore web applications and digital products built by ronngranz, including Kelana, DANATRAIL, and DanewAI.',
    url: 'https://kuze3ez.is-a.dev/projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | ronngranz',
    description:
      'Explore web applications and digital products built by ronngranz, including Kelana, DANATRAIL, and DanewAI.',
  },
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
          as="h1"
          eyebrow="Complete Catalogue"
          title="All Projects & Products"
          description="A comprehensive index of all software projects, web platforms, and experimental tools developed by ronngranz."
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
