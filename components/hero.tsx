"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WHATSAPP_URL } from "@/lib/i18n"

export function Hero() {
  const { t, dir } = useLanguage()
  const ArrowIcon = ArrowRight

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-luxury-tiles.png"
          alt="Luxury interior with polished large-format marble-look floor tiles in Madinah"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,25,23,0.82) 0%, rgba(28,25,23,0.55) 40%, rgba(28,25,23,0.75) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-sm font-medium text-background backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.12] tracking-tight text-background sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-background/85 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3.5 text-base font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
            >
              <WhatsAppIcon
                className="size-5 text-accent"
                aria-hidden="true"
              />
              {t.hero.whatsapp}
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-background/30 bg-background/10 px-6 py-3.5 text-base font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
            >
              {t.hero.quote}
              <ArrowIcon
                className={`size-4 transition-transform group-hover:translate-x-0.5 ${
                  dir === "rtl" ? "rotate-180 group-hover:-translate-x-0.5" : ""
                }`}
                aria-hidden="true"
              />
            </a>
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.12em] text-background/70">
            {t.hero.trust}
          </p>
        </div>
      </div>
    </section>
  )
}
