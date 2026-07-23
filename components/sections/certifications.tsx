"use client"

import { Award } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const ACHIEVED = ["Obtenue", "Achieved"]

export function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          label={t.certifications.label}
          heading={t.certifications.heading}
          subtitle={t.certifications.subtitle}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.certifications.items.map((cert, i) => {
            const achieved = ACHIEVED.includes(cert.status)
            return (
              <Reveal
                key={cert.name}
                delay={(i % 3) * 80}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug text-balance">{cert.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>
                    <span
                      className={
                        achieved
                          ? "rounded-full bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary"
                          : "rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground"
                      }
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
