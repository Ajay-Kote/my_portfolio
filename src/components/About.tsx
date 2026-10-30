"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ABOUT_STATS, ABOUT_TEXT, EDUCATION } from "@/lib/data";

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 42;
    const step = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Number.isInteger(end)
        ? Math.round(end * eased)
        : Number((end * eased).toFixed(1));
      setValue(nextValue);
      if (frame < totalFrames) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, isInView]);

  return (
    <div ref={ref} className="font-display text-3xl font-semibold md:text-4xl">
      {value}
      <span className="font-mono text-accent">{suffix}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-12"
      >
        About
      </motion.h2>
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-white/80"
          >
            {ABOUT_TEXT}
          </motion.p>
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-surface/40 p-5"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Education</p>
            <h3 className="mt-3 font-display text-xl">{EDUCATION.degree}</h3>
            <p className="mt-1 text-white/80">{EDUCATION.school}</p>
            <p className="mt-2 font-mono text-sm text-white/65">
              {EDUCATION.duration} · {EDUCATION.gpa}
            </p>
          </motion.article>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {ABOUT_STATS.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-white/10 bg-surface/40 p-4">
              <CountUp end={stat.value} suffix={stat.suffix} />
              <p className="mt-2 font-mono text-sm text-white/70">{stat.label}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
