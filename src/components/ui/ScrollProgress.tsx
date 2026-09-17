'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-black/10">
      <motion.div
        className="h-full bg-gradient-to-r from-[#FACC15] via-[#FF5500] to-[#22C55E] origin-left border-b border-black"
        style={{ scaleX }}
      />
    </div>
  );
};
