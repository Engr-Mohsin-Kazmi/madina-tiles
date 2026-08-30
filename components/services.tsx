"use client"

import {
  LayoutGrid,
  Grid2x2,
  Layers,
  Gem,
  ShowerHead,
  CookingPot,
  SquareStack,
  Paintbrush,
  type LucideIcon,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { ServiceCard } from "@/components/service-card"

type ServiceKey =
  | "floor"
  | "ceramic"
  | "porcelain"
  | "marble"
  | "bathroom"
  | "kitchen"
  | "wallFloor"
  | "finishing"

const SERVICE_ORDER: { key: ServiceKey; icon: LucideIcon }[] = [
  { key: "floor", icon: LayoutGrid },
  { key: "ceramic", icon: Grid2x2 },
  { key: "porcelain", icon: Layers },
  { key: "marble", icon: Gem },
  { key: "bathroom", icon: ShowerHead },
  { key: "kitchen", icon: CookingPot },
  { key: "wallFloor", icon: SquareStack },
  { key: "finishing", icon: Paintbrush },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="scroll-mt-20 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t.services.label}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.services.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_ORDER.map(({ key, icon }, i) => {
            const item = t.services.items[key]
            return (
              <Reveal key={key} delay={(i % 4) * 70}>
                <ServiceCard
                  icon={icon}
                  name={item.name}
                  desc={item.desc}
                  cta={t.services.cta}
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
