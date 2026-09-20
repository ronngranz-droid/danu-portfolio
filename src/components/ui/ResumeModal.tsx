'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, ExternalLink, Mail, MapPin, GraduationCap, Code2, Award, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/SocialIcons';
import { personalInfo, socialLinks } from '@/data/socialLinks';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ronngranz@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md">
          {/* Backdrop Click to Close */}
          <div className="fixed inset-0" onClick={onClose} />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="relative w-full max-w-3xl bg-white border-3 border-zinc-950 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-h-[90vh] flex flex-col z-10 overflow-hidden font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Neo-Brutalist Top Title Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b-2 border-zinc-950 bg-zinc-950 text-white font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] animate-pulse" />
                <span className="font-black tracking-wider text-xs sm:text-sm">
                  OPERATOR_DOSSIER.PDF // {personalInfo.brandName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="hidden sm:flex items-center gap-1 bg-white text-zinc-950 px-2.5 py-1 font-mono font-bold text-[11px] rounded border border-zinc-300 hover:bg-yellow-300 transition-colors cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT / PDF</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 rounded bg-zinc-800 text-zinc-300 hover:text-white hover:bg-rose-600 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Dossier / Resume Sheet Body */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6 text-zinc-900 print:p-0">
              {/* Header Profile Section */}
              <div className="border-b-2 border-zinc-950 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-zinc-950 overflow-hidden shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shrink-0 bg-zinc-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/profile.jpg"
                        alt="ronngranz"
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-[#FF4D8D] text-white font-mono text-[10px] font-black uppercase px-2 py-0.5 border border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          KUZE3EZ
                        </span>
                        <span className="bg-[#A7F3D0] text-zinc-950 font-mono text-[10px] font-bold px-2 py-0.5 border border-zinc-950">
                          VERIFIED CANDIDATE
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-zinc-950">
                        {personalInfo.name}
                      </h2>
                      <p className="font-mono text-xs sm:text-sm text-[#0038FF] font-bold mt-0.5">
                        Web Developer &bull; Frontend Engineer
                      </p>
                    </div>
                  </div>

                  {/* Contact Badges */}
                  <div className="font-mono text-xs space-y-1.5 bg-zinc-50 p-3 border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:min-w-[220px]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-zinc-500 text-[10px]">EMAIL:</span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="font-bold text-zinc-900 hover:text-blue-600 flex items-center gap-1 cursor-pointer"
                        title="Click to copy"
                      >
                        <span>ronngranz@gmail.com</span>
                        {copied ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : null}
                      </button>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-zinc-500 text-[10px]">LINKEDIN:</span>
                      <span className="font-bold text-zinc-900">Nu Quincy</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-zinc-500 text-[10px]">INSTAGRAM:</span>
                      <span className="font-bold text-zinc-900">@nuureacher</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-zinc-500 text-[10px]">DOMAIN:</span>
                      <span className="font-bold text-emerald-600">kuze3ez.is-a.dev</span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-zinc-700 leading-relaxed font-sans">
                  {personalInfo.aboutLong}
                </p>
              </div>

              {/* Core Specialization Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-zinc-300 pb-1 font-mono text-xs font-black uppercase text-zinc-950">
                  <Code2 className="w-4 h-4 text-[#0038FF]" />
                  <span>CORE SPECIALIZATION &amp; FOCUS</span>
                </div>
                <div className="bg-white border-2 border-zinc-950 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-black text-sm uppercase text-zinc-950">
                      Modern Web Application &amp; Frontend Engineering
                    </h3>
                    <span className="font-mono text-xs bg-[#A7F3D0] px-2 py-0.5 border border-zinc-950 font-bold self-start sm:self-auto">
                      ACTIVE PRACTITIONER
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 font-medium">
                    Web Developer &bull; Indonesia
                  </p>
                  <p className="text-xs text-zinc-700 font-mono leading-relaxed pt-1">
                    Fokus utama: Membangun aplikasi web full-cycle, arsitektur frontend performa tinggi, UI/UX interaktif, database relasional (MySQL / 3NF), dan integrasi teknologi modern.
                  </p>
                </div>
              </div>

              {/* Technical Competencies Grid */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-zinc-300 pb-1 font-mono text-xs font-black uppercase text-zinc-950">
                  <Code2 className="w-4 h-4 text-emerald-600" />
                  <span>TECHNICAL SKILL MATRIX</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 border-2 border-zinc-950 bg-amber-50/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-black text-zinc-950 block mb-1.5 text-[11px] uppercase">
                      ⚡ Frontend Core
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'HTML5/CSS3', 'Framer Motion'].map((s) => (
                        <span key={s} className="bg-white px-2 py-0.5 border border-zinc-950 text-[10px] font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 border-2 border-zinc-950 bg-emerald-50/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-black text-zinc-950 block mb-1.5 text-[11px] uppercase">
                      🛠️ Interactive &amp; 3D
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {['Three.js', 'React Three Fiber', 'Rapier Physics', 'Web Audio API', 'Canvas API'].map((s) => (
                        <span key={s} className="bg-white px-2 py-0.5 border border-zinc-950 text-[10px] font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 border-2 border-zinc-950 bg-blue-50/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-black text-zinc-950 block mb-1.5 text-[11px] uppercase">
                      🗄️ Backend &amp; Database
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {['Node.js', 'REST API', 'MySQL', 'Database Normalization (3NF)', 'JWT Auth'].map((s) => (
                        <span key={s} className="bg-white px-2 py-0.5 border border-zinc-950 text-[10px] font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 border-2 border-zinc-950 bg-purple-50/50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-black text-zinc-950 block mb-1.5 text-[11px] uppercase">
                      🚀 DevOps &amp; Workflow
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {['Git & GitHub', 'Vercel Deployment', 'Turbopack', 'VS Code', 'DNS Config'].map((s) => (
                        <span key={s} className="bg-white px-2 py-0.5 border border-zinc-950 text-[10px] font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Flagship Projects Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-zinc-300 pb-1 font-mono text-xs font-black uppercase text-zinc-950">
                  <Award className="w-4 h-4 text-purple-600" />
                  <span>KEY SOFTWARE PROJECTS</span>
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="border-2 border-zinc-950 p-3 bg-zinc-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-start">
                      <span className="font-black text-sm text-zinc-950">1. KELANA — Learning &amp; Language Platform</span>
                      <span className="text-[10px] bg-emerald-300 px-1.5 py-0.5 border border-zinc-950 font-bold">FLAGSHIP</span>
                    </div>
                    <p className="text-zinc-600 text-[11px] font-sans mt-1">
                      Platform edukasi bahasa &amp; budaya dengan antarmuka interaktif, kurikulum modular, dan pengalaman belajar terstruktur.
                    </p>
                  </div>

                  <div className="border-2 border-zinc-950 p-3 bg-zinc-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-start">
                      <span className="font-black text-sm text-zinc-950">2. DANATRAIL — Nature Trail &amp; Outbound Portal</span>
                      <span className="text-[10px] bg-amber-300 px-1.5 py-0.5 border border-zinc-950 font-bold">FULLSTACK</span>
                    </div>
                    <p className="text-zinc-600 text-[11px] font-sans mt-1">
                      Portal reservasi dan eksplorasi alam terintegrasi sistem jadwal dan database jalur ekspedisi.
                    </p>
                  </div>

                  <div className="border-2 border-zinc-950 p-3 bg-zinc-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    <div className="flex justify-between items-start">
                      <span className="font-black text-sm text-zinc-950">3. D4NEW AI — Prompt Engineering &amp; AI Assist</span>
                      <span className="text-[10px] bg-pink-300 px-1.5 py-0.5 border border-zinc-950 font-bold">AI TOOL</span>
                    </div>
                    <p className="text-zinc-600 text-[11px] font-sans mt-1">
                      Interface pengolahan prompt dan integrasi generative AI untuk produktivitas coding cepat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Bottom Footer Actions */}
            <div className="px-4 sm:px-6 py-3 border-t-2 border-zinc-950 bg-zinc-100 flex items-center justify-between gap-3 font-mono text-xs">
              <span className="text-[11px] text-zinc-600 font-bold hidden sm:inline">
                &gt; READY FOR JUNIOR DEV ROLES &amp; INTERNSHIPS
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="px-3 py-1.5 bg-zinc-950 text-white font-black rounded-lg border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(250,204,21,1)] hover:bg-[#0038FF] transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT / SAVE PDF</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3 py-1.5 bg-white text-zinc-950 font-bold rounded-lg border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
