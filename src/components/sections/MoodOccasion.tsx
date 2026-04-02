import FadeIn from "@/components/animations/FadeIn";
import type { Fragrance } from "@/lib/data";

export default function MoodOccasion({
  fragrance,
}: {
  fragrance: Fragrance;
}) {
  return (
    <section className="bg-bg-primary px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-gold">
              When to Wear
            </p>
            <h2 className="font-display text-3xl font-light text-text-light sm:text-4xl">
              Mood &amp; Occasion
            </h2>
          </div>
        </FadeIn>

        {/* Two cards stacked on mobile, side-by-side on md+ */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <FadeIn delay={0.1}>
            <div className="rounded-sm border border-white/5 px-6 py-8 sm:px-8 sm:py-10">
              <span
                className="mb-4 block text-xs font-light tracking-[0.2em] uppercase"
                style={{ color: fragrance.palette.primary }}
              >
                The Mood
              </span>
              <p className="text-base font-light leading-[1.8] text-text-muted">
                {fragrance.mood}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-sm border border-white/5 px-6 py-8 sm:px-8 sm:py-10">
              <span
                className="mb-4 block text-xs font-light tracking-[0.2em] uppercase"
                style={{ color: fragrance.palette.primary }}
              >
                The Occasion
              </span>
              <p className="text-base font-light leading-[1.8] text-text-muted">
                {fragrance.occasion}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
