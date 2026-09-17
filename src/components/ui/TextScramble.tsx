'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  triggerOnView?: boolean;
  speed?: number;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
}

const GLYPHS = '!<>-_\\/[]{}—=+*^?#________010101';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  scrambleOnHover = true,
  triggerOnView = true,
  speed = 30,
  as: Component = 'span',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const hasTriggeredOnView = useRef(false);

  const startScramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const target = text;
    let iteration = 0;
    const maxIterations = target.length * 3;

    const update = () => {
      iteration++;

      const scrambled = target
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration / 3) {
            return target[index];
          }
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (iteration < maxIterations) {
        frameRef.current = window.setTimeout(update, speed);
      } else {
        setDisplayText(target);
        isScramblingRef.current = false;
      }
    };

    update();
  }, [text, speed]);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (!triggerOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredOnView.current) {
          hasTriggeredOnView.current = true;
          startScramble();
        }
      },
      { threshold: 0.3 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      if (frameRef.current) clearTimeout(frameRef.current);
    };
  }, [triggerOnView, startScramble]);

  const handleMouseEnter = () => {
    if (scrambleOnHover) {
      startScramble();
    }
  };

  return (
    <Component
      ref={containerRef as any}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
      className={`inline-block select-none ${className}`}
    >
      {displayText}
    </Component>
  );
};
