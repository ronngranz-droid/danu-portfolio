'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { personalInfo, socialLinks } from '@/data/socialLinks';
import { Mail, ArrowUp, Terminal } from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-4 border-zinc-950 bg-white py-12 text-sm text-zinc-900 font-mono">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b-2 border-zinc-950">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center border-2 border-zinc-950 bg-yellow-300 text-xs font-black text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                DS
              </span>
              <span className="text-base font-black text-zinc-950 tracking-tight font-mono">
                {personalInfo.brandName}
              </span>
            </div>
            <p className="text-xs text-zinc-600 max-w-sm leading-relaxed font-sans">
              Software Engineering (RPL) Student &amp; Frontend Developer. Building practical, responsive web apps with clean code and interactive UX.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-zinc-950 bg-white p-2 text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300 hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
                  aria-label={item.label}
                >
                  {item.iconName === 'Github' && <Github className="h-4 w-4" />}
                  {item.iconName === 'Linkedin' && <Linkedin className="h-4 w-4" />}
                  {item.iconName === 'Instagram' && <Instagram className="h-4 w-4" />}
                  {item.iconName === 'Mail' && <Mail className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-950 bg-zinc-100 px-2 py-1 border border-zinc-300 inline-block">
              // INDEX_NAV
            </h4>
            <ul className="space-y-2 text-xs font-bold text-zinc-700">
              <li>
                <Link href="/#hero" className="hover:text-zinc-950 hover:underline">
                  &gt; 001_SYSTEM_ENTRY
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-zinc-950 hover:underline">
                  &gt; 002_OPERATOR_SPEC
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-zinc-950 hover:underline">
                  &gt; 003_FEATURED_WORKS
                </Link>
              </li>
              <li>
                <Link href="/#tech-hub" className="hover:text-zinc-950 hover:underline">
                  &gt; 004_TECH_ARCHITECTURE
                </Link>
              </li>
              <li>
                <Link href="/#dev-radar" className="hover:text-zinc-950 hover:underline">
                  &gt; 005_ACTIVITY_RADAR
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-zinc-950 hover:underline">
                  &gt; 006_TRANSMISSION
                </Link>
              </li>
            </ul>
          </div>

          {/* System Specs & Deploy Info */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-zinc-950 bg-zinc-100 px-2 py-1 border border-zinc-300 inline-block">
              // SYSTEM_INFO
            </h4>
            <div className="border-2 border-zinc-950 bg-zinc-50 p-3 space-y-1.5 text-[11px] text-zinc-700">
              <div className="flex justify-between">
                <span>CORE_ENGINE:</span>
                <span className="font-black text-zinc-950">Next.js 16 App Router</span>
              </div>
              <div className="flex justify-between">
                <span>RUNTIME:</span>
                <span className="font-black text-zinc-950">React 19 + Turbopack</span>
              </div>
              <div className="flex justify-between">
                <span>EDGE_HOST:</span>
                <span className="font-black text-zinc-950">Vercel Production</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-bold pt-1 border-t border-dashed border-zinc-300">
                <span>SYS_STATUS:</span>
                <span>OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-zinc-950" />
            <span>© {new Date().getFullYear()} DANU SAKTI ADITYA PERMANA. ALL RIGHTS RESERVED.</span>
          </div>
          <a
            href="#hero"
            className="flex items-center gap-1.5 font-black text-zinc-950 bg-yellow-300 px-3 py-1 border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
          >
            <span>SCROLL_TO_TOP</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

