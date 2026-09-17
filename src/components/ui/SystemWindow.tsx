import React from 'react';

interface SystemWindowProps {
  title: string;
  status?: string;
  variant?: 'dark' | 'light' | 'panel';
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}

export const SystemWindow: React.FC<SystemWindowProps> = ({
  title,
  status,
  variant = 'dark',
  className = '',
  bodyClassName = '',
  children,
}) => {
  const isDark = variant === 'dark';
  const isPanel = variant === 'panel';

  const headerBg = isDark
    ? 'bg-zinc-950 text-white border-b-2 border-zinc-950'
    : isPanel
    ? 'bg-zinc-900 text-white border-b-2 border-zinc-950'
    : 'bg-zinc-100 text-zinc-950 border-b-2 border-zinc-950';

  const bodyBg = isDark
    ? 'bg-zinc-950 text-zinc-100'
    : isPanel
    ? 'bg-[#F4F2EB] text-zinc-900'
    : 'bg-white text-zinc-900';

  return (
    <div
      className={`rounded-2xl border-2 border-zinc-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-200 ${className}`}
    >
      {/* Title bar */}
      <div className={`px-3 sm:px-4 py-2 flex items-center justify-between font-mono text-xs font-bold select-none ${headerBg}`}>
        <div className="flex items-center gap-2">
          {/* Retro Window Control Buttons: [_] [□] [✕] */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-zinc-950 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-zinc-950 inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-zinc-950 inline-block" />
          </div>
          <span className="ml-1 text-[11px] sm:text-xs font-mono font-bold tracking-tight text-zinc-200">
            {title}
          </span>
        </div>

        {status && (
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase bg-zinc-900 text-emerald-400 px-2 py-0.5 rounded border border-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{status}</span>
          </div>
        )}
      </div>

      {/* Body content */}
      <div className={`p-4 sm:p-5 ${bodyBg} ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};
