import { AAALogo } from "./aaa-logo"

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <AAALogo size={28} />
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-foreground">
              Abdulwadud Ayit Al-Hajj
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Developer & Voice Actor
            </p>
          </div>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          {"Design with precision -- 2026"}
        </p>
      </div>
    </footer>
  )
}
