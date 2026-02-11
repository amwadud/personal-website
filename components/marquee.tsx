export function Marquee({
  items,
  speed = "normal",
  separator = "/",
}: {
  items: string[]
  speed?: "slow" | "normal" | "fast"
  separator?: string
}) {
  const duration = speed === "slow" ? "40s" : speed === "fast" ? "16s" : "26s"

  const content = items
    .map((item) => `${item} \u00A0\u00A0 ${separator} \u00A0\u00A0`)
    .join("")

  return (
    <div className="relative overflow-hidden border-y border-border bg-secondary py-3">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: `marquee ${duration} linear infinite` }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            {content}
          </span>
        ))}
      </div>
    </div>
  )
}
