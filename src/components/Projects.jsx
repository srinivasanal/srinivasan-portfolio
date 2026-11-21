import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { cloudProjects, aiFeaturedProject } from '../data/portfolioData';

function ProjectCard({ project, onOpen, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
      }}
      className="glass-card group flex flex-col overflow-hidden rounded-2xl transition-transform duration-200 will-change-transform"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#22D3EE]/15 bg-[#071426]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border border-[#22D3EE]/35 bg-[#071426]/85 px-3 py-1 font-mono text-[11px] font-medium text-[#22D3EE] backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-white transition group-hover:text-[#22D3EE]">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#C2D4E8]">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#2563EB]/40 bg-[#2563EB]/15 px-2.5 py-1 font-mono text-[11px] text-[#93C5FD]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22D3EE] transition hover:text-white"
          >
            <Layers className="h-4 w-4" />
            View Project Details
          </button>

        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
            03 // Cloud &amp; DevOps Architecture
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#C2D4E8] sm:text-base">
            Hands-on AWS cloud migrations, multi-tier deployments, and automated Jenkins CI/CD pipelines.
          </p>
        </motion.div>

        {/* Primary 4 Cloud & DevOps Projects */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {cloudProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
          ))}
        </div>

        {/* Separate Featured AI/ML Final-Year Project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/35 bg-[#102C50]/80 px-4 py-1.5 font-mono text-xs font-semibold text-[#22D3EE]">
            <Sparkles className="h-3.5 w-3.5" />
            {aiFeaturedProject.badge}
          </div>

          <div className="glass-card grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-12">
            <div className="relative aspect-[16/9] border-b border-[#22D3EE]/15 bg-[#071426] lg:col-span-5 lg:aspect-auto lg:border-b-0 lg:border-r">
              <img
                src={aiFeaturedProject.image}
                alt={aiFeaturedProject.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-7 sm:p-8 lg:col-span-7">
              <div>
                <span className="font-mono text-xs text-[#22D3EE]">{aiFeaturedProject.category}</span>
                <h3 className="mt-2 text-2xl font-bold text-white">{aiFeaturedProject.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#C2D4E8] sm:text-base">
                  {aiFeaturedProject.shortDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {aiFeaturedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#22D3EE]/30 bg-[#071426]/80 px-3 py-1 font-mono text-xs text-[#22D3EE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setSelected(aiFeaturedProject)}
                  className="btn-glow inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white"
                >
                  <Layers className="h-4 w-4" />
                  Inspect Project Details
                </button>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#040B16]/85 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-[#22D3EE]">{selected.category}</span>
                  <h3 id="modal-project-title" className="mt-1 text-2xl font-bold text-white">
                    {selected.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                  className="rounded-lg border border-white/15 bg-[#071426] p-2 text-[#C2D4E8] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-5 overflow-hidden rounded-xl border border-[#22D3EE]/20 bg-[#071426]">
                <img src={selected.image} alt={selected.title} className="h-56 w-full object-cover" />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#C2D4E8]">
                {selected.architectureSummary}
              </p>

              <div className="mt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Key Implementation Details
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {selected.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#C2D4E8]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selected.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-[#2563EB]/40 bg-[#2563EB]/20 px-2.5 py-1 font-mono text-xs text-[#93C5FD]"
                  >
                    {tech}
                  </span>
                ))}
              </div>


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
