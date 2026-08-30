"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import {
  DEFAULT_LOCALE,
  DIRECTION,
  LOCALE_HTML_LANG,
  translations,
  type Dictionary,
  type Locale,
} from "@/lib/i18n"

interface LanguageContextValue {
  locale: Locale
  dir: "rtl" | "ltr"
  t: Dictionary
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "mtw-locale"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  // Restore saved language preference on mount.
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && saved in translations) {
      setLocaleState(saved)
    }
  }, [])

  // Keep <html> lang/dir in sync with the active language.
  useEffect(() => {
    const root = document.documentElement
    root.lang = LOCALE_HTML_LANG[locale]
    root.dir = DIRECTION[locale]
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const value: LanguageContextValue = {
    locale,
    dir: DIRECTION[locale],
    t: translations[locale],
    setLocale,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
