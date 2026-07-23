"use client"

import { Download, FileText } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { CONTACT } from "@/lib/i18n/translations"
import { withBasePath } from "@/lib/site-paths"
import { Reveal } from "@/components/reveal"

export function Resume() {
  const { t } = useLanguage()

  return (
    <section id="resume" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 text-center sm:p-12">
          <div
            className="pointer-events-none absolute inset-0 bg-grid opacity-30"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <FileText className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">{`// ${t.resume.label}`}</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {t.resume.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {t.resume.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={withBasePath(CONTACT.cvFr)}
                download={CONTACT.cvFrDownloadName}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {t.resume.downloadFr}
              </a>
              <a
                href={withBasePath(CONTACT.cvEn)}
                download={CONTACT.cvEnDownloadName}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {t.resume.downloadEn}
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{t.resume.missing}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
