"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative order-last lg:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/about/tile-installation-work.png"
              alt={t.about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute -bottom-5 start-6 hidden rounded-lg border border-border bg-card px-6 py-4 shadow-lg sm:block"
            aria-hidden="true"
          >
            <p className="text-sm font-semibold text-foreground">
              {t.trust.finishing} • {t.trust.quality}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t.about.label}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-5 text-pretty text-lg font-medium leading-relaxed text-foreground">
            {t.about.lead}
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.about.body}
          </p>
          <ul className="mt-8 space-y-3">
            {t.about.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
