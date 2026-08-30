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
      className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_20px_50px_-24px_rgba(229,115,115,0.15)]"
    >
      {/* Background accent element */}
      <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <span className="relative grid size-14 place-items-center rounded-lg bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-foreground transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent/80 group-hover:text-accent-foreground group-hover:scale-110 group-hover:shadow-lg">
        <Icon className="size-7" aria-hidden="true" />
      </span>
      <h3 className="relative mt-6 text-lg font-bold text-foreground">{name}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <span className="relative mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-200 group-hover:gap-3">
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
