"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { SectionHeader } from "./section-header"
import { Reveal } from "./reveal"

const PROJECTS = [
  {
    index: "01",
    title: "Minishell",
    description:
      "Custom shell implementation in C, handling process management, pipes, redirections, and environment variables with Unix-like behavior.",
    tags: ["C", "Unix", "Systems"],
    year: "2025",
  },
  {
    index: "02",
    title: "Ray Tracer",
    description:
      "3D rendering engine using ray tracing algorithms to generate photorealistic images with shadows, reflections, and lighting.",
    tags: ["C", "Graphics", "Math"],
    year: "2025",
  },
  {
    index: "03",
    title: "ML Trading Bot",
    description:
      "Automated trading system using machine learning models to analyze market patterns and execute trades based on predictive algorithms.",
    tags: ["Python", "ML", "Finance"],
    year: "2026",
  },
  {
    index: "04",
    title: "Neural Network Visualizer",
    description:
      "Interactive tool for visualizing neural network architectures and training processes in real-time.",
    tags: ["JavaScript", "D3.js", "ML"],
    year: "2026",
  },
]

function ProjectRow({ project }: { project: (typeof PROJECTS)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="group relative grid grid-cols-1 gap-4 border-b border-border py-8 md:grid-cols-[60px_1fr_60px_48px] md:gap-6 md:py-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle hover background */}
      <div
        className="pointer-events-none absolute inset-0 bg-secondary"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Index */}
      <div className="relative z-10 font-mono text-2xl font-bold leading-none text-muted-foreground/40 transition-colors duration-300 group-hover:text-accent">
        {project.index}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground md:text-2xl">
          {project.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-swiss-gray-500">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border bg-background px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground transition-all duration-300 group-hover:border-accent/30 group-hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Year */}
      <div className="relative z-10 hidden pt-1.5 font-mono text-xs text-muted-foreground md:block">
        {project.year}
      </div>

      {/* Arrow link */}
      <a
        href="#"
        className="relative z-10 hidden h-12 w-12 items-center justify-center border border-border bg-background text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground group-hover:border-accent/50 md:flex"
        aria-label={`View ${project.title} project`}
      >
        <ArrowUpRight size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </article>
  )
}

export function WorkSection() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader index="02" title="Selected Work" />
        </Reveal>

        <div className="flex flex-col border-t border-border">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.index} delay={idx * 80}>
              <ProjectRow project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
