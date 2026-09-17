import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent' | 'secondary' | 'subtle';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-zinc-100 text-zinc-800 border-zinc-200',
    outline: 'bg-transparent text-zinc-700 border-zinc-300',
    accent: 'bg-blue-50 text-blue-700 border-blue-200',
    secondary: 'bg-zinc-50 text-zinc-600 border-zinc-200',
    subtle: 'bg-zinc-100/70 text-zinc-600 border-transparent',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-md border tracking-tight transition-colors',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
