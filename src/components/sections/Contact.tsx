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
  Terminal,
} from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/SocialIcons';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Generate mailto link
    const mailtoUrl = `mailto:danusaktiaditya@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
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
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="CONNECT"
                    className="flex items-center justify-between p-3 border-2 border-zinc-950 bg-zinc-50 hover:bg-yellow-300 transition-colors text-xs text-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white border-2 border-zinc-950">
                        {getIcon(item.iconName)}
                      </div>
                      <div>
                        <span className="font-mono font-black text-zinc-950 block">{item.label}</span>
                        <span className="text-zinc-600 text-[11px] font-mono">{item.handle}</span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-zinc-950" />
                  </a>
                ))}
              </div>
            </div>

            {/* Location & Timezone Note */}
            <div className="border-2 border-zinc-950 bg-zinc-950 text-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2 font-mono">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-800">
                <span className="text-yellow-400 font-bold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" />
                  AVAILABILITY_STATUS
                </span>
                <span className="text-emerald-400 font-bold">READY_TO_SHIP</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-1">
                Currently open for Frontend Developer roles, web product projects, and high-impact Software Engineering internships.
              </p>
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
                <div className="border-2 border-zinc-950 bg-emerald-100 p-6 text-center space-y-3 font-mono">
                  <CheckCircle2 className="h-10 w-10 text-emerald-800 mx-auto" />
                  <h4 className="text-base font-black text-emerald-950">
                    TRANSMISSION INITIALIZED!
                  </h4>
                  <p className="text-xs text-emerald-900 max-w-sm mx-auto font-sans leading-relaxed">
                    Your email client has been prepared with your message payload. You can also write directly to <strong className="font-mono bg-white px-1 border border-zinc-950">danusaktiaditya@gmail.com</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-4 py-2 font-mono font-bold text-xs bg-white text-zinc-950 border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-zinc-100 cursor-pointer"
                  >
                    SEND_ANOTHER_PAYLOAD
                  </button>
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
