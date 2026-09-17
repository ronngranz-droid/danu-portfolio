'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { certificates } from '@/data/certificates';
import { Award, ExternalLink, Calendar, Check, Terminal } from 'lucide-react';

export const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-white relative">
      <Container>
        <SectionHeader
          number="CERT"
          category="CREDENTIALS & ASSESSMENTS"
          title="TECHNICAL CREDENTIALS & COURSEWORK"
          subtitle="Continuous skill acquisition in modern web technologies and frontend engineering through verified training curricula."
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between border-2 border-zinc-950 bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b-2 border-zinc-950 pb-3 mb-3 font-mono">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-yellow-300 text-zinc-950 px-2 py-0.5 border border-zinc-950">
                    CERT_{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-zinc-500">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </span>
                </div>

                <div className="font-mono text-[11px] font-bold text-zinc-500 mb-1">
                  //{cert.category}
                </div>
                <h3 className="text-sm font-black text-zinc-950 leading-snug font-mono">
                  {cert.name}
                </h3>
                <p className="text-xs text-zinc-600 font-medium mt-1 font-sans">
                  Issued by {cert.provider}
                </p>

                {/* Skills Learned */}
                <div className="mt-4 pt-3 border-t-2 border-dashed border-zinc-200">
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 block mb-2 font-mono flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-zinc-700" />
                    VERIFIED_COMPETENCIES:
                  </span>
                  <div className="space-y-1.5 text-xs text-zinc-700 font-mono">
                    {cert.skillsLearned.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action / Credential status */}
              <div className="mt-5 pt-3 border-t-2 border-zinc-950 flex items-center justify-between font-mono text-xs">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-950 font-black hover:underline"
                  >
                    <span>VIEW_CREDENTIAL</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-zinc-500 text-[10px] font-bold">
                    [ VERIFIED_COURSEWORK ]
                  </span>
                )}
                <Award className="h-4 w-4 text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

