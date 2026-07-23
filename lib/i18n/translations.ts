export type Language = "fr" | "en"

export interface ProjectContent {
  id: string
  title: string
  domain: string
  context: string
  problem: string
  methodology: string[]
  tools: string[]
  findings: string[]
  recommendations: string[]
  result: string
  tags: string[]
  repoUrl: string
}

export interface ExperienceContent {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export interface CertContent {
  name: string
  issuer: string
  year: string
  status: string
}

export interface CaseStudyContent {
  title: string
  type: string
  summary: string
  severity: string
}

export interface EducationContent {
  degree: string
  school: string
  period: string
  detail: string
}

export interface Translation {
  meta: { title: string; description: string }
  nav: {
    home: string
    about: string
    experience: string
    projects: string
    skills: string
    certifications: string
    resume: string
    contact: string
    downloadCv: string
    langLabel: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    description: string
    viewProjects: string
    downloadCv: string
    contact: string
    availability: string
    terminalLines: string[]
  }
  about: {
    label: string
    heading: string
    paragraphs: string[]
    highlights: { value: string; label: string }[]
    focusTitle: string
    focusAreas: string[]
  }
  experience: {
    label: string
    heading: string
    subtitle: string
    items: ExperienceContent[]
  }
  projects: {
    label: string
    heading: string
    subtitle: string
    contextLabel: string
    problemLabel: string
    methodologyLabel: string
    toolsLabel: string
    findingsLabel: string
    recommendationsLabel: string
    resultLabel: string
    viewCaseStudy: string
    closeLabel: string
    repoLabel: string
    items: ProjectContent[]
  }
  skills: {
    label: string
    heading: string
    subtitle: string
    groups: { name: string; items: string[] }[]
  }
  certifications: {
    label: string
    heading: string
    subtitle: string
    items: CertContent[]
  }
  education: {
    label: string
    heading: string
    subtitle: string
    items: EducationContent[]
  }
  caseStudies: {
    label: string
    heading: string
    subtitle: string
    severityLabel: string
    readLabel: string
    items: CaseStudyContent[]
  }
  resume: {
    label: string
    heading: string
    subtitle: string
    download: string
    note: string
  }
  contact: {
    label: string
    heading: string
    subtitle: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    errorRequired: string
    errorEmail: string
    directTitle: string
    location: string
    locationValue: string
  }
  footer: {
    tagline: string
    rights: string
    builtWith: string
    nav: string
    connect: string
  }
}

export const translations: Record<Language, Translation> = {
  fr: {
    meta: {
      title: "Ameni Azouz — Ingénieure Cybersécurité Junior",
      description:
        "Portfolio d'Ameni Azouz, étudiante en dernière année d'ingénierie cybersécurité. Cloud Security, DevSecOps, Application Security et Pentest. Recherche un stage de fin d'études à partir de janvier 2027.",
    },
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      certifications: "Certifications",
      resume: "CV",
      contact: "Contact",
      downloadCv: "Télécharger le CV",
      langLabel: "Choisir la langue",
    },
    hero: {
      badge: "Disponible à partir de janvier 2027",
      title: "Ingénieure Cybersécurité Junior",
      subtitle: "Cloud Security · DevSecOps · Application Security · Pentest",
      description:
        "Étudiante en dernière année du cycle d'ingénieur en cybersécurité, je recherche un stage de fin d'études ou une première opportunité professionnelle à partir de janvier 2027.",
      viewProjects: "Voir mes projets",
      downloadCv: "Télécharger mon CV",
      contact: "Me contacter",
      availability: "Ouverte aux opportunités en France",
      terminalLines: [
        "$ whoami",
        "ameni.azouz — cybersecurity engineer",
        "$ cat focus.txt",
        "cloud-security devsecops appsec pentest",
        "$ status --availability",
        "> stage de fin d'études · janvier 2027",
      ],
    },
    about: {
      label: "À propos",
      heading: "Sécuriser les systèmes, du code au cloud",
      paragraphs: [
        "Je suis Ameni Azouz, étudiante en dernière année du cycle d'ingénieur en cybersécurité. Je conçois et évalue des architectures sécurisées, du pipeline CI/CD jusqu'aux environnements cloud et conteneurisés.",
        "Mon approche combine une solide culture offensive (tests d'intrusion, revue de code) et une rigueur défensive (durcissement, monitoring, conformité). J'aime transformer des vulnérabilités complexes en recommandations claires et actionnables pour les équipes.",
        "Je recherche un stage de fin d'études de 6 mois ou un poste junior en France, à partir de janvier 2027, dans les domaines du Cloud Security, du DevSecOps, de l'Application Security ou du Pentest.",
      ],
      highlights: [
        { value: "6+", label: "Projets de sécurité menés" },
        { value: "7", label: "Domaines de spécialité" },
        { value: "FR / EN", label: "Bilingue professionnel" },
      ],
      focusTitle: "Domaines de spécialité",
      focusAreas: [
        "Cloud Security",
        "DevSecOps",
        "Application Security",
        "Penetration Testing",
        "Security Engineering",
        "Linux & Infrastructure Security",
        "SOC & Security Monitoring",
      ],
    },
    experience: {
      label: "Parcours professionnel",
      heading: "Expérience",
      subtitle: "Contenu d'exemple réaliste — à personnaliser avec vos propres missions.",
      items: [
        {
          role: "Stagiaire Cybersécurité (DevSecOps)",
          company: "SecureCloud Solutions",
          period: "Juin 2025 — Août 2025",
          location: "Paris, France · Hybride",
          bullets: [
            "Intégration de scans de sécurité (SAST, SCA, secrets) dans les pipelines CI/CD Jenkins et GitLab.",
            "Automatisation du durcissement d'images Docker et réduction de 40 % des vulnérabilités critiques.",
            "Rédaction de rapports de vulnérabilités et accompagnement des développeurs sur la remédiation.",
          ],
        },
        {
          role: "Projet académique — Audit de sécurité Kubernetes",
          company: "École d'ingénieurs",
          period: "Sept. 2024 — Janv. 2025",
          location: "France",
          bullets: [
            "Audit complet d'un cluster K3s : RBAC, network policies, secrets et configuration des pods.",
            "Mise en place de politiques de sécurité (Pod Security, admission control) et de scans Trivy.",
            "Présentation des résultats et d'un plan de remédiation priorisé au jury technique.",
          ],
        },
        {
          role: "Membre actif — Club Cybersécurité & CTF",
          company: "Association étudiante",
          period: "2023 — Présent",
          location: "France",
          bullets: [
            "Participation régulière à des compétitions Capture The Flag (web, crypto, forensics).",
            "Animation d'ateliers sur le pentest web et la sécurité Linux pour les nouveaux membres.",
            "Veille technologique continue sur les menaces et les outils de sécurité open source.",
          ],
        },
      ],
    },
    projects: {
      label: "Réalisations",
      heading: "Projets de cybersécurité",
      subtitle: "Une sélection d'études de cas couvrant le cloud, le DevSecOps, l'AppSec et le pentest.",
      contextLabel: "Contexte",
      problemLabel: "Problème de sécurité",
      methodologyLabel: "Méthodologie",
      toolsLabel: "Outils utilisés",
      findingsLabel: "Constats",
      recommendationsLabel: "Recommandations",
      resultLabel: "Résultat",
      viewCaseStudy: "Voir l'étude de cas",
      closeLabel: "Fermer",
      repoLabel: "Dépôt / rapport",
      items: [
        {
          id: "k8s-audit",
          title: "Audit de sécurité Kubernetes & K3s",
          domain: "Cloud & Container Security",
          context:
            "Cluster K3s hébergeant des microservices en production sur des VPS, sans politique de sécurité formalisée.",
          problem:
            "Configurations par défaut permissives, RBAC trop large, absence de network policies et secrets exposés en clair.",
          methodology: [
            "Cartographie du cluster et des workloads",
            "Analyse RBAC et des comptes de service",
            "Scan des images et manifests (Trivy, kube-bench)",
            "Revue des network policies et des secrets",
          ],
          tools: ["Trivy", "kube-bench", "kubectl", "Falco", "K3s"],
          findings: [
            "Rôles cluster-admin attribués à des comptes de service applicatifs.",
            "Aucune NetworkPolicy : communication est-ouest totalement ouverte.",
            "Secrets stockés en variables d'environnement non chiffrées.",
          ],
          recommendations: [
            "Appliquer le principe du moindre privilège sur le RBAC.",
            "Déployer des NetworkPolicies par namespace (deny par défaut).",
            "Externaliser les secrets vers un gestionnaire dédié et activer le chiffrement au repos.",
          ],
          result:
            "Réduction de la surface d'attaque et mise en conformité avec les benchmarks CIS Kubernetes.",
          tags: ["Kubernetes", "K3s", "RBAC", "Trivy", "CIS Benchmark"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "jenkins-devsecops",
          title: "Revue de sécurité d'un pipeline Jenkins (DevSecOps)",
          domain: "DevSecOps",
          context:
            "Pipeline CI/CD Jenkins déployant une application web, sans contrôle de sécurité automatisé.",
          problem:
            "Absence de scans SAST/SCA, secrets codés en dur dans les Jenkinsfile et plugins obsolètes.",
          methodology: [
            "Audit de la configuration Jenkins et des credentials",
            "Intégration de scans SAST, SCA et détection de secrets",
            "Mise en place de quality gates bloquants",
            "Documentation des bonnes pratiques pour les équipes dev",
          ],
          tools: ["Jenkins", "Semgrep", "Trivy", "SonarQube", "gitleaks"],
          findings: [
            "Tokens d'API et mots de passe présents dans le versioning.",
            "Dépendances vulnérables (CVE critiques) non détectées.",
            "Aucune séparation des privilèges entre les jobs.",
          ],
          recommendations: [
            "Migrer les secrets vers le credentials store et rotation régulière.",
            "Ajouter des étapes SAST/SCA bloquantes avant le déploiement.",
            "Mettre à jour et restreindre les plugins, appliquer le RBAC Jenkins.",
          ],
          result:
            "Pipeline sécurisé de bout en bout avec blocage automatique des builds vulnérables.",
          tags: ["Jenkins", "CI/CD", "Semgrep", "SonarQube", "SCA"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "linux-hardening",
          title: "Durcissement de sécurité d'un VPS Linux",
          domain: "Linux & Infrastructure Security",
          context:
            "Serveur VPS Ubuntu exposé sur Internet hébergeant plusieurs services web.",
          problem:
            "Accès SSH par mot de passe, pare-feu inexistant, services inutiles exposés et absence de monitoring.",
          methodology: [
            "Audit de la surface d'exposition (ports, services)",
            "Durcissement SSH et politique de comptes",
            "Configuration du pare-feu et de fail2ban",
            "Mise en place de journalisation et d'alertes",
          ],
          tools: ["Lynis", "UFW", "fail2ban", "auditd", "SSH"],
          findings: [
            "Connexion root SSH autorisée avec authentification par mot de passe.",
            "Ports d'administration ouverts publiquement.",
            "Aucune journalisation centralisée des événements de sécurité.",
          ],
          recommendations: [
            "Authentification SSH par clé uniquement et désactivation du login root.",
            "Politique de pare-feu deny par défaut et bastion pour l'administration.",
            "Déploiement d'auditd et centralisation des logs.",
          ],
          result: "Score de durcissement Lynis passé de 56 à 88 et surface d'attaque fortement réduite.",
          tags: ["Linux", "Hardening", "SSH", "fail2ban", "Lynis"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "web-pentest",
          title: "Test d'intrusion d'une application web",
          domain: "Penetration Testing",
          context:
            "Application web de gestion avec authentification, testée en boîte grise dans un environnement de recette.",
          problem:
            "Vérifier la résistance de l'application aux attaques du top 10 OWASP avant la mise en production.",
          methodology: [
            "Reconnaissance et cartographie des points d'entrée",
            "Tests d'injection, d'authentification et de contrôle d'accès",
            "Exploitation manuelle et validation des impacts",
            "Rédaction d'un rapport priorisé (CVSS)",
          ],
          tools: ["Burp Suite", "OWASP ZAP", "sqlmap", "ffuf", "Nmap"],
          findings: [
            "Injection SQL sur un paramètre de recherche.",
            "IDOR permettant l'accès aux données d'autres utilisateurs.",
            "Cookies de session sans attributs HttpOnly et Secure.",
          ],
          recommendations: [
            "Utiliser des requêtes paramétrées et valider les entrées.",
            "Contrôler les autorisations côté serveur pour chaque ressource.",
            "Renforcer la configuration des cookies et des en-têtes de sécurité.",
          ],
          result:
            "3 vulnérabilités critiques corrigées avant la mise en production, rapport livré au client.",
          tags: ["OWASP Top 10", "Burp Suite", "SQLi", "IDOR", "Pentest"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "secure-code-review",
          title: "Revue de code sécurisée : JWT, MFA, CORS & CSP",
          domain: "Application Security",
          context:
            "API et frontend d'une application Node.js / React gérant des données sensibles.",
          problem:
            "Implémentation d'authentification et d'en-têtes de sécurité potentiellement vulnérable.",
          methodology: [
            "Revue manuelle du flux d'authentification (JWT, MFA)",
            "Analyse de la configuration CORS et des en-têtes",
            "Vérification de la gestion des sessions et des secrets",
            "Recommandations alignées sur les guides OWASP",
          ],
          tools: ["Semgrep", "ESLint security", "OWASP ASVS", "Burp Suite"],
          findings: [
            "JWT sans expiration courte ni rotation, signés avec un secret faible.",
            "CORS configuré avec un wildcard autorisant toutes les origines.",
            "Absence de Content Security Policy stricte.",
          ],
          recommendations: [
            "Réduire la durée de vie des JWT et implémenter le refresh token sécurisé.",
            "Restreindre CORS à une liste d'origines de confiance.",
            "Déployer une CSP stricte et le MFA sur les comptes sensibles.",
          ],
          result:
            "Renforcement de l'authentification et des en-têtes, réduisant les risques XSS et de vol de session.",
          tags: ["JWT", "MFA", "CORS", "CSP", "OWASP ASVS"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "vuln-scanning",
          title: "Analyse de vulnérabilités : Semgrep, Trivy, SonarQube & OWASP ZAP",
          domain: "Security Engineering",
          context:
            "Chaîne d'outils d'analyse de sécurité intégrée à un projet applicatif complet (code, dépendances, conteneurs, runtime).",
          problem:
            "Mettre en place une couverture de sécurité continue du code source jusqu'au runtime.",
          methodology: [
            "SAST du code source avec Semgrep et SonarQube",
            "Analyse des dépendances et conteneurs avec Trivy",
            "Tests dynamiques (DAST) avec OWASP ZAP",
            "Consolidation des résultats et priorisation",
          ],
          tools: ["Semgrep", "Trivy", "SonarQube", "OWASP ZAP"],
          findings: [
            "Détection de dépendances avec CVE critiques.",
            "Failles d'injection et de configuration détectées par SAST.",
            "Vulnérabilités exposées au runtime identifiées par DAST.",
          ],
          recommendations: [
            "Automatiser les scans dans la CI avec des seuils bloquants.",
            "Corriger et suivre les vulnérabilités via un tableau de bord unique.",
            "Établir un processus de triage et de remédiation récurrent.",
          ],
          result:
            "Visibilité complète sur la posture de sécurité et réduction continue de la dette de vulnérabilités.",
          tags: ["SAST", "DAST", "Trivy", "SonarQube", "OWASP ZAP"],
          repoUrl: "https://github.com/ameniazouz",
        },
      ],
    },
    skills: {
      label: "Expertise technique",
      heading: "Compétences techniques",
      subtitle: "Un socle offensif et défensif, du code jusqu'à l'infrastructure cloud.",
      groups: [
        {
          name: "Cloud & DevSecOps",
          items: ["AWS", "Docker", "Kubernetes / K3s", "Jenkins", "GitLab CI", "Terraform", "Trivy"],
        },
        {
          name: "Application Security",
          items: ["OWASP Top 10", "Semgrep", "SonarQube", "OWASP ZAP", "Burp Suite", "Secure Code Review"],
        },
        {
          name: "Pentest & Offensif",
          items: ["Nmap", "Metasploit", "sqlmap", "ffuf", "Wireshark", "CTF"],
        },
        {
          name: "Linux & Infrastructure",
          items: ["Linux Hardening", "Bash", "fail2ban", "Lynis", "auditd", "Networking"],
        },
        {
          name: "SOC & Monitoring",
          items: ["SIEM", "Wazuh", "ELK Stack", "Falco", "Threat Detection"],
        },
        {
          name: "Langages & Outils",
          items: ["Python", "Bash", "JavaScript", "SQL", "Git", "YAML"],
        },
      ],
    },
    certifications: {
      label: "Certifications",
      heading: "Certifications & formations",
      subtitle: "Contenu d'exemple — remplacez par vos certifications réelles ou en cours.",
      items: [
        { name: "eJPT — Junior Penetration Tester", issuer: "INE / eLearnSecurity", year: "2025", status: "Obtenue" },
        { name: "AWS Certified Security – Specialty", issuer: "Amazon Web Services", year: "2026", status: "En cours" },
        { name: "CompTIA Security+", issuer: "CompTIA", year: "2024", status: "Obtenue" },
        { name: "Certified Kubernetes Security (CKS)", issuer: "CNCF", year: "2026", status: "Préparation" },
        { name: "TryHackMe — SOC Level 1", issuer: "TryHackMe", year: "2024", status: "Obtenue" },
        { name: "Google Cybersecurity Certificate", issuer: "Google", year: "2023", status: "Obtenue" },
      ],
    },
    education: {
      label: "Formation",
      heading: "Parcours académique",
      subtitle: "Contenu d'exemple réaliste — à adapter à votre cursus.",
      items: [
        {
          degree: "Cycle d'ingénieur en Cybersécurité (Bac+5)",
          school: "École d'ingénieurs",
          period: "2022 — 2027",
          detail:
            "Spécialisation en sécurité des systèmes, cloud et DevSecOps. Dernière année : recherche d'un stage de fin d'études.",
        },
        {
          degree: "Cycle préparatoire intégré",
          school: "École d'ingénieurs",
          period: "2020 — 2022",
          detail: "Mathématiques, informatique et fondamentaux des réseaux et des systèmes.",
        },
      ],
    },
    caseStudies: {
      label: "Rapports & analyses",
      heading: "Rapports de sécurité & études de cas",
      subtitle: "Exemples de livrables produits lors d'audits et de tests d'intrusion.",
      severityLabel: "Sévérité",
      readLabel: "Lire le résumé",
      items: [
        {
          title: "Rapport de test d'intrusion web",
          type: "Pentest Report",
          summary:
            "Rapport détaillé présentant les vulnérabilités identifiées, leur score CVSS, les preuves de concept et un plan de remédiation priorisé.",
          severity: "Élevée",
        },
        {
          title: "Audit de configuration Kubernetes",
          type: "Cloud Audit",
          summary:
            "Analyse de conformité par rapport aux benchmarks CIS avec recommandations de durcissement du cluster et des workloads.",
          severity: "Moyenne",
        },
        {
          title: "Analyse DevSecOps du pipeline CI/CD",
          type: "DevSecOps Review",
          summary:
            "Évaluation de la chaîne d'intégration continue et intégration de contrôles de sécurité automatisés bloquants.",
          severity: "Moyenne",
        },
      ],
    },
    resume: {
      label: "CV",
      heading: "Téléchargez mon CV",
      subtitle:
        "Un aperçu complet de mon parcours, mes projets et mes compétences en cybersécurité, disponible en PDF.",
      download: "Télécharger le CV (PDF)",
      note: "Le fichier est un espace réservé que vous pourrez remplacer par votre CV réel.",
    },
    contact: {
      label: "Contact",
      heading: "Travaillons ensemble",
      subtitle:
        "Un stage, un poste junior ou une simple discussion ? N'hésitez pas à me contacter.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "E-mail",
      emailPlaceholder: "vous@exemple.com",
      subjectLabel: "Sujet",
      subjectPlaceholder: "Opportunité de stage / poste",
      messageLabel: "Message",
      messagePlaceholder: "Votre message...",
      send: "Envoyer le message",
      sending: "Envoi...",
      success: "Merci ! Votre message a bien été préparé. Je vous répondrai rapidement.",
      errorRequired: "Veuillez remplir tous les champs obligatoires.",
      errorEmail: "Veuillez saisir une adresse e-mail valide.",
      directTitle: "Contact direct",
      location: "Localisation",
      locationValue: "France · Ouverte à la mobilité",
    },
    footer: {
      tagline: "Ingénieure Cybersécurité Junior — Cloud, DevSecOps & Application Security.",
      rights: "Tous droits réservés.",
      builtWith: "Conçu avec Next.js & Tailwind CSS.",
      nav: "Navigation",
      connect: "Réseaux",
    },
  },
  en: {
    meta: {
      title: "Ameni Azouz — Junior Cybersecurity Engineer",
      description:
        "Portfolio of Ameni Azouz, final-year cybersecurity engineering student. Cloud Security, DevSecOps, Application Security and Penetration Testing. Seeking a graduation internship starting January 2027.",
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      resume: "Resume",
      contact: "Contact",
      downloadCv: "Download CV",
      langLabel: "Choose language",
    },
    hero: {
      badge: "Available from January 2027",
      title: "Junior Cybersecurity Engineer",
      subtitle: "Cloud Security · DevSecOps · Application Security · Penetration Testing",
      description:
        "Final-year cybersecurity engineering student seeking a graduation internship or junior opportunity starting in January 2027.",
      viewProjects: "View my projects",
      downloadCv: "Download resume",
      contact: "Contact me",
      availability: "Open to opportunities in France",
      terminalLines: [
        "$ whoami",
        "ameni.azouz — cybersecurity engineer",
        "$ cat focus.txt",
        "cloud-security devsecops appsec pentest",
        "$ status --availability",
        "> graduation internship · january 2027",
      ],
    },
    about: {
      label: "About",
      heading: "Securing systems, from code to cloud",
      paragraphs: [
        "I'm Ameni Azouz, a final-year cybersecurity engineering student. I design and assess secure architectures, from the CI/CD pipeline through to cloud and containerized environments.",
        "My approach blends a strong offensive mindset (penetration testing, code review) with defensive rigor (hardening, monitoring, compliance). I enjoy turning complex vulnerabilities into clear, actionable recommendations for teams.",
        "I'm looking for a 6-month graduation internship or a junior position in France, starting in January 2027, in Cloud Security, DevSecOps, Application Security or Penetration Testing.",
      ],
      highlights: [
        { value: "6+", label: "Security projects delivered" },
        { value: "7", label: "Areas of specialty" },
        { value: "FR / EN", label: "Professional bilingual" },
      ],
      focusTitle: "Areas of specialty",
      focusAreas: [
        "Cloud Security",
        "DevSecOps",
        "Application Security",
        "Penetration Testing",
        "Security Engineering",
        "Linux & Infrastructure Security",
        "SOC & Security Monitoring",
      ],
    },
    experience: {
      label: "Professional journey",
      heading: "Experience",
      subtitle: "Realistic sample content — replace with your own roles and missions.",
      items: [
        {
          role: "Cybersecurity Intern (DevSecOps)",
          company: "SecureCloud Solutions",
          period: "June 2025 — August 2025",
          location: "Paris, France · Hybrid",
          bullets: [
            "Integrated security scanning (SAST, SCA, secrets) into Jenkins and GitLab CI/CD pipelines.",
            "Automated Docker image hardening and reduced critical vulnerabilities by 40%.",
            "Wrote vulnerability reports and coached developers on remediation.",
          ],
        },
        {
          role: "Academic project — Kubernetes Security Audit",
          company: "Engineering School",
          period: "Sept. 2024 — Jan. 2025",
          location: "France",
          bullets: [
            "Full audit of a K3s cluster: RBAC, network policies, secrets and pod configuration.",
            "Implemented security policies (Pod Security, admission control) and Trivy scans.",
            "Presented findings and a prioritized remediation plan to the technical panel.",
          ],
        },
        {
          role: "Active member — Cybersecurity & CTF Club",
          company: "Student association",
          period: "2023 — Present",
          location: "France",
          bullets: [
            "Regular participation in Capture The Flag competitions (web, crypto, forensics).",
            "Ran workshops on web pentesting and Linux security for new members.",
            "Continuous technology watch on threats and open-source security tools.",
          ],
        },
      ],
    },
    projects: {
      label: "Selected work",
      heading: "Cybersecurity projects",
      subtitle: "A selection of case studies across cloud, DevSecOps, AppSec and pentesting.",
      contextLabel: "Context",
      problemLabel: "Security problem",
      methodologyLabel: "Methodology",
      toolsLabel: "Tools used",
      findingsLabel: "Findings",
      recommendationsLabel: "Recommendations",
      resultLabel: "Result",
      viewCaseStudy: "View case study",
      closeLabel: "Close",
      repoLabel: "Repository / report",
      items: [
        {
          id: "k8s-audit",
          title: "Kubernetes & K3s Security Audit",
          domain: "Cloud & Container Security",
          context:
            "A K3s cluster hosting production microservices on VPS servers, with no formalized security policy.",
          problem:
            "Permissive default configurations, overly broad RBAC, missing network policies and secrets exposed in clear text.",
          methodology: [
            "Cluster and workload mapping",
            "RBAC and service account analysis",
            "Image and manifest scanning (Trivy, kube-bench)",
            "Network policy and secrets review",
          ],
          tools: ["Trivy", "kube-bench", "kubectl", "Falco", "K3s"],
          findings: [
            "cluster-admin roles granted to application service accounts.",
            "No NetworkPolicy: east-west traffic fully open.",
            "Secrets stored as unencrypted environment variables.",
          ],
          recommendations: [
            "Apply least-privilege to RBAC.",
            "Deploy per-namespace NetworkPolicies (default deny).",
            "Externalize secrets to a dedicated manager and enable encryption at rest.",
          ],
          result: "Reduced attack surface and alignment with CIS Kubernetes benchmarks.",
          tags: ["Kubernetes", "K3s", "RBAC", "Trivy", "CIS Benchmark"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "jenkins-devsecops",
          title: "Jenkins Pipeline Security Review (DevSecOps)",
          domain: "DevSecOps",
          context: "A Jenkins CI/CD pipeline deploying a web application, with no automated security controls.",
          problem: "No SAST/SCA scanning, hardcoded secrets in Jenkinsfiles and outdated plugins.",
          methodology: [
            "Audit of Jenkins configuration and credentials",
            "Integration of SAST, SCA and secret detection",
            "Setup of blocking quality gates",
            "Documentation of best practices for dev teams",
          ],
          tools: ["Jenkins", "Semgrep", "Trivy", "SonarQube", "gitleaks"],
          findings: [
            "API tokens and passwords committed to version control.",
            "Vulnerable dependencies (critical CVEs) undetected.",
            "No privilege separation between jobs.",
          ],
          recommendations: [
            "Move secrets to the credentials store with regular rotation.",
            "Add blocking SAST/SCA stages before deployment.",
            "Update and restrict plugins, apply Jenkins RBAC.",
          ],
          result: "End-to-end secured pipeline with automatic blocking of vulnerable builds.",
          tags: ["Jenkins", "CI/CD", "Semgrep", "SonarQube", "SCA"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "linux-hardening",
          title: "Linux VPS Security Hardening",
          domain: "Linux & Infrastructure Security",
          context: "An internet-facing Ubuntu VPS hosting several web services.",
          problem: "Password-based SSH access, no firewall, unnecessary exposed services and no monitoring.",
          methodology: [
            "Exposure surface audit (ports, services)",
            "SSH hardening and account policy",
            "Firewall and fail2ban configuration",
            "Logging and alerting setup",
          ],
          tools: ["Lynis", "UFW", "fail2ban", "auditd", "SSH"],
          findings: [
            "Root SSH login allowed with password authentication.",
            "Admin ports publicly open.",
            "No centralized logging of security events.",
          ],
          recommendations: [
            "Key-only SSH authentication and disabled root login.",
            "Default-deny firewall policy and a bastion for administration.",
            "Deploy auditd and centralize logs.",
          ],
          result: "Lynis hardening score raised from 56 to 88 and greatly reduced attack surface.",
          tags: ["Linux", "Hardening", "SSH", "fail2ban", "Lynis"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "web-pentest",
          title: "Web Application Penetration Testing",
          domain: "Penetration Testing",
          context:
            "A management web application with authentication, tested grey-box in a staging environment.",
          problem: "Verify the application's resistance to OWASP Top 10 attacks before going to production.",
          methodology: [
            "Reconnaissance and entry-point mapping",
            "Injection, authentication and access control testing",
            "Manual exploitation and impact validation",
            "Prioritized report writing (CVSS)",
          ],
          tools: ["Burp Suite", "OWASP ZAP", "sqlmap", "ffuf", "Nmap"],
          findings: [
            "SQL injection on a search parameter.",
            "IDOR allowing access to other users' data.",
            "Session cookies missing HttpOnly and Secure attributes.",
          ],
          recommendations: [
            "Use parameterized queries and validate inputs.",
            "Enforce server-side authorization for each resource.",
            "Harden cookie configuration and security headers.",
          ],
          result: "3 critical vulnerabilities fixed before production, report delivered to the client.",
          tags: ["OWASP Top 10", "Burp Suite", "SQLi", "IDOR", "Pentest"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "secure-code-review",
          title: "Secure Code Review: JWT, MFA, CORS & CSP",
          domain: "Application Security",
          context: "The API and frontend of a Node.js / React application handling sensitive data.",
          problem: "Potentially vulnerable authentication and security-header implementation.",
          methodology: [
            "Manual review of the auth flow (JWT, MFA)",
            "CORS and headers configuration analysis",
            "Session and secrets management verification",
            "Recommendations aligned with OWASP guides",
          ],
          tools: ["Semgrep", "ESLint security", "OWASP ASVS", "Burp Suite"],
          findings: [
            "JWTs without short expiry or rotation, signed with a weak secret.",
            "CORS configured with a wildcard allowing all origins.",
            "No strict Content Security Policy.",
          ],
          recommendations: [
            "Shorten JWT lifetime and implement secure refresh tokens.",
            "Restrict CORS to a trusted origin allowlist.",
            "Deploy a strict CSP and MFA on sensitive accounts.",
          ],
          result: "Strengthened authentication and headers, reducing XSS and session-hijacking risk.",
          tags: ["JWT", "MFA", "CORS", "CSP", "OWASP ASVS"],
          repoUrl: "https://github.com/ameniazouz",
        },
        {
          id: "vuln-scanning",
          title: "Vulnerability Scanning: Semgrep, Trivy, SonarQube & OWASP ZAP",
          domain: "Security Engineering",
          context:
            "A security scanning toolchain integrated into a full application project (code, dependencies, containers, runtime).",
          problem: "Establish continuous security coverage from source code through to runtime.",
          methodology: [
            "Source-code SAST with Semgrep and SonarQube",
            "Dependency and container scanning with Trivy",
            "Dynamic testing (DAST) with OWASP ZAP",
            "Findings consolidation and prioritization",
          ],
          tools: ["Semgrep", "Trivy", "SonarQube", "OWASP ZAP"],
          findings: [
            "Detection of dependencies with critical CVEs.",
            "Injection and misconfiguration flaws found by SAST.",
            "Runtime-exposed vulnerabilities identified by DAST.",
          ],
          recommendations: [
            "Automate scans in CI with blocking thresholds.",
            "Fix and track vulnerabilities through a single dashboard.",
            "Establish a recurring triage and remediation process.",
          ],
          result: "Full visibility into security posture and continuous reduction of vulnerability debt.",
          tags: ["SAST", "DAST", "Trivy", "SonarQube", "OWASP ZAP"],
          repoUrl: "https://github.com/ameniazouz",
        },
      ],
    },
    skills: {
      label: "Technical expertise",
      heading: "Technical skills",
      subtitle: "An offensive and defensive foundation, from code to cloud infrastructure.",
      groups: [
        {
          name: "Cloud & DevSecOps",
          items: ["AWS", "Docker", "Kubernetes / K3s", "Jenkins", "GitLab CI", "Terraform", "Trivy"],
        },
        {
          name: "Application Security",
          items: ["OWASP Top 10", "Semgrep", "SonarQube", "OWASP ZAP", "Burp Suite", "Secure Code Review"],
        },
        {
          name: "Pentest & Offensive",
          items: ["Nmap", "Metasploit", "sqlmap", "ffuf", "Wireshark", "CTF"],
        },
        {
          name: "Linux & Infrastructure",
          items: ["Linux Hardening", "Bash", "fail2ban", "Lynis", "auditd", "Networking"],
        },
        {
          name: "SOC & Monitoring",
          items: ["SIEM", "Wazuh", "ELK Stack", "Falco", "Threat Detection"],
        },
        {
          name: "Languages & Tools",
          items: ["Python", "Bash", "JavaScript", "SQL", "Git", "YAML"],
        },
      ],
    },
    certifications: {
      label: "Certifications",
      heading: "Certifications & training",
      subtitle: "Sample content — replace with your real or in-progress certifications.",
      items: [
        { name: "eJPT — Junior Penetration Tester", issuer: "INE / eLearnSecurity", year: "2025", status: "Achieved" },
        { name: "AWS Certified Security – Specialty", issuer: "Amazon Web Services", year: "2026", status: "In progress" },
        { name: "CompTIA Security+", issuer: "CompTIA", year: "2024", status: "Achieved" },
        { name: "Certified Kubernetes Security (CKS)", issuer: "CNCF", year: "2026", status: "Preparing" },
        { name: "TryHackMe — SOC Level 1", issuer: "TryHackMe", year: "2024", status: "Achieved" },
        { name: "Google Cybersecurity Certificate", issuer: "Google", year: "2023", status: "Achieved" },
      ],
    },
    education: {
      label: "Education",
      heading: "Academic background",
      subtitle: "Realistic sample content — adapt it to your own program.",
      items: [
        {
          degree: "Cybersecurity Engineering degree (Master's level)",
          school: "Engineering School",
          period: "2022 — 2027",
          detail:
            "Specialization in systems, cloud and DevSecOps security. Final year: seeking a graduation internship.",
        },
        {
          degree: "Integrated preparatory cycle",
          school: "Engineering School",
          period: "2020 — 2022",
          detail: "Mathematics, computer science and networking & systems fundamentals.",
        },
      ],
    },
    caseStudies: {
      label: "Reports & analysis",
      heading: "Security reports & case studies",
      subtitle: "Examples of deliverables produced during audits and penetration tests.",
      severityLabel: "Severity",
      readLabel: "Read summary",
      items: [
        {
          title: "Web Penetration Test Report",
          type: "Pentest Report",
          summary:
            "A detailed report presenting identified vulnerabilities, their CVSS scores, proof-of-concepts and a prioritized remediation plan.",
          severity: "High",
        },
        {
          title: "Kubernetes Configuration Audit",
          type: "Cloud Audit",
          summary:
            "Compliance analysis against CIS benchmarks with hardening recommendations for the cluster and workloads.",
          severity: "Medium",
        },
        {
          title: "CI/CD Pipeline DevSecOps Analysis",
          type: "DevSecOps Review",
          summary:
            "Assessment of the continuous integration chain and integration of automated, blocking security controls.",
          severity: "Medium",
        },
      ],
    },
    resume: {
      label: "Resume",
      heading: "Download my resume",
      subtitle:
        "A complete overview of my background, projects and cybersecurity skills, available as a PDF.",
      download: "Download resume (PDF)",
      note: "The file is a placeholder you can replace with your real resume.",
    },
    contact: {
      label: "Contact",
      heading: "Let's work together",
      subtitle: "An internship, a junior role, or just a chat? Feel free to reach out.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Internship / role opportunity",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      send: "Send message",
      sending: "Sending...",
      success: "Thank you! Your message is ready. I'll get back to you shortly.",
      errorRequired: "Please fill in all required fields.",
      errorEmail: "Please enter a valid email address.",
      directTitle: "Direct contact",
      location: "Location",
      locationValue: "France · Open to relocation",
    },
    footer: {
      tagline: "Junior Cybersecurity Engineer — Cloud, DevSecOps & Application Security.",
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS.",
      nav: "Navigation",
      connect: "Connect",
    },
  },
}

export const CONTACT = {
  email: "ameni.azouz@example.com",
  github: "https://github.com/ameniazouz",
  linkedin: "https://www.linkedin.com/in/ameniazouz",
}
