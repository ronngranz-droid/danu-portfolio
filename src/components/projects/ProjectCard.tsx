'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/types/project';
import { MockupFrame } from '@/components/ui/MockupFrame';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Github } from '@/components/ui/SocialIcons';
import { TextScramble } from '@/components/ui/TextScramble';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isProd = project.status === 'Production';
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      data-cursor="PROJECT"
      className="group flex flex-col justify-between rounded-2xl border-2 border-zinc-950 bg-white p-5 sm:p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-200"
    >
      <div>
        {/* Top bar with category & status */}
        <div className="flex items-center justify-between gap-2 border-b-2 border-zinc-950 pb-3 mb-4 font-mono text-xs">
          <span className="font-black uppercase tracking-wider text-zinc-900 bg-[#F4F2EB] px-2 py-0.5 border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            {project.category}
          </span>
          <span
            className={`px-2 py-0.5 rounded font-black uppercase text-[10px] border border-zinc-950 flex items-center gap-1 ${
              isProd ? 'bg-[#A7F3D0] text-zinc-950' : 'bg-[#FACC15] text-zinc-950'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
            <span>{project.status}</span>
          </span>
        </div>

        {/* Visual Mockup Frame */}
        <MockupFrame
          type={project.mockupType}
          imageUrl={project.imageUrl}
          title={project.title}
          className="mb-4"
        />

        {/* Project Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-zinc-950 group-hover:text-[#0038FF] transition-colors cursor-default">
          <Link href={`/projects/${project.slug}`}>
            <TextScramble text={project.title} scrambleOnHover={true} />
          </Link>
        </h3>
        <p className="mt-1 font-mono text-xs font-bold text-zinc-800">{project.tagline}</p>
        <p className="mt-2 font-mono text-xs text-zinc-600 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Problem Solved Compact Box */}
        <div className="mt-3 rounded-lg border border-zinc-950 bg-[#F4F2EB] p-2.5 font-mono text-[11px] text-zinc-700 space-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <p className="line-clamp-1">
            <span className="font-black text-red-600">PROB:</span> {project.problemSolved.problem}
          </p>
          <p className="line-clamp-1 pt-1 border-t border-zinc-300">
            <span className="font-black text-emerald-700">SOL:</span> {project.problemSolved.solution}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-4 flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="bg-white text-zinc-950 border border-zinc-950 px-1.5 py-0.5 rounded font-mono text-[10px] font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-zinc-100 text-zinc-600 border border-zinc-300 px-1.5 py-0.5 rounded font-mono text-[10px] font-bold">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 pt-3 border-t-2 border-zinc-950 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
        <Link
          href={`/projects/${project.slug}`}
          data-cursor="CASE"
          className="bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-3 py-1.5 rounded-lg font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-amber-400 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5 text-[11px]"
        >
          <span>CASE STUDY</span>
          <ArrowRight className="h-3 w-3" />
        </Link>

        <div className="flex items-center gap-1.5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="DEMO"
              className="bg-zinc-950 text-white border-2 border-zinc-950 px-2.5 py-1.5 rounded-lg font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#0038FF] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5 text-[11px]"
            >
              <span>DEMO</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="CODE"
              className="bg-white text-zinc-950 border-2 border-zinc-950 p-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5"
              aria-label="GitHub Repository"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
