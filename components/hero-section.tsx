"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const STATS = [
  { label: "Role", value: "Developer" },
  { label: "Focus", value: "AI Systems" },
  { label: "Craft", value: "Voice Acting" },
  { label: "Based", value: "Paris, FR" },
]

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="intro"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden"
    >
      {/* Subtle grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-6 top-0 h-full w-px bg-border/40 lg:left-[calc(50%-600px+24px)]" />
        <div className="absolute right-6 top-0 h-full w-px bg-border/40 lg:right-[calc(50%-600px+24px)]" />
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        <div className="flex flex-col gap-10">
          {/* Label */}
          <div
            className="flex items-center gap-3"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0ms",
            }}
          >
            <span className="font-mono text-xs text-muted-foreground">00</span>
            <div className="h-px w-8 bg-border" />
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Introduction
            </span>
          </div>

          {/* Headline */}
          <h1 className="flex flex-col gap-1">
            <span
              className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-foreground"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(32px)",
                transition: "all 0.7s cubic-bezier(0.25, 1, 0.5, 1) 80ms",
              }}
            >
              Abdulwadud
            </span>
            <span
              className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-foreground"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(32px)",
                transition: "all 0.7s cubic-bezier(0.25, 1, 0.5, 1) 160ms",
              }}
            >
              Ayit{" "}
              <span className="text-accent">Al-Hajj</span>
            </span>
          </h1>

          {/* Stats */}
          <div
            className="grid grid-cols-2 gap-px border border-border bg-border lg:max-w-2xl lg:grid-cols-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s cubic-bezier(0.25, 1, 0.5, 1) 280ms",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 bg-background p-4">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  {stat.label}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Statement */}
          <p
            className="max-w-lg text-lg font-light leading-relaxed text-swiss-gray-600 md:text-xl"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s cubic-bezier(0.25, 1, 0.5, 1) 400ms",
            }}
          >
            Building intelligent systems through code while exploring the
            intersection of artificial intelligence, economics, and creative
            audio expression.
          </p>

          {/* Actions */}
          <div
            className="flex flex-wrap gap-3"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.7s cubic-bezier(0.25, 1, 0.5, 1) 520ms",
            }}
          >
            <button
              onClick={() => scrollTo("#work")}
              className="group inline-flex items-center gap-2.5 bg-foreground px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-background transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              View Projects
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2.5 border border-border bg-transparent px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Get in Touch
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border">
        <div
          className="h-px bg-accent"
          style={{
            width: loaded ? "100%" : "0%",
            transition: "width 1s cubic-bezier(0.25, 1, 0.5, 1) 700ms",
          }}
        />
      </div>
    </section>
  )
}
