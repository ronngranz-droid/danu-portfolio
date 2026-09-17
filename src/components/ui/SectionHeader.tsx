'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TextScramble } from '@/components/ui/TextScramble';

interface SectionHeaderProps {
  number: string;
  systemTag?: string;
  category?: string;
  title: string;
  description?: string;
  subtitle?: string;
  badgeText?: string;
  badgeColor?: 'yellow' | 'pink' | 'emerald' | 'blue';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  systemTag,
  category,
  title,
  description,
  subtitle,
  badgeText,
  badgeColor = 'yellow',
  className = '',
}) => {
  const badgeColorClasses = {
    yellow: 'bg-[#FACC15] text-zinc-950',
    pink: 'bg-[#FF4D8D] text-white',
    emerald: 'bg-[#A7F3D0] text-zinc-950',
    blue: 'bg-[#0038FF] text-white',
  };

  const tag = systemTag || category || 'SECTION';
  const desc = subtitle || description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`w-full mb-8 sm:mb-12 ${className}`}
    >
      {/* Top Technical Metadata Bar */}
      <div className="w-full pb-3 border-b-2 border-zinc-950 flex flex-row justify-between items-center gap-2 font-mono text-xs uppercase font-black text-zinc-950 mb-4">
        <div className="flex items-center gap-2">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-950 text-white px-2.5 py-1 border border-zinc-950 font-mono text-[10px] sm:text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            {number} // {tag}
          </motion.span>
        </div>
        {badgeText && (
          <div className="text-right">
            <span
              className={`border border-zinc-950 px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-1 inline-block ${badgeColorClasses[badgeColor]}`}
            >
              {badgeText}
            </span>
          </div>
        )}
      </div>

      {/* Main Section Title */}
      <div className="max-w-3xl overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 leading-tight cursor-default group"
        >
          <TextScramble text={title} scrambleOnHover triggerOnView />
        </motion.h2>
        {desc && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-2 text-xs sm:text-sm font-mono text-zinc-700 leading-relaxed max-w-2xl"
          >
            {desc}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};
