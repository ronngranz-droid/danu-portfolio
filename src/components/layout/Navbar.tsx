'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { personalInfo } from '@/data/socialLinks';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { Menu, X, FileDown } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/#hero', index: '001' },
    { label: 'DINO', href: '/#dino-runner', index: 'ARC' },
    { label: 'ABOUT', href: '/#about', index: '002' },
    { label: 'PROJECTS', href: '/#projects', index: '003' },
    { label: 'TECH HUB', href: '/#tech-hub', index: '004' },
    { label: 'ACTIVITY', href: '/#dev-radar', index: '005' },
    { label: 'CONTACT', href: '/#contact', index: '006' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`fixed w-full top-0 z-40 transition-colors duration-200 border-b-2 border-zinc-950 ${
          scrolled
            ? 'bg-[#FAFAFA]/95 backdrop-blur-md shadow-[0_4px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-[#FAFAFA]/90 backdrop-blur-xs'
        }`}
      >
        <Container>
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* Brand / Logo */}
            <Link
              href="/"
              data-cursor="HOME"
              className="flex items-center gap-2 font-mono text-sm sm:text-base font-bold tracking-tight text-zinc-950 hover:text-[#0038FF] transition-colors group"
            >
              <span className="w-3 h-3 bg-[#FF4D8D] border border-zinc-950 inline-block shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-45 transition-transform duration-200" />
              <span className="font-mono font-black text-xs sm:text-sm">
                kuze3ez@system:~$
              </span>
              <span className="text-[#0038FF] font-black group-hover:text-[#FF5500] transition-colors">_</span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 font-mono text-xs font-bold uppercase tracking-wider text-zinc-950">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-2.5 py-1 rounded-md border border-transparent hover:border-zinc-950 hover:bg-zinc-950 hover:text-white transition-all shadow-none hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('danu-trigger-reboot'));
                  }
                }}
                data-cursor="REBOOT"
                title="Restart System Boot Loading Animation"
                className="font-mono text-xs font-black uppercase bg-zinc-950 text-white border-2 border-zinc-950 px-2.5 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(250,204,21,1)] hover:bg-[#0038FF] hover:text-white transition-all cursor-pointer flex items-center gap-1.5 active:translate-x-0.5 active:translate-y-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>REBOOT</span>
              </button>

              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                data-cursor="RESUME"
                className="font-mono text-xs font-black uppercase bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-3 py-1.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 transition-all cursor-pointer hover:bg-amber-400"
              >
                <FileDown className="h-3.5 w-3.5" />
                <span>VIEW CV / RESUME</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden font-mono text-xs font-black uppercase bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-3 py-1.5 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-1.5 transition-all cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full border border-zinc-950 animate-pulse" />
              <span>MENU</span>
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </Container>
      </motion.header>

      {/* Neo-Brutalist Mobile Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/70 backdrop-blur-xs flex items-start justify-end p-4 pt-16"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="w-full max-w-xs sm:max-w-sm bg-white border-3 border-zinc-950 rounded-2xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6 relative"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FF4D8D] border border-zinc-950 inline-block shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
                  <span className="font-mono text-sm font-bold tracking-tight text-zinc-950 uppercase">
                    SYSTEM MENU
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="font-mono text-xs font-black uppercase bg-[#FF4D8D] text-white border-2 border-zinc-950 px-2.5 py-1 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex items-center gap-1"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>CLOSE</span>
                </button>
              </div>

              {/* Links List */}
              <ul className="space-y-2 font-mono text-sm font-bold uppercase tracking-tight">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="bg-[#F4F2EB] hover:bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-4 py-2.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-zinc-500 font-normal">{link.index}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Actions */}
              <div className="pt-2 border-t-2 border-zinc-950 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== 'undefined') {
                      window.dispatchEvent(new CustomEvent('danu-trigger-reboot'));
                    }
                  }}
                  className="w-full justify-center font-mono text-xs font-black uppercase bg-zinc-950 text-white border-2 border-zinc-950 px-4 py-2 rounded-xl shadow-[3px_3px_0px_0px_rgba(250,204,21,1)] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>REBOOT SYSTEM (ANIMATION)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsResumeOpen(true);
                  }}
                  className="w-full justify-center font-mono text-xs font-black uppercase bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 px-4 py-2.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 hover:bg-amber-400 cursor-pointer"
                >
                  <FileDown className="h-4 w-4" />
                  <span>VIEW CV / RESUME</span>
                </button>
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 font-bold uppercase">
                  <span>DANU.SYSTEM // RPL</span>
                  <span className="bg-[#A7F3D0] text-zinc-950 px-2 py-0.5 border border-zinc-950">
                    ONLINE
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};
