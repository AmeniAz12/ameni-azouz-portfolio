"use client"

import { Cloud, ShieldAlert, Crosshair, Server, Activity, Code } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const GROUP_ICONS = [Cloud, ShieldAlert, Crosshair, Server, Activity, Code]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader label={t.skills.label} heading={t.skills.heading} subtitle={t.skills.subtitle} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, i) => {
            const Icon = GROUP_ICONS[i % GROUP_ICONS.length]
            return (
              <Reveal
                key={group.name}
                delay={(i % 3) * 80}
                className="rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold">{group.name}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
