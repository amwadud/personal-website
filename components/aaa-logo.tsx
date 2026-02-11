"use client"

import { useState } from "react"

export function AAALogo({ size = 40 }: { size?: number }) {
  const [hovered, setHovered] = useState(false)

  const strokeColor = "currentColor"
  const accentColor = "hsl(var(--accent))"

  return (
    <div
      className="relative cursor-pointer text-foreground"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="overflow-visible"
        aria-label="AAA Logo"
      >
        {/* Outer frame - expands on hover */}
        <rect
          x="2"
          y="2"
          width="96"
          height="96"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: hovered ? 1 : 0,
            strokeDasharray: 384,
            strokeDashoffset: hovered ? 0 : 384,
          }}
        />

        {/* First A - Left, slides out */}
        <g
          className="transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: hovered ? "translateX(-8px)" : "translateX(0)",
            opacity: hovered ? 0.3 : 0.15,
          }}
        >
          <path
            d="M30 82 L50 18 L70 82"
            fill="none"
            stroke={strokeColor}
            strokeWidth="4"
            strokeLinejoin="miter"
          />
          <line x1="38" y1="60" x2="62" y2="60" stroke={strokeColor} strokeWidth="4" />
        </g>

        {/* Center A - the main one, lifts and turns accent */}
        <g
          className="transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          <path
            d="M30 82 L50 18 L70 82"
            fill="none"
            strokeWidth="5"
            strokeLinejoin="miter"
            className="transition-all duration-500"
            style={{ stroke: hovered ? accentColor : strokeColor }}
          />
          <line
            x1="38"
            y1="60"
            x2="62"
            y2="60"
            strokeWidth="5"
            className="transition-all duration-500"
            style={{ stroke: hovered ? accentColor : strokeColor }}
          />
        </g>

        {/* Third A - Right, slides out */}
        <g
          className="transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            transform: hovered ? "translateX(8px)" : "translateX(0)",
            opacity: hovered ? 0.3 : 0.15,
          }}
        >
          <path
            d="M30 82 L50 18 L70 82"
            fill="none"
            stroke={strokeColor}
            strokeWidth="4"
            strokeLinejoin="miter"
          />
          <line x1="38" y1="60" x2="62" y2="60" stroke={strokeColor} strokeWidth="4" />
        </g>

        {/* Accent dot at apex */}
        <circle
          cx="50"
          cy="14"
          r="3.5"
          className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            fill: accentColor,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scale(1)" : "scale(0)",
            transformOrigin: "50px 14px",
          }}
        />

        {/* Bottom accent line */}
        <line
          x1="20"
          y1="90"
          x2="80"
          y2="90"
          strokeWidth="2"
          className="transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            stroke: accentColor,
            strokeDasharray: 60,
            strokeDashoffset: hovered ? 0 : 60,
          }}
        />
      </svg>
    </div>
  )
}
