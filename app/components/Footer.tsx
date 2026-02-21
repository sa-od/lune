"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/app/lib/gsap";
import Logo from "./Logo";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content > *", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-20 sm:py-28 px-6 sm:px-10"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, #050510 20%, #0a0a2e 100%)",
      }}
    >
      <div className="footer-content max-w-2xl mx-auto text-center">
        {/* Brand */}
        <div className="flex justify-center mb-5">
          <Logo
            showText
            color="#d4a853"
            className="w-[140px] sm:w-[170px] glow-gold opacity-80"
          />
        </div>
        <p className="text-white/25 text-[0.65rem] tracking-[0.3em] uppercase mb-12">
          Cosmic Fragrances for the Modern Soul
        </p>

        {/* Email signup */}
        <form onSubmit={handleSubmit} className="mb-14">
          <p className="text-white/40 text-xs sm:text-sm mb-5 tracking-wide">
            Be the first to experience new universes
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="liquid-input flex-1 px-5 py-3 text-sm tracking-wider rounded-none"
              required
            />
            <button
              type="submit"
              className="cta-button !px-8 !py-3 !text-[0.65rem] whitespace-nowrap"
            >
              {submitted ? "Welcome" : "Join"}
            </button>
          </div>
        </form>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-8 sm:gap-10 mb-14">
          {[
            {
              name: "Instagram",
              path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
            },
            {
              name: "X",
              path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
            },
          ].map((social) => (
            <a
              key={social.name}
              href="#"
              className="group relative text-white/25 hover:text-cosmic-gold transition-colors duration-300"
              aria-label={social.name}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d={social.path} />
              </svg>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[0.5rem] tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-cosmic-gold/40 uppercase">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* Contact email */}
        <a
          href="mailto:hello@shoplune.in"
          className="inline-block text-white/30 text-xs tracking-[0.15em] hover:text-cosmic-gold/60 transition-colors duration-300 mb-14"
        >
          hello@shoplune.in
        </a>

        {/* Bottom */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.6rem] tracking-[0.2em] text-white/15 uppercase">
          <span>&copy; 2025 Lune. All rights reserved.</span>
          <a
            href="https://shoplune.in"
            className="hover:text-cosmic-gold/40 transition-colors"
          >
            shoplune.in
          </a>
        </div>
      </div>
    </footer>
  );
}
