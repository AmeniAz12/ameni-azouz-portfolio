"use client"

import { LanguageProvider } from "@/lib/i18n/language-context"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Certifications } from "@/components/sections/certifications"
import { Education } from "@/components/sections/education"
import { CaseStudies } from "@/components/sections/case-studies"
import { Resume } from "@/components/sections/resume"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <LanguageProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <CaseStudies />
        <Resume />
        <Contact />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
