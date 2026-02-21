"use client";

interface LogoProps {
  className?: string;
  showText?: boolean;
  color?: string;
}

export default function Logo({
  className = "",
  showText = true,
  color = "currentColor",
}: LogoProps) {
  if (!showText) {
    return (
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Lune"
      >
        {/* Crescent moon */}
        <path
          d="M28 4 C15.5 4, 5 14.5, 5 27 C5 39.5, 15.5 50, 28 50 C19.5 46, 13.5 37.5, 13.5 27 C13.5 16.5, 19.5 8, 28 4 Z"
          fill={color}
        />
        {/* Star accent */}
        <path
          d="M38 11 L39.4 15.2 L43.8 16.5 L39.4 17.8 L38 22 L36.6 17.8 L32.2 16.5 L36.6 15.2 Z"
          fill={color}
          opacity="0.6"
        />
        {/* Tiny star */}
        <circle cx="43" cy="10" r="1" fill={color} opacity="0.35" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 280 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lune"
    >
      {/* Crescent moon */}
      <path
        d="M26 2 C14.5 2, 4 12, 4 25 C4 38, 14.5 48, 26 48 C18 44.5, 12.5 35.5, 12.5 25 C12.5 14.5, 18 5.5, 26 2 Z"
        fill={color}
      />
      {/* Star accent */}
      <path
        d="M35 9 L36.2 12.6 L40 13.8 L36.2 15 L35 18.6 L33.8 15 L30 13.8 L33.8 12.6 Z"
        fill={color}
        opacity="0.55"
      />
      {/* Tiny star */}
      <circle cx="40.5" cy="8" r="0.9" fill={color} opacity="0.3" />

      {/* L */}
      <path
        d="M70 12 L73 12 L73 38 L88 38 L88 41 L70 41 Z"
        fill={color}
      />
      {/* U */}
      <path
        d="M96 12 L99 12 L99 33 C99 37.5 101 40 107 40 C113 40 115 37.5 115 33 L115 12 L118 12 L118 33.5 C118 39.5 114 43 107 43 C100 43 96 39.5 96 33.5 Z"
        fill={color}
      />
      {/* N */}
      <path
        d="M128 41 L128 12 L131.5 12 L150 36.5 L150 12 L153 12 L153 41 L149.5 41 L131 16.5 L131 41 Z"
        fill={color}
      />
      {/* E */}
      <path
        d="M164 12 L183 12 L183 15 L167 15 L167 25 L181 25 L181 28 L167 28 L167 38 L183.5 38 L183.5 41 L164 41 Z"
        fill={color}
      />

      {/* Thin separator line between icon and text */}
      <line
        x1="54"
        y1="10"
        x2="54"
        y2="42"
        stroke={color}
        strokeWidth="0.5"
        opacity="0.2"
      />
    </svg>
  );
}
