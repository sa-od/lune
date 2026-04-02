"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/Button";

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg-primary px-6">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,162,39,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Star-field dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              top: `${(i * 17.3) % 100}%`,
              left: `${(i * 23.7) % 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-6 text-xs font-light tracking-[0.25em] uppercase text-accent-gold"
        >
          Celestial Fragrances
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="font-display text-6xl font-light leading-none text-text-light md:text-8xl lg:text-9xl"
          style={{ letterSpacing: "0.15em" }}
        >
          LUNE
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease }}
          className="my-8 h-px w-24 origin-center bg-accent-gold/40"
        />

        {/* Fragrance names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          className="flex items-center gap-6 text-sm font-light tracking-[0.2em] uppercase text-text-muted"
        >
          <span>Jupitor</span>
          <span className="h-3 w-px bg-accent-gold/30" aria-hidden="true" />
          <span>Pluto</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className="mt-8 max-w-sm text-center text-base font-light leading-relaxed text-text-muted"
        >
          We don&apos;t create many fragrances. We create the right ones.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease }}
          className="mt-10"
        >
          <Button href="#collection">Discover the Collection</Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, ease }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-light tracking-[0.2em] uppercase text-text-muted/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-text-muted/30"
        />
      </motion.div>
    </section>
  );
}
