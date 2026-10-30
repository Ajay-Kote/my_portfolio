"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-10"
      >
        Experience
      </motion.h2>
      <div className="space-y-6">
        {EXPERIENCE.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative rounded-3xl border border-white/10 bg-surface/30 p-8"
          >
            <div className="absolute left-0 top-8 h-20 w-[3px] bg-accent shadow-glow" />
            <p className="font-mono text-sm text-accent">{item.duration}</p>
            <h3 className="mt-3 font-display text-2xl">{item.company}</h3>
            <p className="font-mono text-sm text-white/75">{item.role}</p>
            <ul className="mt-6 space-y-3 text-white/85">
              {item.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
