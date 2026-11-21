import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            01 // Profile Overview
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-7 sm:p-9 lg:col-span-7"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[#2563EB]/20 px-3 py-1 text-xs font-semibold text-[#22D3EE]">
              <ShieldCheck className="h-4 w-4" />
              Career Objective
            </div>
            <p className="text-base leading-relaxed text-[#C2D4E8] sm:text-lg">
              {profile.objective}
            </p>

            <div className="mt-7">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/80">
                Core Engineering Focus
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {profile.focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#071426]/65 px-3.5 py-2.5 text-sm text-[#C2D4E8]"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#22D3EE]" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4 lg:col-span-5"
          >
            {profile.verifiedStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card flex flex-col justify-between rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
              >
                <span className="font-mono text-3xl font-extrabold text-[#22D3EE] sm:text-4xl">
                  {stat.value}
                </span>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                  <p className="mt-1 text-xs text-[#C2D4E8]">{stat.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
