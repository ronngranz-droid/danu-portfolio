'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SystemWindow } from '@/components/ui/SystemWindow';
import { Terminal } from 'lucide-react';

interface TerminalLine {
  type: 'input' | 'output' | 'system';
  text: string;
}

export const MiniTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', text: 'DANU_OS INTERACTIVE TERMINAL [v2.6.0]' },
    { type: 'system', text: 'Type "help" to view available system commands.' },
    { type: 'input', text: 'whoami' },
    { type: 'output', text: 'DANU SAKTI ADITYA PERMANA — Software Engineering Student & Frontend Developer' },
    { type: 'input', text: 'current-project' },
    { type: 'output', text: 'KELANA [Active Development] — Language Learning Platform' },
  ]);

  const listContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Scroll only internal terminal list, never scroll the main browser window
    if (listContainerRef.current) {
      listContainerRef.current.scrollTop = listContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input' as const, text: inputVal.trim() }];

    switch (cmd) {
      case 'help':
        newHistory.push(
          { type: 'output', text: 'Available Commands:' },
          { type: 'output', text: '  whoami          - Display developer identity' },
          { type: 'output', text: '  about           - Short bio and engineering philosophy' },
          { type: 'output', text: '  projects        - List featured portfolio projects' },
          { type: 'output', text: '  kelana          - Inspect flagship project details' },
          { type: 'output', text: '  skills          - View active tech stack' },
          { type: 'output', text: '  contact         - Get direct contact channels' },
          { type: 'output', text: '  clear           - Clear terminal screen' }
        );
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'Danu Sakti Aditya Permana | RPL Student @ Indonesia | Focus: Web Development & AI Tools',
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: 'Software Engineering student who turns ideas into tangible products through design, code, and testing.',
        });
        break;

      case 'projects':
        newHistory.push(
          { type: 'output', text: '1. Kelana    - Gamified Language Platform (Flagship)' },
          { type: 'output', text: '2. DANATRAIL - Outdoor Marketplace & Rental Platform' },
          { type: 'output', text: '3. ClassHub  - Class Workspace & Student Task Management' },
          { type: 'output', text: '4. D4new Ai  - AI Chat & Developer Workspace' }
        );
        break;

      case 'kelana':
        newHistory.push({
          type: 'output',
          text: 'Kelana: Interactive language platform featuring Virtual Hangul Keyboard & Nusantara languages. Live at belajarsamakelana.vercel.app',
        });
        break;

      case 'skills':
        newHistory.push(
          { type: 'output', text: 'Frontend : Next.js, React, TypeScript, Tailwind CSS, HTML/CSS' },
          { type: 'output', text: 'Backend  : Node.js, REST API, JWT Authentication' },
          { type: 'output', text: 'Database : MySQL, Relational Schema (3NF), SQL' },
          { type: 'output', text: 'Tooling  : Git, GitHub, VS Code, Vercel' }
        );
        break;

      case 'contact':
        newHistory.push(
          { type: 'output', text: 'Email   : danusaktiaditya@gmail.com' },
          { type: 'output', text: 'GitHub  : github.com/ronngranz-droid' },
          { type: 'output', text: 'Status  : Available for Junior roles / Internships' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <SystemWindow
      title="danu_terminal.exe"
      status="ACTIVE"
      variant="dark"
      className="w-full"
      bodyClassName="font-mono text-xs p-3 sm:p-4 min-h-[260px] max-h-[340px] flex flex-col justify-between overflow-y-auto"
    >
      <div
        ref={listContainerRef}
        className="space-y-1.5 overflow-y-auto max-h-[220px] pr-1"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, idx) => (
          <div key={idx} className="leading-relaxed">
            {line.type === 'system' && (
              <p className="text-zinc-500 font-semibold">{line.text}</p>
            )}
            {line.type === 'input' && (
              <p className="text-zinc-200 flex items-center gap-1.5">
                <span className="text-[#FF4D8D] font-bold">kuze3ez@portfolio:~$</span>
                <span className="text-white font-semibold">{line.text}</span>
              </p>
            )}
            {line.type === 'output' && (
              <p className="text-emerald-400 pl-4">{line.text}</p>
            )}
          </div>
        ))}
      </div>

      {/* Input Line Form */}
      <form onSubmit={handleCommand} className="mt-3 pt-2 border-t border-zinc-800 flex items-center gap-2">
        <span className="text-[#FF4D8D] font-bold shrink-0">kuze3ez@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help'..."
          className="flex-1 bg-transparent text-emerald-400 font-mono text-xs focus:outline-none placeholder:text-zinc-600"
          autoComplete="off"
          spellCheck="false"
        />
        <span className="terminal-cursor shrink-0" />
      </form>
    </SystemWindow>
  );
};
