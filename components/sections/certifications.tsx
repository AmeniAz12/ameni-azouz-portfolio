"use client"

import Image from "next/image"
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

        {[
          { title: t.certifications.achievedTitle, items: t.certifications.items.filter((cert) => ACHIEVED.includes(cert.status)) },
          { title: t.certifications.inProgressTitle, items: t.certifications.items.filter((cert) => !ACHIEVED.includes(cert.status)) },
        ].map((group) => (
          <div key={group.title} className="mt-14">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-primary">{group.title}</h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {group.items.map((cert, i) => {
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
                <div className="min-w-0 flex-1">
                  {cert.certificateImage && (
                    <div className="mb-4 overflow-hidden rounded-lg border border-border bg-secondary/20">
                      <div className="relative aspect-[16/11]">
                        <Image
                          src={cert.certificateImage.src}
                          alt={cert.certificateImage.alt}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <h3 className="text-sm font-semibold leading-snug text-balance">{cert.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    {cert.year && <span className="font-mono text-xs text-muted-foreground">{cert.year}</span>}
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
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-xs text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {cert.verificationUrl && (
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-xs font-medium text-primary">
                      {t.certifications.verification}
                    </a>
                  )}
                </div>
              </Reveal>
            )
          })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
