'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  Bot,
  Search,
  Filter,
  Maximize2,
  X,
  ExternalLink,
  Layers,
  Image as ImageIcon,
} from 'lucide-react';

interface MockupFrameProps {
  type: 'kelana' | 'danatrail' | 'classhub' | 'danewai';
  imageUrl?: string;
  title?: string;
  alt?: string;
  className?: string;
  isFlagship?: boolean;
}

const PROJECT_CONFIG = {
  kelana: {
    domain: 'belajarsamakelana.vercel.app',
    liveUrl: 'https://belajarsamakelana.vercel.app/',
    bgClass: 'bg-white',
    badge: 'FLAGSHIP LMS',
    accentColor: '#FF4D8D',
  },
  danatrail: {
    domain: 'danatrail.vercel.app',
    liveUrl: 'https://danatrail.vercel.app/',
    bgClass: 'bg-[#0E2319]',
    badge: 'RENTAL 3NF',
    accentColor: '#FACC15',
  },
  classhub: {
    domain: 'bautask.vercel.app',
    liveUrl: 'https://bautask.vercel.app/',
    bgClass: 'bg-[#0B132B]',
    badge: 'WORKSPACE OS',
    accentColor: '#A7F3D0',
  },
  danewai: {
    domain: 'danew-ai.vercel.app',
    liveUrl: 'https://danew-ai.vercel.app/',
    bgClass: 'bg-[#F0FDF4]',
    badge: 'AI WORKSPACE',
    accentColor: '#0038FF',
  },
};

export const MockupFrame: React.FC<MockupFrameProps> = ({
  type,
  imageUrl,
  title,
  alt,
  className = '',
  isFlagship = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'screenshot' | 'interactive'>('screenshot');
  const config = PROJECT_CONFIG[type] || PROJECT_CONFIG.kelana;

  return (
    <>
      <div
        className={`relative w-full border-2 border-zinc-950 bg-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden transition-all duration-300 group/frame ${className}`}
      >
        {/* Browser Window Header */}
        <div className="flex items-center justify-between border-b-2 border-zinc-950 bg-[#F4F2EB] px-3.5 py-2 text-xs font-mono text-zinc-800 select-none">
          {/* Mac-style Window Controls */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D8D] border border-zinc-950 shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0,1)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] border border-zinc-950 shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0,1)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-zinc-950 shadow-[0.5px_0.5px_0px_0px_rgba(0,0,0,1)]" />
          </div>

          {/* Browser Address Bar */}
          <div className="mx-2 flex flex-1 max-w-[240px] sm:max-w-[320px] items-center justify-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono text-zinc-950 bg-white border border-zinc-950 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] truncate">
            <span className="text-zinc-400 select-none">https://</span>
            <span className="font-bold truncate">{config.domain}</span>
          </div>

          {/* Right Status Actions */}
          <div className="flex items-center gap-1.5">
            {/* View Mode Switcher */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setViewMode(viewMode === 'screenshot' ? 'interactive' : 'screenshot');
              }}
              title={viewMode === 'screenshot' ? 'Switch to interactive UI demo' : 'Switch to screenshot'}
              className="hidden sm:flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded border border-zinc-950 bg-white hover:bg-zinc-100 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              {viewMode === 'screenshot' ? (
                <>
                  <Layers className="w-3 h-3 text-[#0038FF]" />
                  <span>UI</span>
                </>
              ) : (
                <>
                  <ImageIcon className="w-3 h-3 text-[#FF4D8D]" />
                  <span>SHOT</span>
                </>
              )}
            </button>

            {/* Expand Modal Trigger */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              title="Expand full resolution preview"
              className="p-1 rounded border border-zinc-950 bg-white hover:bg-[#FACC15] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors"
            >
              <Maximize2 className="w-3 h-3 text-zinc-950" />
            </button>
          </div>
        </div>

        {/* Mockup Screen Content */}
        {imageUrl && viewMode === 'screenshot' ? (
          <div
            onClick={() => setIsModalOpen(true)}
            className={`relative w-full overflow-hidden ${config.bgClass} cursor-pointer group/screen ${
              isFlagship ? 'aspect-[16/10]' : 'aspect-[16/9] sm:aspect-[2/1]'
            }`}
          >
            {/* Clean, Top-Aligned Screenshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt={alt || (title ? `${title} — web application interface preview` : `${type} platform preview`)}
              width={1200}
              height={750}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/screen:scale-[1.025]"
              loading="lazy"
            />

            {/* Subtle Gradient Vignette at Bottom */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

            {/* Hover Action Badge */}
            <div className="absolute inset-0 bg-zinc-950/20 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
              <span className="px-3 py-1.5 bg-white/95 text-zinc-950 border-2 border-zinc-950 font-mono text-[11px] font-black uppercase rounded shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5 backdrop-blur-xs">
                <Maximize2 className="w-3.5 h-3.5 text-[#0038FF]" />
                <span>EXPAND VIEW</span>
              </span>
            </div>
          </div>
        ) : (
          <div
            className={`p-4 sm:p-5 select-none bg-zinc-50 ${
              isFlagship ? 'min-h-[300px] sm:min-h-[380px]' : 'min-h-[220px] sm:min-h-[260px]'
            }`}
          >
            {type === 'kelana' && <KelanaPreview isFlagship={isFlagship} />}
            {type === 'danatrail' && <DanatrailPreview />}
            {type === 'classhub' && <ClasshubPreview />}
            {type === 'danewai' && <DanewaiPreview />}
          </div>
        )}
      </div>

      {/* Fullscreen Modal Lightbox */}
      {isModalOpen && imageUrl && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] bg-white border-3 border-zinc-950 rounded-2xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-zinc-950 bg-[#F4F2EB] px-4 py-3 font-mono text-xs text-zinc-900">
              <div className="flex items-center gap-2">
                <span className="font-black text-sm uppercase">{title || type}</span>
                <span className="px-2 py-0.5 rounded font-black text-[10px] bg-[#FACC15] border border-zinc-950">
                  FULL RESOLUTION
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={config.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-[#0038FF] text-white font-bold rounded border border-zinc-950 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>VISIT LIVE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded border border-zinc-950 bg-white hover:bg-red-500 hover:text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Image Display */}
            <div className="p-2 sm:p-4 overflow-auto max-h-[calc(90vh-60px)] bg-zinc-100 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={alt || (title ? `${title} — high resolution interface preview` : `${type} platform preview`)}
                width={1400}
                height={900}
                className="max-w-full h-auto rounded-lg border-2 border-zinc-950 shadow-md object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* --- KELANA PREVIEW --- */
function KelanaPreview({ isFlagship }: { isFlagship?: boolean }) {
  return (
    <div className="flex flex-col gap-3.5 h-full">
      {/* Top Banner / Progress */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white p-3 shadow-2xs">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white font-bold text-sm">
            K
          </div>
          <div>
            <div className="text-xs font-semibold text-zinc-900">Bahasa Korea • Level 1: Hangeul Basics</div>
            <div className="text-[11px] text-zinc-500">Unit 2: Vokal & Konsonan Dasar</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            <Sparkles className="h-3 w-3" />
            <span>Streak: 7 Hari</span>
          </div>
          <div className="text-xs font-semibold text-blue-600">320 XP</div>
        </div>
      </div>

      {/* Exercise Card */}
      <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-2xs flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
              Interactive Exercise
            </span>
            <span className="text-[11px] text-zinc-400">Pertanyaan 4 dari 8</span>
          </div>
          <h4 className="text-sm sm:text-base font-semibold text-zinc-900">
            Terjemahkan &amp; susun kata berikut: <span className="text-blue-600 font-bold">&quot;Halo&quot; (Annyeonghaseyo)</span>
          </h4>

          {/* Syllable Assembly Display */}
          <div className="mt-3 flex items-center justify-center min-h-[48px] rounded-lg border border-dashed border-zinc-300 bg-zinc-50/70 p-2 gap-2">
            <span className="rounded bg-blue-50 px-2.5 py-1 text-sm font-bold text-blue-800 border border-blue-200">
              안 (an)
            </span>
            <span className="rounded bg-blue-50 px-2.5 py-1 text-sm font-bold text-blue-800 border border-blue-200">
              녕 (nyeong)
            </span>
            <span className="rounded bg-white px-2.5 py-1 text-sm font-medium text-zinc-400 border border-zinc-200">
              하
            </span>
            <span className="rounded bg-white px-2.5 py-1 text-sm font-medium text-zinc-400 border border-zinc-200">
              세
            </span>
            <span className="rounded bg-white px-2.5 py-1 text-sm font-medium text-zinc-400 border border-zinc-200">
              요
            </span>
          </div>
        </div>

        {/* Feature Highlight: Virtual Hangul Keyboard */}
        <div className="mt-3.5 pt-3 border-t border-zinc-100">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
              Virtual Hangul Keyboard Engine (Romanization & Jamo Composer)
            </span>
            <span className="text-[10px] text-emerald-600 font-medium">● IME Active</span>
          </div>
          <div className="grid grid-cols-7 sm:grid-cols-10 gap-1 text-center">
            {['ㅂ', 'ㅈ', 'ㄷ', 'ㄱ', 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ', 'ㄴ', 'ㅇ', 'ㄹ', 'ㅎ', 'ㅗ', 'ㅓ', 'ㅏ', 'ㅣ'].slice(0, isFlagship ? 19 : 14).map((jamo, idx) => (
              <span
                key={idx}
                className="rounded border border-zinc-200 bg-zinc-50 py-1 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 transition-colors cursor-default"
              >
                {jamo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- DANATRAIL PREVIEW --- */
function DanatrailPreview() {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Search & Filter Bar */}
      <div className="flex items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white p-2.5 shadow-2xs">
        <div className="flex items-center gap-2 text-xs text-zinc-500 flex-1">
          <Search className="h-3.5 w-3.5 text-zinc-400" />
          <span>Cari tenda ultralight, carrier 60L, kompor...</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-medium bg-zinc-100 px-2 py-1 rounded text-zinc-700">
          <Filter className="h-3 w-3" />
          <span>Filter</span>
        </div>
      </div>

      {/* Grid of Rental Items */}
      <div className="grid grid-cols-2 gap-2.5 flex-1">
        <div className="rounded-lg border border-zinc-200 bg-white p-2.5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 border border-emerald-200">
                Tersedia
              </span>
              <span className="text-[10px] text-zinc-400">Kapasitas 4P</span>
            </div>
            <div className="text-xs font-semibold text-zinc-900 line-clamp-1">Tenda Dome Arpenaz 4.1</div>
            <div className="text-[11px] text-blue-600 font-bold mt-0.5">Rp 45.000 / hari</div>
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 border-t border-zinc-100 pt-1.5 flex items-center justify-between">
            <span>MySQL Stock: 6 unit</span>
            <span className="font-semibold text-zinc-700">Rental</span>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 bg-white p-2.5 shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-700 border border-amber-200">
                2 Tersisa
              </span>
              <span className="text-[10px] text-zinc-400">Carrier 65L</span>
            </div>
            <div className="text-xs font-semibold text-zinc-900 line-clamp-1">Deuter Aircontact Pro</div>
            <div className="text-[11px] text-blue-600 font-bold mt-0.5">Rp 35.000 / hari</div>
          </div>
          <div className="mt-2 text-[10px] text-zinc-500 border-t border-zinc-100 pt-1.5 flex items-center justify-between">
            <span>Date-Range Locked</span>
            <span className="font-semibold text-zinc-700">Detail</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- CLASSHUB PREVIEW --- */
function ClasshubPreview() {
  return (
    <div className="flex flex-col gap-2.5 h-full">
      {/* Dashboard Topbar */}
      <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-2.5 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 text-white text-[11px] font-bold">
            CH
          </div>
          <span className="text-xs font-semibold text-zinc-900">Task Flow • Active Workspace</span>
        </div>
        <span className="rounded-full bg-red-50 border border-red-200 px-2 py-0.5 text-[10px] font-medium text-red-700">
          2 Deadline Mendesak
        </span>
      </div>

      {/* Task List / Kanban Cards */}
      <div className="space-y-2 flex-1">
        <div className="rounded-lg border border-l-4 border-l-red-500 border-zinc-200 bg-white p-2.5 shadow-2xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-zinc-900">Pemrograman Web & Perangkat Bergerak</span>
            <span className="text-red-600 font-semibold flex items-center gap-1">
              <Clock className="h-3 w-3" /> Besok, 23:59
            </span>
          </div>
          <div className="text-xs text-zinc-600 mt-1">Implementasi API RESTful & MySQL Auth</div>
        </div>

        <div className="rounded-lg border border-l-4 border-l-blue-500 border-zinc-200 bg-white p-2.5 shadow-2xs">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold text-zinc-900">Basis Data Relasional</span>
            <span className="text-zinc-500 flex items-center gap-1">
              <Calendar className="h-3 w-3" /> 3 Hari Lagi
            </span>
          </div>
          <div className="text-xs text-zinc-600 mt-1">Normalisasi 1NF ke 3NF pada Kasus Rental</div>
        </div>
      </div>
    </div>
  );
}

/* --- DANEWAI PREVIEW --- */
function DanewaiPreview() {
  return (
    <div className="flex flex-col gap-2.5 h-full">
      {/* Header with Token Usage */}
      <div className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white p-2.5 shadow-2xs">
        <div className="flex items-center gap-2">
          <Bot className="h-4 w-4 text-purple-600" />
          <span className="text-xs font-semibold text-zinc-900">DanewAI Code Assistant</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
          <span>Tokens: 1,420</span>
          <span className="text-zinc-300">|</span>
          <span className="text-emerald-600">$0.002</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="space-y-2 flex-1">
        <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-2 text-xs text-zinc-700">
          <span className="font-semibold text-purple-700">Prompt:</span> Tolong optimasi query SQL JOIN dengan indeks foreign key.
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-2.5 shadow-2xs text-[11px] font-mono text-zinc-800">
          <div className="text-[10px] text-zinc-400 mb-1">Response (Streaming 12ms/tok):</div>
          <div className="text-blue-700">SELECT u.name, o.total_price</div>
          <div className="text-zinc-600">FROM users u FORCE INDEX (idx_user_status)</div>
          <div className="text-emerald-700">JOIN orders o ON u.id = o.user_id;</div>
        </div>
      </div>
    </div>
  );
}
