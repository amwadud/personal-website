interface SectionHeaderProps {
  index: string
  title: string
}

export function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <header className="mb-14 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-muted-foreground">{index}</span>
        <div className="h-px w-8 bg-border" />
      </div>
      <h2 className="text-balance text-3xl font-bold leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <div className="h-1.5 w-1.5 bg-accent" />
      </div>
    </header>
  )
}
