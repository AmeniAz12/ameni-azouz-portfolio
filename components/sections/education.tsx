"use client"

import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader label={t.education.label} heading={t.education.heading} subtitle={t.education.subtitle} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {t.education.items.map((item, i) => (
            <Reveal
              key={`${item.school}-${i}`}
              delay={i * 90}
              className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-balance">{item.degree}</h3>
              <p className="mt-1 text-sm text-primary">{item.school}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
