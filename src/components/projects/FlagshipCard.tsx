'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/types/project';
import { MockupFrame } from '@/components/ui/MockupFrame';
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Sparkles,
  Layers,
  Terminal,
} from 'lucide-react';
import { Github } from '@/components/ui/SocialIcons';
import { TextScramble } from '@/components/ui/TextScramble';

interface FlagshipCardProps {
  project: Project;
}

export const FlagshipCard: React.FC<FlagshipCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      data-cursor="FLAGSHIP"
      className="w-full bg-white border-2 border-zinc-950 rounded-2xl p-5 sm:p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300"
    >
      {/* Top Metadata Strip */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-zinc-950 pb-4 mb-6 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="bg-[#FF4D8D] text-white px-2.5 py-1 font-black uppercase tracking-wider border border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1">
            01 // FLAGSHIP PROJECT
          </span>
          <span className="hidden sm:inline font-bold text-zinc-900">• {project.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#A7F3D0] text-zinc-950 px-2.5 py-1 font-black uppercase tracking-wider border border-zinc-950 flex items-center gap-1.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>ACTIVE DEVELOPMENT</span>
          </span>
        </div>
      </div>

      {/* Main Grid: Details + Interactive UI Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 hover:text-[#0038FF] transition-colors cursor-default">
              <Link href={`/projects/${project.slug}`}>
                <TextScramble text={project.title} scrambleOnHover={true} />
              </Link>
            </h3>
            <p className="mt-2 font-mono text-xs sm:text-sm font-bold text-zinc-800 leading-relaxed">
              {project.tagline}
            </p>
            <p className="mt-3 font-mono text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution Engineering Callout */}
          <div className="rounded-xl border-2 border-zinc-950 bg-[#F4F2EB] p-4 space-y-2.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-start gap-2 text-xs font-mono">
              <span className="bg-red-500 text-white px-1.5 py-0.5 rounded text-[10px] font-black shrink-0">
                PROBLEM
              </span>
              <p className="text-zinc-800 leading-snug">
                {project.problemSolved.problem}
              </p>
            </div>
            <div className="flex items-start gap-2 pt-2 border-t border-zinc-300 text-xs font-mono">
              <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[10px] font-black shrink-0">
                SOLUTION
              </span>
              <p className="text-zinc-800 leading-snug">
                {project.problemSolved.solution}
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div>
            <div className="font-mono text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-2">
              CORE CAPABILITIES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono text-xs text-zinc-700">
              {project.keyFeatures.slice(0, 6).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0038FF] shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <div className="font-mono text-[11px] font-black uppercase tracking-wider text-zinc-500 mb-2">
              STACK
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white text-zinc-950 border border-zinc-950 px-2 py-0.5 rounded font-mono text-[10px] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-zinc-950 font-mono text-xs">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LAUNCH"
                className="bg-[#0038FF] text-white border-2 border-zinc-950 px-4 py-2.5 rounded-xl font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5"
              >
                <span>LIVE SYSTEM</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <Link
              href={`/projects/${project.slug}`}
              data-cursor="CASE STUDY"
              className="bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-4 py-2.5 rounded-xl font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>CASE STUDY</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CODE"
                className="bg-white text-zinc-950 border-2 border-zinc-950 px-3 py-2.5 rounded-xl font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5"
              >
                <Github className="h-3.5 w-3.5" />
                <span>SOURCE</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="lg:col-span-6">
          <MockupFrame
            type={project.mockupType}
            imageUrl={project.imageUrl}
            title={project.title}
            alt="Kelana language learning platform dashboard with Hangul keyboard composer and interactive micro-lessons"
            isFlagship={true}
          />

          <div className="mt-4 p-3 bg-[#F4F2EB] border-2 border-zinc-950 rounded-xl flex items-center justify-between font-mono text-xs">
            <span className="font-bold text-zinc-900">ROLE: Product • Frontend • UI/UX</span>
            <span className="text-zinc-500 text-[11px]">Next.js 16 App Router</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};
