"use client"

import { Mail, ShieldCheck } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n/language-context"
import { CONTACT } from "@/lib/i18n/translations"

const LINKS = ["about", "education", "projects", "experience", "skills", "certifications", "contact"] as const

export function SiteFooter() {
  const { t } = useLanguage()

  const labels: Record<(typeof LINKS)[number], string> = {
    about: t.nav.about,
    education: t.nav.education,
    projects: t.nav.projects,
    experience: t.nav.experience,
    skills: t.nav.skills,
    certifications: t.nav.certifications,
    contact: t.nav.contact,
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
            <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            Ameni Azzouz
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{t.footer.nav}</h3>
          <ul className="mt-3 space-y-2">
            {LINKS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-sm text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                >
                  {labels[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{t.footer.connect}</h3>
          <div className="mt-3 flex gap-3">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label={t.contact.emailLabel}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>&copy; {new Date().getFullYear()} Ameni Azzouz. {t.footer.rights}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
