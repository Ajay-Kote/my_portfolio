"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title mb-8"
      >
        Let&apos;s build something.
      </motion.h2>
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <p className="text-white/70">{CONTACT.location}</p>
          <a href={`mailto:${CONTACT.email}`} className="block text-white/90 hover:text-accent">
            {CONTACT.email}
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="block text-white/70 hover:text-accent">
            linkedin.com/in/ajay-kote-03717b290
          </a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="block text-white/70 hover:text-accent">
            github.com/Ajay-Kote
          </a>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl border border-white/10 bg-surface/40 p-6"
        >
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-accent"
          />
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-accent"
          />
          <textarea
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Message"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 outline-none transition focus:border-accent"
          />
          <button
            type="submit"
            className="rounded-full border border-accent bg-accent px-6 py-3 font-mono text-sm font-medium text-black transition hover:shadow-glow"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
