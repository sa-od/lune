"use client";

import { forwardRef } from "react";

interface PerfumeBottleProps {
  variant: "jupiter" | "pluto";
  className?: string;
}

const PerfumeBottle = forwardRef<SVGSVGElement, PerfumeBottleProps>(
  ({ variant, className = "" }, ref) => {
    const isJupiter = variant === "jupiter";

    const colors = isJupiter
      ? {
          cap: "#2a1a0a",
          capHighlight: "#5a3a1a",
          glowColor: "#e8a317",
          label: "#d4a853",
        }
      : {
          cap: "#0a1a2a",
          capHighlight: "#1a3a5a",
          glowColor: "#00d4aa",
          label: "#00d4aa",
        };

    const id = isJupiter ? "J" : "P";

    return (
      <svg
        ref={ref}
        viewBox="0 0 140 320"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`bodyGrad${id}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={isJupiter ? "#1a1008" : "#081a1a"}
            />
            <stop
              offset="35%"
              stopColor={isJupiter ? "#2a1a0a" : "#0a2a2a"}
            />
            <stop
              offset="65%"
              stopColor={isJupiter ? "#1a1008" : "#081a1a"}
            />
            <stop
              offset="100%"
              stopColor={isJupiter ? "#0d0804" : "#040d0d"}
            />
          </linearGradient>

          <linearGradient
            id={`neckGrad${id}`}
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor={isJupiter ? "#2a1a0a" : "#0a2a2a"}
            />
            <stop
              offset="50%"
              stopColor={isJupiter ? "#3a2a15" : "#153a3a"}
            />
            <stop
              offset="100%"
              stopColor={isJupiter ? "#2a1a0a" : "#0a2a2a"}
            />
          </linearGradient>

          <linearGradient
            id={`liquidGrad${id}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={isJupiter ? "#e8a317" : "#00d4aa"}
              stopOpacity="0.5"
            />
            <stop
              offset="50%"
              stopColor={isJupiter ? "#c4651a" : "#0066cc"}
              stopOpacity="0.65"
            />
            <stop
              offset="100%"
              stopColor={isJupiter ? "#8b4513" : "#003366"}
              stopOpacity="0.8"
            />
          </linearGradient>

          <linearGradient
            id={`reflect${id}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.12" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter
            id={`glow${id}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feFlood floodColor={colors.glowColor} floodOpacity="0.25" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ground glow */}
        <ellipse
          cx="70"
          cy="292"
          rx="50"
          ry="10"
          fill={colors.glowColor}
          opacity="0.12"
          filter={`url(#glow${id})`}
        />

        {/* Cap ornament */}
        <rect
          x="58"
          y="10"
          width="24"
          height="8"
          rx="4"
          fill={colors.capHighlight}
        />

        {/* Cap */}
        <rect
          x="48"
          y="18"
          width="44"
          height="38"
          rx="5"
          fill={colors.cap}
        />
        <rect
          x="48"
          y="18"
          width="20"
          height="38"
          rx="5"
          fill={`url(#reflect${id})`}
        />

        {/* Neck */}
        <path
          d="M54 56 L54 82 Q54 87 50 92 L50 97 L90 97 L90 92 Q86 87 86 82 L86 56 Z"
          fill={`url(#neckGrad${id})`}
        />

        {/* Neck ring */}
        <rect
          x="46"
          y="95"
          width="48"
          height="4"
          rx="2"
          fill={colors.label}
          opacity="0.5"
        />

        {/* Body */}
        <path
          d="M32 99 Q28 102 26 117 L26 272 Q26 288 42 292 L98 292 Q114 288 114 272 L114 117 Q112 102 108 99 Z"
          fill={`url(#bodyGrad${id})`}
        />

        {/* Left glass edge reflection */}
        <path
          d="M34 102 Q30 107 28 120 L28 267 Q28 280 40 286 L42 286 Q30 280 30 267 L30 120 Q32 107 36 102 Z"
          fill="white"
          opacity="0.06"
        />

        {/* Liquid */}
        <path
          d="M34 145 L34 268 Q34 283 47 288 L93 288 Q106 283 106 268 L106 145 Z"
          fill={`url(#liquidGrad${id})`}
        />

        {/* Liquid surface */}
        <ellipse cx="70" cy="145" rx="36" ry="5" fill="white" opacity="0.08" />

        {/* Glass reflections */}
        <line
          x1="42"
          y1="112"
          x2="42"
          y2="278"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.05"
        />
        <line
          x1="46"
          y1="110"
          x2="46"
          y2="280"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.08"
        />

        {/* Label outer */}
        <rect
          x="44"
          y="182"
          width="52"
          height="68"
          rx="3"
          fill="none"
          stroke={colors.label}
          strokeWidth="0.5"
          opacity="0.4"
        />

        {/* Label inner */}
        <rect
          x="47"
          y="185"
          width="46"
          height="62"
          rx="2"
          fill="none"
          stroke={colors.label}
          strokeWidth="0.3"
          opacity="0.25"
        />

        {/* Brand text */}
        <text
          x="70"
          y="208"
          textAnchor="middle"
          fill={colors.label}
          fontSize="10"
          fontFamily="serif"
          letterSpacing="3"
          opacity="0.85"
        >
          LUNE
        </text>
        <line
          x1="52"
          y1="213"
          x2="88"
          y2="213"
          stroke={colors.label}
          strokeWidth="0.3"
          opacity="0.4"
        />
        <text
          x="70"
          y="228"
          textAnchor="middle"
          fill={colors.label}
          fontSize="7"
          fontFamily="serif"
          letterSpacing="4"
          opacity="0.65"
        >
          {isJupiter ? "JUPITER" : "PLUTO"}
        </text>
        <text
          x="70"
          y="240"
          textAnchor="middle"
          fill={colors.label}
          fontSize="4.5"
          fontFamily="sans-serif"
          letterSpacing="2"
          opacity="0.35"
        >
          EAU DE PARFUM
        </text>

        {/* Bottom highlight */}
        <path
          d="M42 292 Q42 294 70 296 Q98 294 98 292"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          opacity="0.08"
        />
      </svg>
    );
  }
);

PerfumeBottle.displayName = "PerfumeBottle";

export default PerfumeBottle;
