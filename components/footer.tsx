"use client"

import { Phone } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { LanguageSwitcher } from "@/components/language-switcher"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/i18n"

const NAV = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "services", key: "services" as const },
  { id: "work", key: "work" as const },
  { id: "contact", key: "contact" as const },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span
                className="grid size-9 place-items-center rounded-md border border-accent/40 bg-accent/10 text-sm font-bold text-accent"
                aria-hidden="true"
              >
                MT
              </span>
              <span className="text-lg font-bold">Madina Tile Works</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
              {t.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/50">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/50">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2.5 text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone className="size-4 shrink-0" aria-hidden="true" />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  <WhatsAppIcon className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  <span dir="ltr">WhatsApp {PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-primary-foreground/80">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {t.contact.location}
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground/50">
              {t.footer.langTitle}
            </h3>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-sm text-primary-foreground/55">
            © {year} Madina Tile Works. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
