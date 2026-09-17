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
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now();

          const update = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            const currentVal = Math.floor(easeOutProgress * end);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.2 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [end, duration]);

  const formattedNumber = padZero > 0 ? String(count).padStart(padZero, '0') : String(count);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
};
