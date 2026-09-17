'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import {
  ExternalLink,
  FileCode,
  Terminal,
} from 'lucide-react';
import { Github } from '@/components/ui/SocialIcons';

export const GitHubHighlights: React.FC = () => {
  const codeSnippets = [
    {
      title: 'Korean Hangul Syllable Composition Algorithm',
      repo: 'ronngranz-droid/Kelana',
      repoUrl: 'https://github.com/ronngranz-droid/Kelana',
      lang: 'TypeScript',
      description: 'Calculates Unicode codepoints dynamically from sequential Jamo keystrokes using formula: 0xAC00 + (cho * 21 + jung) * 28 + jong.',
      code: `export function composeHangul(cho: number, jung: number, jong = 0): string {
  const HANGUL_BASE = 0xAC00;
  const unicode = HANGUL_BASE + (cho * 21 + jung) * 28 + jong;
  return String.fromCharCode(unicode);
}`,
    },
    {
      title: 'SQL Date-Range Rental Collision Validator',
      repo: 'ronngranz-droid/danatrail',
      repoUrl: 'https://github.com/ronngranz-droid/danatrail',
      lang: 'SQL / Node.js',
      description: 'Guarantees that no outdoor gear is rented twice for overlapping dates using temporal intersection queries inside an ACID transaction.',
      code: `SELECT COUNT(*) AS collision_count FROM rentals
WHERE product_id = ? 
  AND status IN ('booked', 'active')
  AND (start_date <= ? AND end_date >= ?);`,
    },
  ];

  return (
    <section id="code" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-white relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeader
            number="SOURCE"
            category="SOURCE CONTROL // GITHUB"
            title="CORE ALGORITHMS & IMPLEMENTATION"
            subtitle="I don't just assemble UI components. I write deterministic algorithms, relational validation, and state stores."
            className="mb-0"
          />
          <a
            href="https://github.com/ronngranz-droid"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs font-black px-4 py-2.5 bg-zinc-950 text-white border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(250,204,21,1)] transition-all shrink-0"
          >
            <Github className="h-4 w-4" />
            <span>@ronngranz-droid</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Code Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {codeSnippets.map((snippet) => (
            <div
              key={snippet.title}
              className="flex flex-col justify-between border-2 border-zinc-950 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
            >
              {/* Window Header */}
              <div className="p-4 border-b-2 border-zinc-950 bg-zinc-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-rose-500 border border-zinc-950" />
                  <div className="w-2.5 h-2.5 bg-amber-400 border border-zinc-950" />
                  <div className="w-2.5 h-2.5 bg-emerald-500 border border-zinc-950" />
                  <a
                    href={snippet.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 font-mono text-xs font-bold text-zinc-950 hover:underline flex items-center gap-1"
                  >
                    <FileCode className="w-3.5 h-3.5" />
                    <span>{snippet.repo}</span>
                  </a>
                </div>
                <span className="font-mono text-[10px] font-black bg-yellow-300 text-zinc-950 px-2 py-0.5 border-2 border-zinc-950">
                  {snippet.lang}
                </span>
              </div>

              <div className="p-4 border-b-2 border-zinc-950 bg-white">
                <h3 className="text-sm font-black text-zinc-950 font-mono mb-1.5">
                  {snippet.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                  {snippet.description}
                </p>
              </div>

              {/* Terminal Code Snippet Box */}
              <div className="bg-zinc-950 p-4 font-mono text-xs text-zinc-200 overflow-x-auto">
                <pre className="text-emerald-400 leading-relaxed">
                  <code>{snippet.code}</code>
                </pre>
              </div>

              {/* Window Footer */}
              <div className="p-3 bg-zinc-50 border-t-2 border-zinc-950 flex items-center justify-between font-mono text-[11px]">
                <span className="text-zinc-600 flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-emerald-600" />
                  <span>SYNTAX_VERIFIED</span>
                </span>
                <a
                  href={snippet.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-zinc-950 hover:underline flex items-center gap-1"
                >
                  <span>VIEW_IN_GIT</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

