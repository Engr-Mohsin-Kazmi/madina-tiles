"use client"

import { MapPin, Navigation } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function ServiceArea() {
  const { t } = useLanguage()

  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t.area.label}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.area.title}
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {t.area.body}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {t.area.badge}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-primary">
            {/* Stylised map motif — no false exact address is claimed */}
            <div
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.98 0.006 85 / 0.12) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0.006 85 / 0.12) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, oklch(0.62 0.07 68 / 0.35), transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
              <span className="relative grid place-items-center">
                <span className="absolute size-16 animate-ping rounded-full bg-accent/30" />
                <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Navigation className="size-5" aria-hidden="true" />
                </span>
              </span>
              <span className="mt-2 text-lg font-bold text-primary-foreground">
                {t.area.badge}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
