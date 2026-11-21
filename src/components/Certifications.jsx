import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            05 // Verified Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 transition duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/25 text-[#22D3EE]">
                    <Award className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-[#22D3EE]/35 bg-[#071426]/80 px-3 py-1 font-mono text-xs font-semibold text-[#22D3EE]">
                    {cert.year}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">{cert.title}</h3>
                <p className="mt-1 text-xs font-medium text-[#22D3EE]">{cert.subtitle}</p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-sm text-[#C2D4E8]">
                <Building2 className="h-4 w-4 shrink-0 text-[#2563EB]" />
                <span>{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
