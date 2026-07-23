"use client"

import { Briefcase, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeader label={t.experience.label} heading={t.experience.heading} subtitle={t.experience.subtitle} />

        <ol className="relative mt-14 space-y-8 border-l border-border pl-6 sm:pl-8">
          {t.experience.items.map((item, i) => (
            <Reveal as="li" key={`${item.company}-${i}`} delay={i * 90} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 bg-background sm:-left-[39px]"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              <div className="rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold">
                      <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-primary">{item.company}</p>
                  </div>
                  <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
