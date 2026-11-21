import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Workflow, Terminal, Code2, Database, Wrench, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Cloud,
  Workflow,
  Terminal,
  Code2,
  Database,
  Wrench,
  Sparkles
};

function TiltSkillCard({ category, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const Icon = iconMap[category.icon] || Cloud;

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
      }}
      className="glass-card rounded-2xl p-6 transition-transform duration-200 will-change-transform"
    >
      <div className="mb-5 flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-blueGlow`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">{category.title}</h3>
          <span className="font-mono text-[11px] text-[#22D3EE]">{category.items.length} Skills</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.items.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-[#22D3EE]/20 bg-[#071426]/80 px-3 py-1.5 text-xs font-medium text-[#C2D4E8] transition hover:border-[#22D3EE]/60 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            02 // Capabilities &amp; Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <TiltSkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
