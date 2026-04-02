"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="bg-bg-primary px-6 py-32 md:py-40">
      <div className="mx-auto max-w-xl text-center">
        <FadeIn>
          <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-gold">
            Stay Connected
          </p>
          <h2 className="font-display text-3xl font-light text-text-light md:text-4xl">
            Join the Constellation
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-base font-light leading-relaxed text-text-muted">
            Receive occasional letters on new releases, the art of perfumery,
            and celestial inspirations.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          {submitted ? (
            <div className="mt-10">
              <p className="text-sm font-light tracking-[0.1em] text-accent-gold">
                Welcome to the constellation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-b border-white/15 bg-transparent px-1 pb-3 text-sm font-light text-text-light placeholder:text-text-muted/40 focus:border-accent-gold/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="text-sm font-light tracking-[0.15em] uppercase text-bg-primary bg-accent-gold px-8 py-3 transition-all duration-300 hover:bg-accent-brass sm:self-end"
              >
                Subscribe
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
