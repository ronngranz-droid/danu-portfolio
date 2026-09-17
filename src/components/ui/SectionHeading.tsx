import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  as: Heading = 'h2',
}) => {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
          {eyebrow}
        </div>
      )}
      <Heading className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-3 text-base text-zinc-600 sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
