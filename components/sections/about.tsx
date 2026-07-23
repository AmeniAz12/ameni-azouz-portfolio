"use client"

import { Cloud, GitBranch, Code, Bug, ShieldCheck, Terminal, Radar } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const FOCUS_ICONS = [Cloud, GitBranch, Code, Bug, ShieldCheck, Terminal, Radar]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader label={t.about.label} heading={t.about.heading} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {t.about.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl border border-border bg-card/60 p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary sm:text-3xl">{h.value}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{h.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="font-mono text-sm font-semibold text-foreground">{t.about.focusTitle}</h3>
              <ul className="mt-4 space-y-2.5">
                {t.about.focusAreas.map((area, i) => {
                  const Icon = FOCUS_ICONS[i % FOCUS_ICONS.length]
                  return (
                    <li key={area} className="flex items-center gap-3 text-sm">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="text-foreground/90">{area}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
