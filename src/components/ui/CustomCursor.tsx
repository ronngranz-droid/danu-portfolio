'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element for cursor text or clickable target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const isClickable = !!target.closest('a, button, [role="button"], input, textarea');
        setIsHovered(isClickable);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer crosshair / badge */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? (cursorText ? 1 : 1.35) : 1,
            backgroundColor: cursorText ? 'rgba(250, 204, 21, 1)' : 'rgba(250, 204, 21, 0)',
            borderColor: cursorText ? '#000000' : '#000000',
            width: cursorText ? 'auto' : isHovered ? 36 : 28,
            height: cursorText ? 'auto' : isHovered ? 36 : 28,
            paddingLeft: cursorText ? 12 : 0,
            paddingRight: cursorText ? 12 : 0,
            paddingTop: cursorText ? 6 : 0,
            paddingBottom: cursorText ? 6 : 0,
          }}
          transition={{ type: 'spring', stiffness: 450, damping: 28 }}
          className="rounded-full border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#000000] backdrop-blur-[1px]"
        >
          {cursorText ? (
            <span className="font-mono text-[10px] font-black text-black tracking-widest uppercase">
              {cursorText}
            </span>
          ) : (
            <span className="w-1.5 h-1.5 rounded-full bg-black block" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
