"use client"

import { LANGUAGE_LABELS } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-lg border-2 border-accent/30 bg-accent/5 p-1 text-sm transition-all hover:border-accent/50",
        className,
      )}
      role="group"
      aria-label="Language switcher"
    >
      {LANGUAGE_LABELS.map(({ locale: code, label }) => {
        const active = code === locale
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            lang={code}
            className={cn(
              "rounded-md px-4 py-2 font-medium transition-all duration-200 text-sm",
              active
                ? "bg-accent text-accent-foreground shadow-md scale-105"
                : "text-foreground/70 hover:text-foreground bg-transparent",
            )}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
