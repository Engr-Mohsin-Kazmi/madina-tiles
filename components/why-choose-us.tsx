"use client"

import { Sparkles, ScanLine, Layers3, Wallet, CalendarCheck, type LucideIcon } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

const ICONS: LucideIcon[] = [Sparkles, ScanLine, Layers3, Wallet, CalendarCheck]

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t.why.label}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {t.why.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/70">
            {t.why.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.why.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal
                key={item.title}
                delay={(i % 5) * 60}
                className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 transition-colors hover:bg-primary-foreground/[0.08]"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/65">
                  {item.desc}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
