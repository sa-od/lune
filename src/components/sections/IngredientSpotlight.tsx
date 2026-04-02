import FadeIn from "@/components/animations/FadeIn";
import type { Fragrance } from "@/lib/data";

export default function IngredientSpotlight({
  fragrance,
}: {
  fragrance: Fragrance;
}) {
  return (
    <section className="bg-bg-secondary px-6 py-24 sm:py-32 md:py-40">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-4 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
              Provenance
            </p>
            <h2 className="font-display text-3xl font-light text-bg-primary sm:text-4xl">
              Ingredient Spotlight
            </h2>
          </div>
        </FadeIn>

        {/* Stacked cards on mobile, row on md+ */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {fragrance.ingredients.map((ingredient, i) => (
            <FadeIn key={ingredient.name} delay={i * 0.12}>
              <div className="flex h-full flex-col rounded-sm border border-bg-primary/10 bg-white/50 px-6 py-8 sm:px-7 sm:py-9">
                {/* Name */}
                <h3 className="font-display text-xl font-light text-bg-primary sm:text-2xl">
                  {ingredient.name}
                </h3>

                {/* Origin tag */}
                <p
                  className="mt-2 text-[11px] font-light tracking-[0.15em] uppercase sm:text-xs"
                  style={{ color: fragrance.palette.primary }}
                >
                  {ingredient.origin}
                </p>

                {/* Divider */}
                <div
                  className="my-5 h-px w-10"
                  style={{
                    backgroundColor: `${fragrance.palette.primary}40`,
                  }}
                />

                {/* Description */}
                <p className="text-sm font-light leading-[1.7] text-bg-primary/65 sm:text-base sm:leading-[1.8]">
                  {ingredient.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
