import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a sample, find a stockist near you, or reach out to LUNE Perfumes directly.",
};

const stockists = [
  {
    city: "London",
    name: "Liberty London",
    address: "Regent St, Carnaby, London W1B 5AH",
  },
  {
    city: "Paris",
    name: "Le Bon Marché",
    address: "24 Rue de Sèvres, 75007 Paris",
  },
  {
    city: "Tokyo",
    name: "Isetan Shinjuku",
    address: "3-14-1 Shinjuku, Shinjuku City, Tokyo",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-bg-primary px-6 pt-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(201,162,39,0.04) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-xl text-center">
          <FadeIn>
            <p className="mb-4 text-xs font-light tracking-[0.25em] uppercase text-accent-gold">
              Get in Touch
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1
              className="font-display font-light leading-tight text-text-light"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4rem)" }}
            >
              We&apos;d love to hear from you.
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-base font-light leading-relaxed text-text-muted">
              Request a sample, find a stockist, or simply say hello.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────────── */}
      <section className="bg-bg-secondary px-6 py-24 sm:py-32 md:py-40">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:gap-12 lg:gap-20">
          {/* Form */}
          <FadeIn direction="left">
            <div>
              <p className="mb-2 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
                Inquire
              </p>
              <h2 className="font-display text-2xl font-light text-bg-primary sm:text-3xl">
                Request a Sample
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed text-bg-primary/60">
                Tell us which fragrance you&apos;re drawn to and we&apos;ll
                arrange a complimentary sample.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </FadeIn>

          {/* Info column */}
          <FadeIn direction="right" delay={0.1}>
            <div className="flex flex-col gap-12">
              {/* Direct contact */}
              <div>
                <p className="mb-2 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
                  Direct
                </p>
                <h3 className="font-display text-xl font-light text-bg-primary sm:text-2xl">
                  Reach Us
                </h3>
                <div className="mt-5 flex flex-col gap-3 text-sm font-light leading-relaxed text-bg-primary/65">
                  <p>hello@luneperfumes.com</p>
                  <p>+44 (0) 20 7946 0958</p>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="mb-2 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
                  Follow
                </p>
                <div className="mt-3 flex gap-6 text-sm font-light text-bg-primary/65">
                  <span>Instagram</span>
                  <span>Pinterest</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Stockists ────────────────────────────────── */}
      <section className="bg-bg-primary px-6 py-24 sm:py-32 md:py-40">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-14 text-center sm:mb-20">
              <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-gold">
                Stockists
              </p>
              <h2 className="font-display text-3xl font-light text-text-light sm:text-4xl">
                Find Near You
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {stockists.map((s, i) => (
              <FadeIn key={s.city} delay={i * 0.12}>
                <div className="rounded-sm border border-white/5 px-6 py-8 sm:px-7 sm:py-10">
                  <span className="text-[11px] font-light tracking-[0.2em] uppercase text-accent-gold/70 sm:text-xs">
                    {s.city}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-light text-text-light sm:text-2xl">
                    {s.name}
                  </h3>
                  <div className="my-4 h-px w-8 bg-white/10" />
                  <p className="text-sm font-light leading-relaxed text-text-muted/60">
                    {s.address}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
