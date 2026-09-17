import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/data/projects';
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy';

import { ProjectJsonLd } from '@/components/seo/JsonLd';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const projectMetaOverrides: Record<string, { title: string; description: string }> = {
  kelana: {
    title: 'Kelana — Language Learning Platform',
    description:
      'Case study of Kelana, a language learning platform featuring structured learning paths, XP progression, placement tests, mistake review, and language learning tools.',
  },
  danatrail: {
    title: 'DANATRAIL — Outdoor Equipment & Trail Rental Platform',
    description:
      'Case study of DANATRAIL, an outdoor gear rental and trail booking marketplace built with Next.js, interactive booking workflows, and modern UI.',
  },
  classhub: {
    title: 'ClassHub — Student Productivity & Classroom Management Platform',
    description:
      'Case study of ClassHub, a school task management and class schedule application designed for student productivity and teacher collaboration.',
  },
  danewai: {
    title: 'DanewAI — AI Chat & Developer Productivity Tool',
    description:
      'Case study of DanewAI, an AI chat and multi-modal developer productivity experiment built with streaming responses and modern web APIs.',
  },
};

export const dynamicParams = false;

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
    notFound();
  }

  const override = projectMetaOverrides[slug];
  const title = override ? override.title : `${project.title} — Case Study`;
  const description = override ? override.description : project.description;
  const canonicalUrl = `https://kuze3ez.is-a.dev/projects/${slug}`;
  const imageUrl = `https://kuze3ez.is-a.dev${project.imageUrl}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Danu Sakti`,
      description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Interface Preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Danu Sakti`,
      description,
      creator: '@nuureacher',
      images: [imageUrl],
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
    <>
      <ProjectJsonLd project={project} />
      <ProjectCaseStudy
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </>
  );
}
