import FadeIn from "@/components/animations/FadeIn";

export default function Philosophy() {
  return (
    <section className="bg-bg-secondary px-6 py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="mb-6 text-xs font-light tracking-[0.2em] uppercase text-accent-brass">
            Our Philosophy
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <blockquote className="font-display text-3xl font-light leading-snug text-bg-primary md:text-4xl lg:text-5xl">
            Every scent is a world. Ours are born from the cosmos &mdash;
            shaped by light, shadow, and the space between.
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mx-auto mt-10 h-px w-16 bg-accent-brass/40" />
        </FadeIn>
      </div>
    </section>
  );
}
