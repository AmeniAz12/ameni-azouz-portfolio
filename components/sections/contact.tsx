"use client"

import { useState } from "react"
import { Download, Mail, MapPin, Send, CircleCheckBig } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { useLanguage } from "@/lib/i18n/language-context"
import { CONTACT } from "@/lib/i18n/translations"
import { withBasePath } from "@/lib/site-paths"
import { Reveal } from "@/components/reveal"
import { SectionHeader } from "@/components/section-header"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { lang, t } = useLanguage()
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const currentCv = lang === "fr" ? CONTACT.cvFr : CONTACT.cvEn
  const currentCvDownloadName = lang === "fr" ? CONTACT.cvFrDownloadName : CONTACT.cvEnDownloadName

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(t.contact.errorRequired)
      return
    }
    if (!EMAIL_RE.test(form.email)) {
      setError(t.contact.errorEmail)
      return
    }

    const subject = encodeURIComponent(form.subject || `Contact - ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputClass =
    "w-full rounded-lg border border-input bg-secondary/30 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

  return (
    <section id="contact" className="relative border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader label={t.contact.label} heading={t.contact.heading} subtitle={t.contact.subtitle} />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-4">
            <h3 className="font-mono text-sm font-semibold text-foreground">{t.contact.directTitle}</h3>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">{t.contact.emailLabel}</span>
                <span className="block truncate text-sm text-foreground">{CONTACT.email}</span>
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">{t.contact.location}</span>
                <span className="block text-sm text-foreground">{t.contact.locationValue}</span>
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card/60 p-4 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card/60 p-4 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <LinkedinIcon className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
            <a
              href={withBasePath(currentCv)}
              download={currentCvDownloadName}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 p-4 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              {t.contact.downloadCv}
            </a>
          </Reveal>

          <Reveal delay={120}>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
                <CircleCheckBig className="h-10 w-10 text-primary" aria-hidden="true" />
                <p className="mt-4 text-pretty leading-relaxed text-foreground">{t.contact.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card/60 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      {t.contact.nameLabel} <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder={t.contact.namePlaceholder}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      {t.contact.emailLabel} <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder={t.contact.emailPlaceholder}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={update("subject")}
                    placeholder={t.contact.subjectPlaceholder}
                    className={inputClass}
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    {t.contact.messageLabel} <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    className={`${inputClass} resize-y`}
                    required
                  />
                </div>

                {error && (
                  <p role="alert" className="mt-3 text-sm text-destructive">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {t.contact.send}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
