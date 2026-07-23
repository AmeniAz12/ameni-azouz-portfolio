"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, FileText, PlayCircle } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { LanguageProvider, useLanguage } from "@/lib/i18n/language-context"
import { translations, type Language, type ProjectContent } from "@/lib/i18n/translations"

function findProject(slug: string, lang: Language): ProjectContent | undefined {
  return translations[lang].projects.items.find((project) => project.slug === slug)
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function SectionBlock({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-2xl border border-border bg-card/60 p-5 sm:p-6">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

function ActionLink({
  href,
  label,
  icon,
}: {
  href?: string
  label: string
  icon: React.ReactNode
}) {
  if (!href) return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {icon}
      {label}
      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
    </a>
  )
}

function DemoVideo({ video }: { video: NonNullable<ProjectContent["demoVideo"]> }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [rate, setRate] = useState(1)
  const rates = [0.75, 1, 1.25, 1.5, 2]

  function changeRate(nextRate: number) {
    setRate(nextRate)
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate
    }
  }

  return (
    <SectionBlock title={video.title}>
      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-black">
        <video ref={videoRef} src={video.src} controls preload="metadata" className="aspect-video w-full" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {rates.map((speed) => (
          <button
            key={speed}
            type="button"
            onClick={() => changeRate(speed)}
            aria-pressed={rate === speed}
            className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 font-mono text-xs transition-colors hover:border-primary/50 hover:text-primary aria-pressed:border-primary aria-pressed:bg-primary/10 aria-pressed:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {speed}x
          </button>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{video.caption}</p>
    </SectionBlock>
  )
}

function ProjectCaseStudy({ slug }: { slug: string }) {
  const { lang, t } = useLanguage()
  const project = findProject(slug, lang)

  if (!project) {
    return (
      <main className="mx-auto min-h-screen max-w-3xl px-4 py-28 sm:px-6">
        <Link href="/#projects" className="inline-flex items-center gap-2 rounded-md text-sm text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t.projects.details.back}
        </Link>
        <h1 className="mt-8 text-3xl font-bold">Project not found</h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t.projects.details.back}
        </Link>

        <header className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-primary">{project.category}</p>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{project.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              <ActionLink href={project.githubUrl} label={t.projects.githubLabel} icon={<GithubIcon className="h-4 w-4" />} />
              <ActionLink href={project.videoUrl} label={t.projects.videoLabel} icon={<PlayCircle className="h-4 w-4" aria-hidden="true" />} />
              <ActionLink href={project.reportUrl} label={t.projects.reportLabel} icon={<FileText className="h-4 w-4" aria-hidden="true" />} />
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-card">
            <Image src={project.coverImage} alt={project.coverAlt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-contain" />
          </div>
        </header>

        <div className="mt-10 grid gap-5">
          <SectionBlock title={lang === "fr" ? "Objectif du projet" : "Project objective"}>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.objectiveText ?? project.overview}</p>
          </SectionBlock>

          <SectionBlock title={t.projects.details.labEnvironment}>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.labEnvironment}</p>
            {project.environmentItems && <BulletList items={project.environmentItems} />}
          </SectionBlock>

          <SectionBlock title={t.projects.details.methodology}>
            {project.methodologySteps ? (
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {project.methodologySteps.map((step, index) => (
                  <article key={step.title} className="rounded-xl border border-border bg-secondary/25 p-4">
                    <p className="font-mono text-xs text-primary">0{index + 1}</p>
                    <h3 className="mt-2 font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </article>
                ))}
              </div>
            ) : (
              <BulletList items={project.methodology} />
            )}
          </SectionBlock>

          <SectionBlock title={lang === "fr" ? "Resultats cles" : "Key findings"}>
            {project.keyFindings ? (
              <div className="mt-5 grid gap-4">
                {project.keyFindings.map((finding) => (
                  <article key={finding.observation} className="rounded-xl border border-border bg-secondary/20 p-4">
                    <h3 className="font-mono text-xs uppercase tracking-wide text-primary">
                      {lang === "fr" ? "Observation" : "Observation"}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{finding.observation}</p>
                    <h3 className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">
                      {lang === "fr" ? "Interpretation" : "Interpretation"}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{finding.interpretation}</p>
                    <h3 className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">
                      {lang === "fr" ? "Impact" : "Impact"}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{finding.impact}</p>
                  </article>
                ))}
              </div>
            ) : (
              <BulletList items={project.results} />
            )}
          </SectionBlock>

          <SectionBlock title={t.projects.details.screenshots}>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.screenshots[0]}</p>
            {project.screenshotImages && (
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.screenshotImages.map((screenshot) => (
                  <figure key={screenshot.src} className="overflow-hidden rounded-xl border border-border bg-secondary/20">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                    <figcaption className="border-t border-border px-3 py-2 text-xs text-muted-foreground">
                      {screenshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </SectionBlock>

          {project.demoVideo && <DemoVideo video={project.demoVideo} />}

          <div className="grid gap-5 lg:grid-cols-2">
            <SectionBlock title={t.projects.details.riskImpact}>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.riskImpact}</p>
              {project.risks && <BulletList items={project.risks} />}
            </SectionBlock>
            <SectionBlock title={t.projects.details.recommendations}>
              <BulletList items={project.recommendations} />
            </SectionBlock>
          </div>

          <SectionBlock title={t.projects.details.skillsDeveloped}>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.skillsDeveloped.map((skill) => (
                <span key={skill} className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/90">
                  {skill}
                </span>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock title={t.projects.details.disclaimer}>
            <p className="mt-3 text-sm leading-relaxed text-foreground">{project.disclaimer}</p>
          </SectionBlock>
        </div>
      </div>
    </main>
  )
}

export function ProjectCaseStudyClient({ slug }: { slug: string }) {
  return (
    <LanguageProvider>
      <ProjectCaseStudy slug={slug} />
    </LanguageProvider>
  )
}
