import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found — Danu Sakti Aditya Permana',
    };
  }

  return {
    title: `${project.title} — Case Study | Danu Sakti Aditya Permana`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Danu Sakti Aditya Permana`,
      description: project.tagline,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return (
    <ProjectCaseStudy
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
