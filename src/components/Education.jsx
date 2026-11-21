import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            06 // Academic Background
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education
          </h2>
        </motion.div>

        <div className="space-y-5">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card flex flex-col justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#22D3EE]/30 bg-[#102C50] text-[#22D3EE]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-[#C2D4E8]">{edu.institution}</p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-3 self-start sm:self-center">
                <span className="rounded-lg border border-[#2563EB]/45 bg-[#2563EB]/20 px-3.5 py-1.5 font-mono text-xs font-semibold text-white">
                  {edu.score}
                </span>
                <span className="rounded-lg border border-[#22D3EE]/30 bg-[#071426] px-3 py-1.5 font-mono text-xs text-[#22D3EE]">
                  {edu.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
