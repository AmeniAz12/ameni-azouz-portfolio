"use client"

import { FileText, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { CONTACT } from "@/lib/i18n/translations"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const HIGH = ["Élevée", "High"]

export function CaseStudies() {
  const { t } = useLanguage()

  return (
    <section id="reports" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label={t.caseStudies.label}
          heading={t.caseStudies.heading}
          subtitle={t.caseStudies.subtitle}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.caseStudies.items.map((item, i) => {
            const high = HIGH.includes(item.severity)
            return (
              <Reveal
                as="article"
                key={item.title}
                delay={i * 90}
                className="flex flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-balance">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

                <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="text-xs text-muted-foreground">
                    {t.caseStudies.severityLabel}:{" "}
                    <span className={high ? "font-medium text-destructive" : "font-medium text-accent"}>
                      {item.severity}
                    </span>
                  </span>
                  <a
                    href={CONTACT.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {t.caseStudies.readLabel}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
