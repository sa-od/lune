import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "LUNE was founded on a singular conviction — that fragrance, like light from a distant star, should arrive quietly and leave an indelible mark.",
};

const values = [
  {
    title: "Restraint",
    body: "We don't chase trends or fill shelves. Two fragrances, each one irreplaceable. Every molecule earned its place.",
  },
  {
    title: "Provenance",
    body: "We travel to the source — Kashmir for saffron, Grasse for rose, Florence for iris. The origin shapes the scent.",
  },
  {
    title: "Patience",
    body: "Orris aged three years. Sandalwood grown for thirty. We work on the timeline of the ingredients, not the market.",
  },
];

const milestones = [
  { year: "2021", text: "The idea: two fragrances, one constellation." },
  {
    year: "2022",
    text: "Eighteen months of formulation with a master perfumer in Grasse.",
  },
  { year: "2023", text: "Jupitor and Pluto revealed to the world." },
  {
    year: "2024",
    text: "Selected stockists across London, Paris, and Tokyo.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Brand",
            name: SITE.name,
            description: SITE.description,
            url: SITE.url,
          }),
        }}
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-bg-primary px-6 pt-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="mb-4 text-xs font-light tracking-[0.25em] uppercase text-accent-gold">
              Our Story
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1
              className="font-display font-light leading-tight text-text-light"
              style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
            >
              Born from stillness,
              <br />
              shaped by the stars.
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mx-auto mt-8 h-px w-16 bg-accent-gold/30" />
          </FadeIn>
        </div>
      </section>

      {/* ── Origin narrative ─────────────────────────── */}
      <section className="bg-bg-secondary px-6 py-24 sm:py-32 md:py-40">
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <p className="mb-8 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
              The Beginning
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base font-light leading-[1.8] text-bg-primary/75 sm:text-lg sm:leading-[1.9]">
              LUNE began with a question: what if a fragrance house created only
              what it believed the world truly needed? Not a collection for every
              season, not a shelf of options — but two compositions, each one
              essential, each one a world unto itself.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-base font-light leading-[1.8] text-bg-primary/75 sm:text-lg sm:leading-[1.9]">
              We spent eighteen months working alongside a master perfumer in
              Grasse, not to create something trendy, but something true. Every
              ingredient was sourced at its origin, every accord tested against a
              single standard: does this make you feel something you can&apos;t
              quite name?
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-6 text-base font-light leading-[1.8] text-bg-primary/75 sm:text-lg sm:leading-[1.9]">
              The result is Jupitor and Pluto — warmth and mystery, daylight and
              dark, two halves of the same celestial story. We don&apos;t create
              many fragrances. We create the right ones.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────── */}
      <section className="bg-bg-primary px-6 py-24 sm:py-32 md:py-40">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="mb-14 text-center sm:mb-20">
              <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-gold">
                What Guides Us
              </p>
              <h2 className="font-display text-3xl font-light text-text-light sm:text-4xl">
                Our Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.12}>
                <div className="rounded-sm border border-white/5 px-6 py-8 sm:px-7 sm:py-10">
                  <h3
                    className="font-display text-xl font-light text-accent-gold sm:text-2xl"
                    style={{ letterSpacing: "0.05em" }}
                  >
                    {v.title}
                  </h3>
                  <div className="my-5 h-px w-8 bg-white/10" />
                  <p className="text-sm font-light leading-[1.7] text-text-muted/70 sm:text-base sm:leading-[1.8]">
                    {v.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────── */}
      <section className="bg-bg-secondary px-6 py-24 sm:py-32 md:py-40">
        <div className="mx-auto max-w-xl">
          <FadeIn>
            <div className="mb-14 text-center sm:mb-20">
              <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
                Milestones
              </p>
              <h2 className="font-display text-3xl font-light text-bg-primary sm:text-4xl">
                Our Journey
              </h2>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-10 sm:gap-12">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 sm:gap-8">
                  <span className="shrink-0 font-display text-2xl font-light text-accent-brass/70 sm:text-3xl">
                    {m.year}
                  </span>
                  <div>
                    <div className="mb-3 h-px w-10 bg-accent-brass/30" />
                    <p className="text-sm font-light leading-[1.7] text-bg-primary/70 sm:text-base sm:leading-[1.8]">
                      {m.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Craftsmanship interlude ──────────────────── */}
      <section className="relative h-[50vh] min-h-[320px] overflow-hidden sm:h-[60vh]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0B1026 0%, #151228 40%, #1a1530 60%, #0B1026 100%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${0.5 + (i % 3) * 0.5}px`,
                height: `${0.5 + (i % 3) * 0.5}px`,
                opacity: 0.08 + (i % 4) * 0.04,
                top: `${(i * 15.7) % 100}%`,
                left: `${(i * 22.3) % 100}%`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <FadeIn>
            <blockquote
              className="max-w-md text-center font-display text-xl font-light leading-relaxed text-text-light/50 sm:max-w-lg sm:text-2xl md:text-3xl"
              style={{ letterSpacing: "0.03em" }}
            >
              Luxury is not what you add. It is what you refuse to compromise.
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="bg-bg-primary px-6 py-24 sm:py-32 md:py-40">
        <div className="mx-auto max-w-lg text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-light text-text-light sm:text-4xl">
              Discover the Collection
            </h2>
            <p className="mt-6 text-base font-light leading-relaxed text-text-muted">
              Two fragrances. Two worlds. One constellation.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <Button href="/jupitor">Jupitor</Button>
              <Button href="/pluto" variant="outline">
                Pluto
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
