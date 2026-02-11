"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { AAALogo } from "./aaa-logo"

const NAV_ITEMS = [
  { href: "#intro", label: "Intro", index: "00" },
  { href: "#about", label: "About", index: "01" },
  { href: "#work", label: "Work", index: "02" },
  { href: "#voice", label: "Voice", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("#intro")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sections = NAV_ITEMS.map((item) => ({
        id: item.href,
        el: document.querySelector(item.href),
      }))

      let current = "#intro"
      for (const section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect()
          if (rect.top <= 120) {
            current = section.id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:h-20">
        {/* Identity */}
        <button
          onClick={() => scrollToSection("#intro")}
          className="flex items-center gap-3 bg-transparent"
        >
          <AAALogo size={36} />
          <div className="flex flex-col items-start">
            <span className="font-mono text-[13px] font-semibold tracking-wider text-foreground">
              AAA
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Dev / Voice
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className={`group relative py-1 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  activeSection === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className="absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300"
                  style={{
                    width: activeSection === item.href ? "100%" : "0%",
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Available
            </span>
          </div>

          <div className="mx-1 hidden h-4 w-px bg-border lg:block" />

          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center border border-border bg-background md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-4 bg-foreground transition-all duration-200 ${mobileOpen ? "translate-y-[4px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-foreground transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-4 bg-foreground transition-all duration-200 ${mobileOpen ? "-translate-y-[4px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="flex flex-col px-6 py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`flex w-full items-center gap-4 border-b border-border/50 py-4 text-left text-[15px] font-medium ${
                    activeSection === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.index}
                  </span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
