"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { HERO_BIO, HERO_ROLES, RESUME_PATH } from "@/lib/data";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const activeText = useMemo(() => HERO_ROLES[index], [index]);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex === activeText.length) {
          setDeleting(true);
          return;
        }

        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((current) => (current + 1) % HERO_ROLES.length);
          return;
        }

        setSubIndex((current) => current + (deleting ? -1 : 1));
      },
      deleting ? 60 : 95
    );

    return () => clearTimeout(timeout);
  }, [activeText, deleting, subIndex]);

  return (
    <section id="home" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,255,0.18),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_38%)]" />
      <div className="absolute inset-0 -z-10 opacity-35 grid-overlay" />
      <div className="section-shell">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="accent-text mb-6 text-xs uppercase tracking-[0.25em]"
        >
          Full-Stack Developer · Hyderabad
        </motion.p>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-tight md:text-7xl"
        >
          Hi, I&apos;m Ajay Kote
        </motion.h1>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 h-10 font-mono text-lg text-accent md:text-2xl"
        >
          {activeText.slice(0, subIndex)}
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-accent align-middle md:h-8" />
        </motion.div>
        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-white/80"
        >
          {HERO_BIO}
        </motion.p>
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full border border-accent bg-accent px-6 py-3 font-mono text-sm font-medium text-black transition hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href={RESUME_PATH}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-mono text-sm transition hover:border-accent hover:text-accent"
          >
            <Download size={14} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
