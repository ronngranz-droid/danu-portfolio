'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BootScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [memCount, setMemCount] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  const startBoot = useCallback(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    setVisible(true);
    setIsExiting(false);
    setProgress(0);
    setMemCount(0);
    setLogs([]);

    const bootSequence = [
      'D4NEW_SYSTEM_BIOS // ROM v3.4.0',
      'INITIALIZING ARCHITECTURE CORE...',
      'CHECKING SYSTEM INTERFACE... [OK]',
      'LOADING PROFILE & IDENTITY SPECIFICATIONS... [OK]',
      'MOUNTING REPOSITORIES: Kelana, DANATRAIL, ClassHub, D4new Ai... [OK]',
      'HYDRATING INTERACTION MATRIX & UI ENGINE... [OK]',
      'ESTABLISHING TERMINAL: kuze3ez@system:~$ [ONLINE]',
      'D4NEW.SYSTEM — SYSTEM READY',
    ];

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const currentPct = Math.min(Math.round((step / bootSequence.length) * 100), 100);
      setProgress(currentPct);
      setMemCount(Math.min(Math.round((step / bootSequence.length) * 16384), 16384));

      if (step <= bootSequence.length) {
        const nextLog = bootSequence[step - 1];
        if (nextLog) {
          setLogs((prev) => [...prev, nextLog]);
        }
      }

      if (step >= bootSequence.length + 1) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }
          setTimeout(() => {
            setVisible(false);
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
          }, 450);
        }, 350);
      }
    }, 160);

    return interval;
  }, []);

  const dismissBoot = useCallback(() => {
    setIsExiting(true);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    setTimeout(() => {
      setVisible(false);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, 400);
  }, []);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    const interval = startBoot();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        clearInterval(interval);
        dismissBoot();
      }
    };

    const handleTriggerReboot = () => {
      startBoot();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('danu-trigger-reboot', handleTriggerReboot);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('danu-trigger-reboot', handleTriggerReboot);
    };
  }, [startBoot, dismissBoot]);

  if (!visible) return null;

  // Generate ASCII block progress bar [■■■■■□□□□□]
  const totalBlocks = 20;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);
  const progressBarBlocks = '■'.repeat(filledBlocks) + '□'.repeat(Math.max(0, totalBlocks - filledBlocks));

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
          onClick={dismissBoot}
          className="fixed inset-0 z-[99999] bg-[#0A0A0A] text-white flex flex-col justify-between p-4 sm:p-8 md:p-12 font-mono select-none cursor-pointer overflow-hidden"
          role="dialog"
          aria-label="System Boot Loading Sequence"
        >
          {/* Top BIOS Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-zinc-400 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-white font-bold tracking-wider">D4NEW.SYSTEM // BIOS v3.4</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-zinc-400">
              <span className="text-emerald-400 font-semibold">MEM: {memCount} KB OK</span>
              <span className="hidden sm:inline text-zinc-500">HOST: INDONESIA</span>
              <span className="hidden sm:inline text-zinc-500">USER: kuze3ez</span>
            </div>
          </div>

          {/* Main Terminal Stage */}
          <div className="my-auto max-w-3xl w-full mx-auto py-6">
            {/* Retro ASCII Logo */}
            <motion.pre
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-400 font-mono text-[8px] sm:text-[10px] md:text-xs leading-tight mb-6 overflow-x-hidden select-none"
            >
{`  ██████╗ ██╗  ██╗███╗   ██╗███████╗██╗    ██╗    ███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗
  ██╔══██╗██║  ██║████╗  ██║██╔════╝██║    ██║    ██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║
  ██║  ██║███████║██╔██╗ ██║█████╗  ██║ █╗ ██║    ███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║
  ██║  ██║╚════██║██║╚██╗██║██╔══╝  ██║███╗██║    ╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║
  ██████╔╝     ██║██║ ╚████║███████╗╚███╔███╔╝    ███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║
  ╚═════╝      ╚═╝╚═╝  ╚═══╝╚══════╝ ╚══╝╚══╝     ╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝`}
            </motion.pre>

            {/* Boot Log Stream */}
            <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 min-h-[160px]">
              {logs.filter(Boolean).map((log, idx) => {
                const isLatest = idx === logs.length - 1;
                const isSuccess = Boolean(log && (log.includes('READY') || log.includes('[OK]')));
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-2"
                  >
                    <span className="text-zinc-600 font-bold">&gt;</span>
                    <span
                      className={
                        isLatest
                          ? 'text-[#FACC15] font-semibold'
                          : isSuccess
                          ? 'text-zinc-200'
                          : 'text-zinc-400'
                      }
                    >
                      {log}
                    </span>
                  </motion.div>
                );
              })}
              <div className="flex items-center gap-2">
                <span className="text-zinc-600">&gt;</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar & Skip Hint */}
          <div className="border-t border-zinc-800 pt-4">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-zinc-400 uppercase font-bold tracking-wider flex items-center gap-2">
                <span>{progress < 100 ? 'INITIALIZING OS...' : 'SYSTEM READY • LAUNCHING'}</span>
                <span className="text-emerald-400 hidden sm:inline">[{progressBarBlocks}]</span>
              </span>
              <span className="text-[#FACC15] font-bold font-mono text-sm">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-[#FACC15] to-[#FF5500]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.15 }}
              />
            </div>
            <p className="mt-3 text-[11px] text-zinc-500 text-center uppercase tracking-wider">
              PRESS <kbd className="px-1.5 py-0.5 bg-zinc-800 text-zinc-300 border border-zinc-700 rounded text-[10px]">ESC</kbd> OR CLICK ANYWHERE TO ENTER
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
