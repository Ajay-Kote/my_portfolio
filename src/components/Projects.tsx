"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";
import { CSSProperties, MouseEvent, useState } from "react";
import { PROJECTS } from "@/lib/data";

type TiltState = {
  rotateX: number;
  rotateY: number;
};

function tiltStyle(tilt: TiltState): CSSProperties {
  return {
    transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
  };
}

export default function Projects() {
  const [tilts, setTilts] = useState<Record<string, TiltState>>({});

  const handleMove = (name: string, event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) * 2 - 1) * 4;
    const rotateX = -((y / rect.height) * 2 - 1) * 4;
    setTilts((prev) => ({ ...prev, [name]: { rotateX, rotateY } }));
  };

  const handleLeave = (name: string) => {
    setTilts((prev) => ({ ...prev, [name]: { rotateX: 0, rotateY: 0 } }));
  };

  return (
    <section id="projects" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-10"
      >
        Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project, index) => {
          const Icon = project.icon;
          const tilt = tilts[project.name] ?? { rotateX: 0, rotateY: 0 };
          return (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onMouseMove={(event) => handleMove(project.name, event)}
              onMouseLeave={() => handleLeave(project.name)}
              style={tiltStyle(tilt)}
              className="group relative rounded-3xl border border-white/10 bg-surface/40 p-7 transition duration-300 hover:border-accent/50 hover:shadow-glow"
            >
              <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-accent/0 shadow-[0_0_0_rgba(0,245,255,0)] transition-all duration-300 group-hover:bg-accent/90 group-hover:shadow-[0_0_14px_rgba(0,245,255,0.75)]" />
              {project.liveUrl ? (
                <span className="absolute right-5 top-5 rounded-full bg-emerald-500 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.16em] text-white">
                  LIVE
                </span>
              ) : null}
              <div className="mb-5 inline-flex rounded-xl border border-accent/30 p-3 text-accent">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-2xl">{project.name}</h3>
              <p className="mt-3 text-sm text-white/75">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 font-mono text-xs text-white/85 transition hover:border-accent hover:text-accent"
                >
                  <Github size={14} />
                  GitHub
                </a>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-4 py-2 font-mono text-xs text-accent transition hover:shadow-glow"
                  >
                    <ExternalLink size={14} />
                    <span className="text-emerald-400">●</span>
                    Live Demo ↗
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    title="Coming Soon"
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-xs text-white/50"
                  >
                    <Lock size={14} />
                    Coming Soon
                  </button>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
