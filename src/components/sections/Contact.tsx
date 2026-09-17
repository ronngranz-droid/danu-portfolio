'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { socialLinks } from '@/data/socialLinks';
import {
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Terminal,
  Copy,
  Check,
} from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/SocialIcons';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [payloadCopied, setPayloadCopied] = useState(false);

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ronngranz@gmail.com&su=${encodeURIComponent(
    `Portfolio Inquiry from ${name}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  const mailtoUrl = `mailto:ronngranz@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('ronngranz@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPayload = () => {
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(text);
    setPayloadCopied(true);
    setTimeout(() => setPayloadCopied(false), 2000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="h-4 w-4" />;
      case 'Linkedin':
        return <Linkedin className="h-4 w-4" />;
      case 'Instagram':
        return <Instagram className="h-4 w-4" />;
      default:
        return <Mail className="h-4 w-4" />;
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          number="010"
          category="COMMUNICATION GATEWAY"
          title="LET'S BUILD SOMETHING RELIABLE"
          subtitle="Open for junior frontend roles, software engineering internships, and product collaboration."
        />

        {/* Terminal Header Prompt Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 p-3 bg-zinc-950 text-white font-mono text-xs flex flex-wrap items-center justify-between gap-3 border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-400">kuze3ez@portfolio:~$</span>
            <span className="text-[#FACC15] font-bold">./contact --direct-pipeline</span>
            <span className="terminal-cursor" />
          </div>
          <div className="text-zinc-400 text-[11px] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PORT 443 / SSL ENCRYPTED</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border-2 border-zinc-950 bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-zinc-950 font-mono">
                <h3 className="text-xs font-black uppercase tracking-wider text-zinc-950">
                  CHANNELS // DIRECT_ENDPOINT
                </h3>
                <span className="text-[10px] bg-emerald-300 text-zinc-950 px-2 py-0.5 border border-zinc-950 font-black">
                  ONLINE
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                I monitor incoming communication regularly and am always open to architectural discussions, code reviews, and product brainstorms.
              </p>

              <div className="space-y-2.5 pt-2">
                {socialLinks.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 border-2 border-zinc-950 bg-zinc-50 hover:bg-yellow-300 transition-colors text-xs text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group"
                  >
                    <a
                      href={item.href}
                      target={item.label === 'Email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      data-cursor="CONNECT"
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-white border-2 border-zinc-950 shrink-0">
                        {getIcon(item.iconName)}
                      </div>
                      <div className="truncate">
                        <span className="font-mono font-black text-zinc-950 block">{item.label}</span>
                        <span className="text-zinc-600 text-[11px] font-mono truncate">{item.handle}</span>
                      </div>
                    </a>

                    {item.label === 'Email' ? (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="ml-2 px-2 py-1 font-mono text-[10px] font-black border border-zinc-950 bg-white hover:bg-emerald-300 transition-colors flex items-center gap-1 cursor-pointer shrink-0 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                        title="Copy Email Address"
                      >
                        {emailCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-700" />
                            <span className="text-emerald-800">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-zinc-700" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:text-blue-600 shrink-0"
                        aria-label={`Visit ${item.label}`}
                      >
                        <ExternalLink className="h-4 w-4 text-zinc-950" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="border-2 border-zinc-950 bg-white p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-zinc-950 font-mono">
                <div className="flex items-center gap-2 text-zinc-950 font-black text-sm">
                  <MessageSquare className="h-4 w-4 text-zinc-950" />
                  <span>TRANSMIT_MESSAGE.EXE</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">
                  PROTO: MAILTO_DIRECT
                </span>
              </div>

              {submitted ? (
                <div className="border-2 border-zinc-950 bg-emerald-100 p-6 sm:p-8 text-center space-y-4 font-mono">
                  <CheckCircle2 className="h-12 w-12 text-emerald-800 mx-auto animate-bounce" />
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-black text-emerald-950">
                      TRANSMISSION INITIALIZED!
                    </h4>
                    <p className="text-xs text-emerald-900 max-w-md mx-auto font-sans leading-relaxed">
                      Pesan Anda sudah disiapkan untuk dikirim ke <strong className="font-mono bg-white px-1.5 py-0.5 border border-zinc-950 text-zinc-950">ronngranz@gmail.com</strong>. Pilih salah satu opsi cepat di bawah:
                    </p>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 max-w-md mx-auto">
                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 font-mono font-black text-xs bg-[#0038FF] text-white border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-blue-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>OPEN IN GMAIL WEB</span>
                    </a>
                    <a
                      href={mailtoUrl}
                      className="px-3.5 py-2.5 font-mono font-black text-xs bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-amber-400 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>OPEN DEFAULT APP</span>
                    </a>
                  </div>

                  {/* Copy Payload & New Message */}
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-emerald-300">
                    <button
                      type="button"
                      onClick={handleCopyPayload}
                      className="px-3 py-1.5 font-mono font-bold text-xs bg-white text-zinc-950 border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 flex items-center gap-1.5 cursor-pointer"
                    >
                      {payloadCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-zinc-600" />}
                      <span>{payloadCopied ? 'PAYLOAD COPIED!' : 'COPY MESSAGE TEXT'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-3 py-1.5 font-mono font-bold text-xs bg-zinc-950 text-white border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-800 cursor-pointer"
                    >
                      NEW MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-black text-zinc-950 mb-1"
                    >
                      // INPUT_SENDER_NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Pratama"
                      className="w-full border-2 border-zinc-950 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:bg-white focus:outline-none transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-black text-zinc-950 mb-1"
                    >
                      // INPUT_EMAIL_ADDRESS *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full border-2 border-zinc-950 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:bg-white focus:outline-none transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-black text-zinc-950 mb-1"
                    >
                      // PAYLOAD_MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your inquiry, project scope, or discussion topic..."
                      className="w-full border-2 border-zinc-950 bg-zinc-50 px-3.5 py-2.5 text-sm text-zinc-950 placeholder:text-zinc-400 focus:bg-white focus:outline-none transition-colors resize-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="SEND"
                    className="w-full font-mono font-black text-sm py-3 px-6 bg-[#FACC15] text-zinc-950 border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <span>EXECUTE_SEND_MESSAGE</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
