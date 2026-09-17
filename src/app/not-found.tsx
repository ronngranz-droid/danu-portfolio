import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { AlertTriangle, ArrowLeft, FolderGit2 } from 'lucide-react';

export const metadata: Metadata = {
  title: '404: Page Not Found',
  description: 'The requested route or system resource does not exist in DANU.SYSTEM.',
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4">
      <Container size="narrow">
        <div className="w-full bg-white border-2 border-zinc-950 p-6 sm:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center space-y-6">
          {/* Header Status Strip */}
          <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-3 font-mono text-xs uppercase font-black text-zinc-950">
            <span className="bg-red-500 text-white px-2 py-0.5 border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              ERROR // 404
            </span>
            <span className="text-zinc-500">DANU.SYSTEM // ROUTING FAULT</span>
          </div>

          {/* Center Graphic & Code */}
          <div className="py-4 space-y-3">
            <div className="w-16 h-16 bg-[#FACC15] border-2 border-zinc-950 rounded-2xl mx-auto flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <AlertTriangle className="w-8 h-8 text-zinc-950" />
            </div>

            <h1 className="text-4xl sm:text-6xl font-black font-mono tracking-tighter text-zinc-950">
              404 // NOT_FOUND
            </h1>

            <p className="font-mono text-xs sm:text-sm text-zinc-700 max-w-md mx-auto leading-relaxed">
              The requested address or project node does not exist in this deployment cluster. It might have been moved, renamed, or never initialized.
            </p>
          </div>

          {/* Terminal Diagnostics Box */}
          <div className="bg-zinc-950 text-white rounded-xl p-4 font-mono text-xs text-left border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] space-y-1">
            <p className="text-zinc-400">
              <span className="text-[#FF4D8D] font-bold">&gt; </span>status: 404_HTTP_NOT_FOUND
            </p>
            <p className="text-zinc-400">
              <span className="text-emerald-400 font-bold">&gt; </span>cluster: kuze3ez.is-a.dev
            </p>
            <p className="text-zinc-500 text-[11px] pt-1 border-t border-zinc-800">
              Suggestion: Re-route to index endpoint or browse published project repositories.
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="bg-zinc-950 hover:bg-[#0038FF] text-white border-2 border-zinc-950 px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </Link>
            <Link
              href="/projects"
              className="bg-[#FACC15] hover:bg-yellow-300 text-zinc-950 border-2 border-zinc-950 px-5 py-2.5 rounded-xl font-mono text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>ALL PROJECTS</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
