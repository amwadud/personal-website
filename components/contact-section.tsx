"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { Reveal } from "./reveal"

const CONTACTS = [
  {
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
  },
]

function ContactRow({ contact }: { contact: (typeof CONTACTS)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={contact.href}
      className="group relative grid grid-cols-1 items-center gap-2 border-b border-border py-6 text-foreground no-underline sm:grid-cols-[120px_1fr_auto] sm:gap-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle accent underline on hover */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-accent"
        style={{
          width: hovered ? "100%" : "0%",
          transition: "width 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      />

      <div className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 group-hover:text-accent">
        {contact.label}
      </div>
      <div className="text-lg font-semibold text-foreground">
        {contact.value}
      </div>
      <div className="hidden transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 sm:block">
        <ArrowUpRight size={18} strokeWidth={1.5} className="text-muted-foreground transition-colors duration-300 group-hover:text-accent" />
      </div>
    </a>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader index="04" title="Contact" />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Intro text */}
          <Reveal delay={100} className="lg:col-span-1">
            <p className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              Whether it{"'"}s collaborating on a coding project, discussing AI
              applications in economics, or voice work opportunities{"  --  "}I{"'"}d
              love to hear from you.
            </p>
          </Reveal>

          {/* Contact links */}
          <Reveal delay={200} className="lg:col-span-2">
            <div className="flex flex-col border-t border-border">
              {CONTACTS.map((contact) => (
                <ContactRow key={contact.label} contact={contact} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
