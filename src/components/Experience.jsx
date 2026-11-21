import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { internships } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            04 // Professional Journey
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Internship Experience
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-[#2563EB]/45 pl-7 sm:pl-10">
          {internships.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[39px] top-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#22D3EE] bg-[#071426] shadow-glow sm:-left-[51px]">
                <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
              </span>

              <div className="glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-[#22D3EE]">
                      <Briefcase className="h-4 w-4" />
                      {item.company}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#071426]/80 px-3.5 py-1.5 font-mono text-xs text-[#C2D4E8]">
                    <Calendar className="h-3.5 w-3.5 text-[#22D3EE]" />
                    <span>
                      {item.year} • {item.duration}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-3">
                  {item.responsibilities.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#C2D4E8]">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2563EB]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
