"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="font-display text-xl font-bold tracking-tight">
          AK
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="font-mono text-sm text-white/80 transition hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-md border border-white/15 p-2 text-white/80 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <ul className="space-y-1 border-t border-white/10 bg-black/90 px-6 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-sm text-white/85"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.header>
  );
}
