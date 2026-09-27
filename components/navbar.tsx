"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { LanguageSwitcher } from "@/components/language-switcher"
import { TileLogo } from "@/components/tile-logo"
import { WHATSAPP_URL } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "work", key: "work" as const },
  { id: "contact", key: "contact" as const },
]

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-md shadow-[0_1px_20px_-12px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-20">
        <a
          href="#home"
          className={cn(
            "group flex items-center gap-3 transition-colors",
            scrolled ? "text-foreground" : "text-background",
          )}
        >
          <span
            className={cn(
              "grid size-10 place-items-center rounded-lg border p-1 transition-all duration-200 group-hover:scale-105",
              scrolled
                ? "border-accent/40 bg-accent/10 shadow-xs"
                : "border-background/30 bg-background/10 backdrop-blur-xs",
            )}
            aria-hidden="true"
          >
            <TileLogo className="h-7 w-auto drop-shadow-xs" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-sans text-base font-bold tracking-tight md:text-lg">
              Madina Tile Works
            </span>
            <span
              className={cn(
                "mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em]",
                scrolled ? "text-muted-foreground" : "text-background/70",
              )}
            >
              Madinah
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/80 hover:text-accent"
                  : "text-background/85 hover:text-background",
              )}
            >
              {t.nav[s.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher
            className={cn(
              "hidden sm:inline-flex",
              scrolled 
                ? "border-accent/30 bg-accent/5" 
                : "border-background/40 bg-background/20",
            )}
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-background/30 bg-background/10 px-4 py-2 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20 md:inline-flex"
          >
            <WhatsAppIcon className="size-4 text-accent" aria-hidden="true" />
            {t.nav.quote}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "grid size-10 place-items-center rounded-md border transition-colors lg:hidden",
              scrolled
                ? "border-border text-foreground"
                : "border-background/30 text-background",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300 md:top-20",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {SECTIONS.map((s, i) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={close}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {t.nav[s.key]}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between gap-3 border-t border-border pt-4">
            <LanguageSwitcher />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-card/80"
            >
              <WhatsAppIcon className="size-4 text-accent" aria-hidden="true" />
              {t.nav.quote}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
