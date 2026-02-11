"use client"

import { Code2, Brain, Mic } from "lucide-react"
import { SectionHeader } from "./section-header"
import { Reveal } from "./reveal"

const SKILLS = [
  {
    icon: Code2,
    title: "Programming",
    items: ["C / C++", "Python", "JavaScript", "System Architecture"],
  },
  {
    icon: Brain,
    title: "AI & Data",
    items: ["Machine Learning", "Neural Networks", "Data Analysis", "Algorithm Design"],
  },
  {
    icon: Mic,
    title: "Voice Work",
    items: ["Character Acting", "Narration", "Commercial VO", "Audio Production"],
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader index="01" title="About" />
        </Reveal>

        {/* About Layout */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <Reveal delay={100} className="lg:col-span-1">
            <p className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              Driven learner at 42 Network, passionate about building software
              that makes a difference while exploring AI and economic systems.
            </p>
          </Reveal>
          <Reveal delay={200} className="lg:col-span-2">
            <p className="mb-5 text-[15px] leading-relaxed text-swiss-gray-600">
              Currently mastering low-level programming and software architecture
              through 42{"'"}s peer-to-peer learning model. My interests span
              from machine learning algorithms to economic theory, with a
              particular focus on how AI can transform financial systems.
            </p>
            <p className="text-[15px] leading-relaxed text-swiss-gray-600">
              Beyond code, I bring stories to life through voice acting, blending
              technical precision with creative expression.
            </p>
          </Reveal>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-3">
          {SKILLS.map((skill, idx) => (
            <Reveal key={skill.title} delay={100 + idx * 100}>
              <div className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-secondary">
                <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {skill.title}
                  </h3>
                  <skill.icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-muted-foreground transition-colors duration-300 group-hover:text-accent"
                  />
                </div>
                <ul className="flex flex-1 flex-col">
                  {skill.items.map((item, i) => (
                    <li
                      key={item}
                      className={`flex items-center gap-3 py-3 text-sm text-swiss-gray-600 transition-colors duration-200 group-hover:text-foreground ${
                        i < skill.items.length - 1 ? "border-b border-border/50" : ""
                      }`}
                    >
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
