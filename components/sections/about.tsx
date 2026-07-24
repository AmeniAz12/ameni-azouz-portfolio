"use client"

import { CheckCircle2, Compass, ShieldCheck, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative border-t border-border/60 bg-secondary/15 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader label={t.about.label} heading={t.about.heading} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal className="space-y-7">
            <div className="border-l-2 border-primary/70 pl-5">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{t.about.profileTitle}</h3>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">{t.about.profileText}</p>
            </div>

            <div className="space-y-4">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>

            {t.about.highlights && (
              <div className="grid gap-3 sm:grid-cols-3">
                {t.about.highlights.map((highlight) => (
                  <div key={`${highlight.value}-${highlight.label}`} className="rounded-lg border border-border bg-card/60 p-4">
                    <p className="text-xl font-bold text-foreground">{highlight.value}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{highlight.label}</p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <div className="rounded-lg border border-border bg-card/70 p-6 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{t.about.focusTitle}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {t.about.focusAreas.map((area) => (
                  <span key={area} className="rounded-md border border-border bg-secondary/50 px-3 py-1.5 text-xs text-foreground/90">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card/70 p-6 shadow-lg shadow-black/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{t.about.contributionTitle}</h3>
              </div>

              <ul className="mt-5 grid gap-3">
                {t.about.contributions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
