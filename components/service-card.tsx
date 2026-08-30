"use client"

import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

interface ServiceCardProps {
  icon: LucideIcon
  name: string
  desc: string
  cta: string
}

export function ServiceCard({ icon: Icon, name, desc, cta }: ServiceCardProps) {
  const { dir } = useLanguage()

  return (
    <a
      href="#contact"
      className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
    >
      <span className="grid size-12 place-items-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-foreground">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        {cta}
        <ArrowRight
          className={`size-4 transition-transform group-hover:translate-x-1 ${
            dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : ""
          }`}
          aria-hidden="true"
        />
      </span>
    </a>
  )
}
