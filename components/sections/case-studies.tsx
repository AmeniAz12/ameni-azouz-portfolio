"use client"

import { Languages } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

export function CaseStudies() {
  const { t } = useLanguage()

  return (
    <section id="languages" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader label={t.caseStudies.label} heading={t.caseStudies.heading} subtitle={t.caseStudies.subtitle} />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {t.caseStudies.items.map((item, i) => (
            <Reveal
              as="article"
              key={item.title}
              delay={i * 90}
              className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Languages className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
