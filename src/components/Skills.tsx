"use client";

import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="rounded-3xl border border-white/10 p-8 md:p-10 grid-overlay">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-10"
        >
          Skills
        </motion.h2>
        <div className="space-y-8">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{group.category}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 bg-black/40 px-4 py-2 font-mono text-sm text-white/90 transition hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
