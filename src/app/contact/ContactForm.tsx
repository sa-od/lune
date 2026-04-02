"use client";

import { useState } from "react";

const fragranceOptions = ["Jupitor", "Pluto", "Both"] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-accent-brass/20 bg-white/40 px-6 py-10 text-center">
        <p className="font-display text-xl font-light text-bg-primary">
          Thank you for your inquiry.
        </p>
        <p className="mt-3 text-sm font-light text-bg-primary/60">
          We&apos;ll be in touch within 48 hours.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full border-b border-bg-primary/15 bg-transparent pb-3 pt-1 text-sm font-light text-bg-primary placeholder:text-bg-primary/30 focus:border-accent-brass/50 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-[11px] font-light tracking-[0.15em] uppercase text-bg-primary/50"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Your name"
          className={inputBase}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-[11px] font-light tracking-[0.15em] uppercase text-bg-primary/50"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="your@email.com"
          className={inputBase}
        />
      </div>

      <div>
        <label
          htmlFor="contact-fragrance"
          className="mb-2 block text-[11px] font-light tracking-[0.15em] uppercase text-bg-primary/50"
        >
          Fragrance Interest
        </label>
        <select
          id="contact-fragrance"
          required
          defaultValue=""
          className={`${inputBase} cursor-pointer bg-transparent`}
        >
          <option value="" disabled>
            Select a fragrance
          </option>
          {fragranceOptions.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[11px] font-light tracking-[0.15em] uppercase text-bg-primary/50"
        >
          Message (optional)
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Tell us what you're looking for..."
          className={`${inputBase} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-2 self-start bg-accent-gold px-8 py-4 text-sm font-light tracking-[0.15em] uppercase text-bg-primary transition-all duration-300 hover:bg-accent-brass"
      >
        Send Inquiry
      </button>
    </form>
  );
}
