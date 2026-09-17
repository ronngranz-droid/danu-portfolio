'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  padZero?: number;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 1500,
  prefix = '',
  suffix = '',
  className = '',
  padZero = 0,
}) => {
  // Start with 'end' so SSR, web crawlers, and non-JS clients read the actual target metric!
  const [count, setCount] = useState(end);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          // Reset to 0 and animate up on client viewport intersection
          setCount(0);
          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.floor(easeOutProgress * end);

            setCount(currentVal);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(update);
            } else {
              setCount(end);
            }
          };

          animationFrameId = requestAnimationFrame(update);
        }
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  const formattedNumber = padZero > 0 ? String(count).padStart(padZero, '0') : String(count);
  const targetFormatted = padZero > 0 ? String(end).padStart(padZero, '0') : String(end);

  return (
    <span
      ref={containerRef}
      className={className}
      aria-label={`${prefix}${targetFormatted}${suffix}`}
    >
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
