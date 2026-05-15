"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

function CursorDot() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let frame = 0;
    const mouse = { x: -100, y: -100 };
    const dot = { x: -100, y: -100 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const animate = () => {
      dot.x += (mouse.x - dot.x) * 0.18;
      dot.y += (mouse.y - dot.y) * 0.18;
      setPosition({ x: dot.x, y: dot.y });
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[60] hidden h-2.5 w-2.5 rounded-full bg-accent shadow-glow md:block"
      style={{ transform: `translate(${position.x - 5}px, ${position.y - 5}px)` }}
    />
  );
}

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
      }}
      className="relative"
    >
      <CursorDot />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </motion.main>
  );
}
