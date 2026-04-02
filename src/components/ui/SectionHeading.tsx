interface SectionHeadingProps {
  eyebrow?: string;
  children: React.ReactNode;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  children,
  centered = true,
  dark = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {eyebrow && (
        <p
          className={`mb-4 text-xs font-light tracking-[0.2em] uppercase ${
            dark ? "text-accent-gold" : "text-accent-brass"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-light leading-tight md:text-4xl lg:text-5xl ${
          dark ? "text-text-light" : "text-bg-primary"
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
