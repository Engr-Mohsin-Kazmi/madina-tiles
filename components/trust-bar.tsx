"use client"

import { Hammer, Sparkles, BadgeCheck, Wallet, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TrustBar() {
  const { t } = useLanguage()

  const items = [
    { icon: Hammer, label: t.trust.workmanship },
    { icon: Sparkles, label: t.trust.finishing },
    { icon: BadgeCheck, label: t.trust.quality },
    { icon: Wallet, label: t.trust.pricing },
    { icon: MapPin, label: t.trust.local },
  ]

  return (
    <section aria-label="Highlights" className="relative z-20 border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 divide-border sm:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {items.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 px-2 py-5 sm:px-4 md:justify-center"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-tight text-foreground">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
