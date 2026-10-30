"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { ACHIEVEMENTS, CERTIFICATIONS, LEETCODE } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="achievements" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-10"
      >
        Certifications &amp; Achievements
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-surface/35 p-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Certifications</p>
          <ul className="mt-5 space-y-3">
            {CERTIFICATIONS.map((item) => (
              <li key={item} className="text-white/85">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-surface/35 p-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Achievements</p>
          <ul className="mt-5 space-y-3">
            {ACHIEVEMENTS.map((item) => (
              <li key={item} className="text-white/85">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 rounded-3xl border border-[#FFA116]/40 bg-[#FFA116]/10 p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#FFA116]">LeetCode</p>
            <p className="mt-3 text-white/90">{LEETCODE.streak}</p>
            <p className="mt-1 text-white/90">{LEETCODE.rating}</p>
          </div>
          <Flame className="text-[#FFA116]" size={20} />
        </div>
        <a
          href={LEETCODE.profile}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-[#FFA116] hover:underline"
        >
          View Profile <ArrowRight size={14} />
        </a>
      </motion.article>
    </section>
  );
}
