"use client"

import { Phone, MessageCircle } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/i18n"

export function ContactCTA() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-accent py-16 text-accent-foreground md:py-20">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.2 0.01 60 / 1) 1px, transparent 1px), linear-gradient(90deg, oklch(0.2 0.01 60 / 1) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-accent-foreground/85">
          {t.cta.body}
        </p>
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-foreground/40 px-6 py-3.5 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-foreground/10"
          >
            <MessageCircle className="size-5 text-[#25D366]" aria-hidden="true" />
            {t.cta.whatsapp}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-foreground px-6 py-3.5 text-base font-semibold text-accent transition-transform hover:scale-[1.03]"
          >
            <Phone className="size-5" aria-hidden="true" />
            {t.cta.call}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
