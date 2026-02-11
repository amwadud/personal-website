"use client"

import React from "react"
import { useState, useRef, useEffect, useCallback } from "react"
import { Play, Pause } from "lucide-react"
import { SectionHeader } from "./section-header"
import { Reveal } from "./reveal"

const SAMPLES = [
  {
    index: "01",
    title: "Character Voice",
    description: "Dynamic character performance with varied emotional range and distinct personality.",
    duration: "0:45",
    totalSeconds: 45,
  },
  {
    index: "02",
    title: "Commercial",
    description: "Professional commercial delivery with clear diction and persuasive tone.",
    duration: "0:30",
    totalSeconds: 30,
  },
  {
    index: "03",
    title: "Narration",
    description: "Engaging narration for audiobooks with proper pacing and emotional depth.",
    duration: "1:00",
    totalSeconds: 60,
  },
]

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return "0:00"
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

function WaveformBars({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex h-8 items-end gap-[2px]">
      {Array.from({ length: 32 }).map((_, i) => {
        const baseHeight = 3 + Math.abs(Math.sin(i * 0.45)) * 26
        return (
          <div
            key={i}
            className="w-[2px] bg-foreground/20 transition-all duration-300"
            style={{
              height: isPlaying ? `${baseHeight}px` : "3px",
              opacity: isPlaying ? 0.4 + Math.sin(i * 0.3) * 0.3 : 0.15,
              transitionDelay: `${i * 12}ms`,
            }}
          />
        )
      })}
    </div>
  )
}

function SamplePlayer({
  sample,
  isActive,
  onPlay,
}: {
  sample: (typeof SAMPLES)[0]
  isActive: boolean
  onPlay: () => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (!isActive && isPlaying) {
      setIsPlaying(false)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isActive, isPlaying])

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false)
      if (intervalRef.current) clearInterval(intervalRef.current)
    } else {
      onPlay()
      setIsPlaying(true)
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 0.1
          if (next >= sample.totalSeconds) {
            setIsPlaying(false)
            if (intervalRef.current) clearInterval(intervalRef.current)
            setProgress(0)
            return 0
          }
          setProgress((next / sample.totalSeconds) * 100)
          return next
        })
      }, 100)
    }
  }, [isPlaying, onPlay, sample.totalSeconds])

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const pct = Math.max(0, Math.min(1, x / rect.width))
    setProgress(pct * 100)
    setCurrentTime(pct * sample.totalSeconds)
  }

  return (
    <div className="group border border-border bg-background p-6 transition-all duration-300 hover:border-accent/30 md:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 border-b border-border/50 pb-6 md:flex-row md:items-start md:gap-6">
        <div className="font-mono text-2xl font-bold leading-none text-muted-foreground/40 md:w-12">
          {sample.index}
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-lg font-bold leading-tight text-foreground">
            {sample.title}
          </h3>
          <p className="text-sm leading-relaxed text-swiss-gray-500">
            {sample.description}
          </p>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          {sample.duration}
        </div>
      </div>

      {/* Waveform */}
      <div className="mb-4">
        <WaveformBars isPlaying={isPlaying} />
      </div>

      {/* Player Controls */}
      <div className="flex items-center gap-4 border border-border bg-secondary/50 p-3">
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 shrink-0 items-center justify-center bg-foreground text-background transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>

        {/* Progress */}
        <div
          className="group/track relative flex-1 cursor-pointer py-2"
          onClick={handleSeek}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="relative h-px bg-border">
            <div
              className="absolute left-0 top-0 h-full bg-accent transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute top-1/2 h-2.5 w-2.5 bg-foreground transition-opacity group-hover/track:opacity-100"
              style={{
                left: `${progress}%`,
                transform: "translate(-50%, -50%)",
                opacity: progress > 0 ? 1 : 0,
              }}
            />
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
          <span>{formatTime(currentTime)}</span>
          <span className="text-border">/</span>
          <span>{sample.duration}</span>
        </div>
      </div>
    </div>
  )
}

export function VoiceSection() {
  const [activePlayer, setActivePlayer] = useState<string | null>(null)

  return (
    <section id="voice" className="py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Reveal>
          <SectionHeader index="03" title="Voice Work" />
        </Reveal>

        <div className="flex flex-col gap-6">
          {SAMPLES.map((sample, idx) => (
            <Reveal key={sample.index} delay={idx * 100}>
              <SamplePlayer
                sample={sample}
                isActive={activePlayer === sample.index}
                onPlay={() => setActivePlayer(sample.index)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
