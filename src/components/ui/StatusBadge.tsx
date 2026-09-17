import React from 'react';
import { ProjectStatus } from '@/types/project';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const statusStyles: Record<
    ProjectStatus,
    { dot: string; bg: string; text: string; border: string }
  > = {
    'Active Development': {
      dot: 'bg-emerald-500 animate-pulse',
      bg: 'bg-emerald-50',
      text: 'text-emerald-800',
      border: 'border-emerald-200',
    },
    Production: {
      dot: 'bg-blue-500',
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-200',
    },
    Prototype: {
      dot: 'bg-amber-500',
      bg: 'bg-amber-50',
      text: 'text-amber-800',
      border: 'border-amber-200',
    },
    Experimental: {
      dot: 'bg-purple-500',
      bg: 'bg-purple-50',
      text: 'text-purple-800',
      border: 'border-purple-200',
    },
    Completed: {
      dot: 'bg-zinc-400',
      bg: 'bg-zinc-50',
      text: 'text-zinc-700',
      border: 'border-zinc-200',
    },
  };

  const style = statusStyles[status] || statusStyles.Prototype;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border',
        style.bg,
        style.text,
        style.border,
        className
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', style.dot)} aria-hidden="true" />
      {status}
    </span>
  );
};
