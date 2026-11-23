import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Terminal } from 'lucide-react';
import CloudScene from '../three/CloudScene';
import { profile } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-28"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#2563EB]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-[#22D3EE]/15 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#102C50]/70 px-4 py-1.5 font-mono text-xs text-[#22D3EE]">
            <Terminal className="h-3.5 w-3.5" />
            <span>AWS Cloud Infrastructure • CI/CD Automation</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 bg-gradient-to-r from-[#22D3EE] via-[#60A5FA] to-[#2563EB] bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#C2D4E8] sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
            >
              Explore My Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href={profile.resumePath}
              download="Srinivasan_Cloud_DevOps_Resume.pdf"
              className="btn-download-glow group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-[#C2D4E8] transition hover:border-[#22D3EE]/40 hover:text-white"
            >
              <Mail className="h-4 w-4 text-[#22D3EE]" />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-6"
        >
          <CloudScene />
        </motion.div>
      </div>
    </section>
  );
}