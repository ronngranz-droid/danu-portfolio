'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Badge } from '@/components/ui/Badge';
import { MockupFrame } from '@/components/ui/MockupFrame';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Target,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { Github } from '@/components/ui/SocialIcons';

interface ProjectCaseStudyProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
}

export const ProjectCaseStudy: React.FC<ProjectCaseStudyProps> = ({
  project,
  prevProject,
  nextProject,
}) => {
  return (
    <div className="py-12 md:py-16">
      <Container>
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Case Study Header / Hero */}
        <div className="border-b border-zinc-200 pb-10 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              {project.category}
            </span>
            <span className="text-zinc-300">•</span>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
            {project.title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-zinc-700 font-medium max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Quick Meta Strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-100 text-xs">
            <div>
              <span className="text-zinc-400 font-medium block">My Responsibilities</span>
              <span className="font-semibold text-zinc-900 mt-0.5 block">
                {project.role.join(', ')}
              </span>
            </div>
            <div>
              <span className="text-zinc-400 font-medium block">Core Stack</span>
              <span className="font-semibold text-zinc-900 mt-0.5 block">
                {project.technologies.slice(0, 3).join(', ')}
              </span>
            </div>
            <div className="flex items-center gap-2 sm:justify-end">
              {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  variant="primary"
                  size="sm"
                  isExternal
                  rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
                >
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="outline"
                  size="sm"
                  isExternal
                  leftIcon={<Github className="h-3.5 w-3.5" />}
                >
                  Repository
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Visual Showcase (Mockup) */}
        <div className="mb-14">
          <MockupFrame
            type={project.mockupType}
            imageUrl={project.imageUrl}
            title={project.title}
            isFlagship={true}
          />
        </div>

        {/* Case Study Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-12 text-zinc-700 leading-relaxed">
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                <span>Project Overview</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-zinc-600">
                {project.overview}
              </p>
            </section>

            {/* The Problem & Engineering Idea */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <span>The Problem & Engineering Solution</span>
              </h2>

              <div className="rounded-xl border border-red-100 bg-red-50/40 p-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-900">
                  User & Technical Problem
                </span>
                <p className="text-sm text-zinc-800">
                  {project.problemSolved.problem}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-5 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Architectural Solution
                </span>
                <p className="text-sm text-zinc-800">
                  {project.problemSolved.solution}
                </p>
              </div>
            </section>

            {/* Goals */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Engineering Goals
              </h2>
              <ul className="space-y-2 text-sm text-zinc-600">
                {project.goals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Architecture Details */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Cpu className="h-5 w-5 text-blue-600" />
                <span>Technical Architecture</span>
              </h2>
              <p className="text-sm text-zinc-600">
                {project.architecture.description}
              </p>

              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 space-y-3 text-xs">
                <div className="flex items-start justify-between border-b border-zinc-200 pb-2">
                  <span className="font-semibold text-zinc-900">Frontend Tier:</span>
                  <span className="font-mono text-zinc-600 text-right">{project.architecture.frontend}</span>
                </div>
                {project.architecture.backend && (
                  <div className="flex items-start justify-between border-b border-zinc-200 pb-2">
                    <span className="font-semibold text-zinc-900">Backend Logic:</span>
                    <span className="font-mono text-zinc-600 text-right">{project.architecture.backend}</span>
                  </div>
                )}
                {project.architecture.database && (
                  <div className="flex items-start justify-between">
                    <span className="font-semibold text-zinc-900">Database Schema:</span>
                    <span className="font-mono text-zinc-600 text-right">{project.architecture.database}</span>
                  </div>
                )}
              </div>
            </section>

            {/* Real Challenges & Solutions */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                Key Challenges & Technical Solutions
              </h2>

              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-200 bg-white p-5 shadow-2xs space-y-2"
                  >
                    <h3 className="text-base font-bold text-zinc-900 flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-zinc-100 text-[11px] font-mono font-bold text-zinc-600">
                        {idx + 1}
                      </span>
                      {challenge.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      <strong className="text-zinc-800">Challenge:</strong> {challenge.description}
                    </p>
                    <p className="text-xs text-zinc-700 pt-2 border-t border-zinc-100 leading-relaxed">
                      <strong className="text-emerald-800">Resolution:</strong> {challenge.solution}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* What I Learned */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <span>What I Learned (RPL Takeaways)</span>
              </h2>
              <div className="space-y-2 text-sm text-zinc-600">
                {project.learningOutcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Next Improvements */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <span>Planned Improvements</span>
              </h2>
              <div className="space-y-2 text-sm text-zinc-600">
                {project.nextImprovements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar with Specs */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-6 space-y-5 sticky top-24">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  All Implemented Features
                </h3>
                <div className="space-y-1.5 text-xs text-zinc-700">
                  {project.keyFeatures.map((f, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Complete Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <Badge key={t} variant="secondary" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 space-y-2">
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    variant="primary"
                    size="sm"
                    className="w-full justify-center"
                    isExternal
                    rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
                  >
                    Open Live Deployment
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                    isExternal
                    leftIcon={<Github className="h-3.5 w-3.5" />}
                  >
                    View Source Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Case Study Navigation */}
        <div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous: {prevProject.title}</span>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <div />}
        </div>
      </Container>
    </div>
  );
};
