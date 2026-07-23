"use client"

import { useEffect, useState } from "react"
import { Download, Menu, ShieldCheck, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"
import { CONTACT } from "@/lib/i18n/translations"
import { withBasePath } from "@/lib/site-paths"

const SECTIONS = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "certifications",
  "education",
  "languages",
  "resume",
  "contact",
] as const

export function SiteNav() {
  const { lang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("home")
  const currentCv = lang === "fr" ? CONTACT.cvFr : CONTACT.cvEn
  const currentCvDownloadName = lang === "fr" ? CONTACT.cvFrDownloadName : CONTACT.cvEnDownloadName

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const navLabels: Record<(typeof SECTIONS)[number], string> = {
    home: t.nav.home,
    about: t.nav.about,
    experience: t.nav.experience,
    projects: t.nav.projects,
    skills: t.nav.skills,
    certifications: t.nav.certifications,
    education: t.nav.education,
    languages: t.caseStudies.label,
    resume: t.nav.resume,
    contact: t.nav.contact,
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label={t.nav.home}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <a
          href="#home"
          className="flex items-center gap-2 rounded-md font-mono text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
          <span>Ameni Azzouz</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active === id ? "text-primary" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {navLabels[id]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href={withBasePath(currentCv)}
            download={currentCvDownloadName}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t.nav.downloadCv}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : t.nav.menuLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-4 py-4 sm:px-6">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active === id
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {navLabels[id]}
              </a>
            ))}
            <a
              href={withBasePath(currentCv)}
              download={currentCvDownloadName}
              onClick={() => setOpen(false)}
              className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {t.nav.downloadCv}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
