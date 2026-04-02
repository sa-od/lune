import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block text-sm font-light tracking-[0.15em] uppercase transition-all duration-300 px-8 py-4";
  const variants = {
    primary:
      "bg-accent-gold text-bg-primary hover:bg-accent-brass",
    outline:
      "border border-accent-gold/40 text-accent-gold hover:border-accent-gold hover:bg-accent-gold/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
