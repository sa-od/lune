import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function BrandStory() {
  return (
    <section className="bg-bg-secondary px-6 py-32 md:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Text */}
        <div>
          <FadeIn direction="left">
            <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
              Our Story
            </p>
            <h2 className="font-display text-3xl font-light leading-snug text-bg-primary md:text-4xl">
              Born from stillness,
              <br />
              shaped by the stars.
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.15}>
            <p className="mt-8 text-base font-light leading-[1.8] text-bg-primary/70">
              LUNE was founded on a singular conviction: that fragrance, like
              light from a distant star, should arrive quietly and leave an
              indelible mark. We work with the world&apos;s rarest materials,
              not for exclusivity, but for truth &mdash; because the right
              molecule can unlock a memory, a place, a feeling you thought
              you&apos;d forgotten.
            </p>
          </FadeIn>
          <FadeIn direction="left" delay={0.3}>
            <div className="mt-10">
              <Button href="/about" variant="outline">
                Read Our Story
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Visual placeholder */}
        <FadeIn direction="right" delay={0.15}>
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #0B1026 0%, #1a1f3d 40%, #2a2040 100%)",
              }}
            />
            {/* Decorative constellation lines */}
            <svg
              className="absolute inset-0 h-full w-full opacity-20"
              viewBox="0 0 300 400"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="80" cy="120" r="2" fill="#C9A227" />
              <circle cx="200" cy="80" r="1.5" fill="#C9A227" />
              <circle cx="150" cy="200" r="2.5" fill="#C9A227" />
              <circle cx="220" cy="280" r="1.5" fill="#C9A227" />
              <circle cx="100" cy="320" r="2" fill="#C9A227" />
              <line
                x1="80" y1="120" x2="200" y2="80"
                stroke="#C9A227" strokeWidth="0.5"
              />
              <line
                x1="200" y1="80" x2="150" y2="200"
                stroke="#C9A227" strokeWidth="0.5"
              />
              <line
                x1="150" y1="200" x2="220" y2="280"
                stroke="#C9A227" strokeWidth="0.5"
              />
              <line
                x1="220" y1="280" x2="100" y2="320"
                stroke="#C9A227" strokeWidth="0.5"
              />
              <line
                x1="80" y1="120" x2="150" y2="200"
                stroke="#C9A227" strokeWidth="0.5"
              />
            </svg>
            {/* Label */}
            <div className="absolute inset-0 flex items-end p-8">
              <p
                className="font-display text-lg font-light text-text-light/40"
                style={{ letterSpacing: "0.15em" }}
              >
                LUNE
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
