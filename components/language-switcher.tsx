"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/i18n/translations"

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage()

  const options: Language[] = ["fr", "en"]

  return (
    <div
      role="group"
      aria-label={t.nav.langLabel}
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary/40 p-0.5 text-sm font-medium",
        className,
      )}
    >
      {options.map((option, index) => {
        const active = lang === option
        return (
          <span key={option} className="flex items-center">
            {index === 1 && <span aria-hidden="true" className="px-0.5 text-muted-foreground">|</span>}
            <button
              type="button"
              onClick={() => setLang(option)}
              aria-pressed={active}
              lang={option}
              className={cn(
                "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="sr-only">
                {option === "fr" ? "Français" : "English"}
                {active ? " (actif / active)" : ""}
              </span>
              <span aria-hidden="true">{option.toUpperCase()}</span>
            </button>
          </span>
        )
      })}
    </div>
  )
}
