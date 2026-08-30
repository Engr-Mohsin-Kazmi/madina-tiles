"use client"

import { Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { Reveal } from "@/components/reveal"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/i18n"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t.contact.label}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          <Reveal
            as="a"
            href={`tel:${PHONE_TEL}`}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-accent/50"
          >
            <span className="grid size-12 place-items-center rounded-full bg-accent/10 text-accent">
              <Phone className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {t.contact.phoneLabel}
            </span>
            <span dir="ltr" className="text-lg font-bold text-foreground">
              {PHONE_DISPLAY}
            </span>
          </Reveal>

          <Reveal
            as="a"
            delay={70}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all duration-200 hover:border-accent/50 hover:bg-card/80"
          >
            <span className="grid size-12 place-items-center rounded-full bg-accent/10 text-accent">
              <WhatsAppIcon className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {t.contact.whatsappLabel}
            </span>
            <span dir="ltr" className="text-lg font-bold text-foreground">
              {PHONE_DISPLAY}
            </span>
          </Reveal>

          <Reveal
            delay={140}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
          >
            <span className="grid size-12 place-items-center rounded-full bg-accent/10 text-accent">
              <MapPin className="size-6" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              {t.contact.locationLabel}
            </span>
            <span className="text-lg font-bold text-foreground">{t.contact.location}</span>
          </Reveal>
        </div>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-all duration-200 hover:bg-card/80"
          >
            <WhatsAppIcon className="size-5" aria-hidden="true" />
            {t.contact.whatsapp}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            <Phone className="size-5" aria-hidden="true" />
            {t.contact.call}
          </a>
        </div>
      </div>
    </section>
  )
}
