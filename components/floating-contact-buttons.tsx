"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/i18n"

export function FloatingContactButtons() {
  const { t } = useLanguage()

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.whatsapp}
        className="fixed bottom-6 end-6 z-40 hidden size-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 md:grid"
      >
        <WhatsAppIcon className="size-7" aria-hidden="true" />
        <span className="absolute inset-0 -z-10 animate-pulse rounded-full bg-accent/40" />
      </a>

      {/* Mobile bottom sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          <Phone className="size-5 text-accent" aria-hidden="true" />
          {t.floating.call}
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-card hover:bg-card/80 py-3.5 text-sm font-semibold text-foreground transition-colors duration-200 border-l border-border"
        >
          <WhatsAppIcon className="size-5 text-accent" aria-hidden="true" />
          {t.floating.whatsapp}
        </a>
      </div>
    </>
  )
}
