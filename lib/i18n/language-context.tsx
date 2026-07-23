"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { translations, type Language, type Translation } from "./translations"

const STORAGE_KEY = "aa-portfolio-lang"

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  toggle: () => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "en"
  const languages = navigator.languages ?? [navigator.language]
  const prefersFrench = languages.some((l) => l.toLowerCase().startsWith("fr"))
  return prefersFrench ? "fr" : "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")

  // On first mount: read saved preference or detect the browser language.
  useEffect(() => {
    let initial: Language | null = null
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === "fr" || saved === "en") initial = saved
    } catch {
      // localStorage unavailable — ignore
    }
    const resolved = initial ?? detectBrowserLanguage()
    setLangState(resolved)
  }, [])

  // Keep the <html lang>, title and description in sync for accessibility & SEO.
  useEffect(() => {
    document.documentElement.lang = lang
    const meta = translations[lang].meta
    document.title = meta.title
    let desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      desc = document.createElement("meta")
      desc.setAttribute("name", "description")
      document.head.appendChild(desc)
    }
    desc.setAttribute("content", meta.description)
  }, [lang])

  const setLang = useCallback((next: Language) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore write failures
    }
  }, [])

  const toggle = useCallback(() => {
    setLang(lang === "fr" ? "en" : "fr")
  }, [lang, setLang])

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle,
    t: translations[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
