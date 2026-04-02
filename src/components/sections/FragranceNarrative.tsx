import FadeIn from "@/components/animations/FadeIn";
import type { Fragrance } from "@/lib/data";

export default function FragranceNarrative({
  fragrance,
}: {
  fragrance: Fragrance;
}) {
  return (
    <section className="bg-bg-secondary px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <p className="mb-8 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
            The Story
          </p>
        </FadeIn>
        {fragrance.narrative.map((paragraph, i) => (
          <FadeIn key={i} delay={0.1 * (i + 1)}>
            <p className="mt-6 text-base font-light leading-[1.8] text-bg-primary/75 first:mt-0 sm:text-lg sm:leading-[1.9]">
              {paragraph}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
