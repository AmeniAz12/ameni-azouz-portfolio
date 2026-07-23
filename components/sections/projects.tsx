"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight, X } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n/language-context"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"
import type { ProjectContent } from "@/lib/i18n/translations"

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  )
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: ProjectContent
  onClose: () => void
}) {
  const { t } = useLanguage()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  const blocks: { label: string; items: string[] }[] = [
    { label: t.projects.methodologyLabel, items: project.methodology },
    { label: t.projects.findingsLabel, items: project.findings },
    { label: t.projects.recommendationsLabel, items: project.recommendations },
  ]

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="relative my-6 w-full max-w-2xl rounded-2xl border border-border bg-card shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between gap-4 rounded-t-2xl border-b border-border bg-card/95 px-6 py-4 backdrop-blur">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-primary">{project.domain}</p>
            <h3 id="case-study-title" className="mt-1 text-lg font-bold">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.projects.closeLabel}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 px-6 py-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wide text-accent">{t.projects.contextLabel}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.context}</p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wide text-accent">{t.projects.problemLabel}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
            </div>
          </div>

          {blocks.map((block) => (
            <div key={block.label}>
              <h4 className="font-mono text-xs uppercase tracking-wide text-accent">{block.label}</h4>
              <ul className="mt-2 space-y-1.5">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-accent">{t.projects.toolsLabel}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Tag key={tool}>{tool}</Tag>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
            <h4 className="font-mono text-xs uppercase tracking-wide text-primary">{t.projects.resultLabel}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{project.result}</p>
          </div>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <GithubIcon className="h-4 w-4" />
            {t.projects.repoLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<ProjectContent | null>(null)

  return (
    <section id="projects" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader label={t.projects.label} heading={t.projects.heading} subtitle={t.projects.subtitle} />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project, i) => (
            <Reveal
              as="article"
              key={project.id}
              delay={(i % 3) * 90}
              className="group flex flex-col rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-primary">{project.domain}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-balance">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {project.context}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 4).map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-2 border-t border-border/60 pt-4">
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {t.projects.viewCaseStudy}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — ${t.projects.repoLabel}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <CaseStudyModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
