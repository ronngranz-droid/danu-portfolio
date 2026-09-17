import React from 'react';

export const TechMarquee: React.FC = () => {
  const techItems = [
    { name: 'NEXT.JS', bg: 'bg-zinc-950 text-white' },
    { name: 'REACT', bg: 'bg-[#0038FF] text-white' },
    { name: 'TYPESCRIPT', bg: 'bg-[#FACC15] text-zinc-950' },
    { name: 'TAILWIND CSS', bg: 'bg-[#A7F3D0] text-zinc-950' },
    { name: 'NODE.JS', bg: 'bg-zinc-950 text-white' },
    { name: 'MYSQL', bg: 'bg-[#FF5500] text-white' },
    { name: 'GIT & GITHUB', bg: 'bg-white text-zinc-950' },
    { name: 'AI AGENTS', bg: 'bg-[#FF4D8D] text-white' },
    { name: 'REST API', bg: 'bg-[#FACC15] text-zinc-950' },
    { name: 'VERCEL', bg: 'bg-zinc-950 text-white' },
  ];

  const duplicated = [...techItems, ...techItems];

  return (
    <div className="w-full overflow-hidden border-y-2 border-zinc-950 bg-white py-3 select-none">
      <div className="animate-marquee flex items-center gap-3">
        {duplicated.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 px-3 py-1 rounded-md border-2 border-zinc-950 font-mono text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${item.bg}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
