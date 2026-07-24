import type { Metadata } from "next"
import { ProjectCaseStudyClient } from "./project-case-study-client"
import { translations } from "@/lib/i18n/translations"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params

  if (slug === "backbone-ip-mpls-enterprise") {
    return {
      title: "Enterprise IP/MPLS Backbone Network | Ameni Azzouz",
      description:
        "Case study covering an IP/MPLS backbone with VPN/VRF, OSPF, LDP, MP-BGP, redundant LAN services, AAA/RADIUS, Zabbix, FortiGate HA and DMZ integration.",
      openGraph: {
        title: "Enterprise IP/MPLS Backbone Network | Ameni Azzouz",
        description:
          "GNS3 network engineering project with MPLS VPN, VRF isolation, high availability, monitoring and firewall-secured DMZ.",
        images: ["/images/projects/mpls-backbone/mpls-vpn-topology.webp"],
      },
    }
  }

  if (slug === "agent-tesla-malware-analysis") {
    return {
      title: "Agent Tesla Malware Analysis | Ameni Azzouz",
      description:
        "Case study covering automated, static and dynamic analysis of Agent Tesla malware in an isolated Windows 7 laboratory. Etude de cas d'analyse de malware Agent Tesla.",
      openGraph: {
        title: "Agent Tesla Malware Analysis | Ameni Azzouz",
        description:
          "Automated, static and dynamic analysis of Agent Tesla malware in an isolated Windows 7 laboratory.",
        images: ["/images/projects/agent-tesla/sandbox-behavior.webp"],
      },
    }
  }

  if (slug === "devsecops-fastapi-soc-osint") {
    return {
      title: "DevSecOps Pipeline for a FastAPI SOC/OSINT Application | Ameni Azzouz",
      description:
        "Case study covering a Jenkins DevSecOps pipeline for a FastAPI SOC OSINT application with Bandit, Gitleaks, Trivy, OWASP ZAP, Kubernetes and monitoring.",
      openGraph: {
        title: "DevSecOps Pipeline for a FastAPI SOC/OSINT Application | Ameni Azzouz",
        description:
          "Jenkins CI/CD security pipeline with SAST, secret scanning, Docker image scanning, DAST, Kubernetes and monitoring.",
        images: ["/images/projects/devsecops-jenkins/jenkins-stage-view.webp"],
      },
    }
  }

  if (slug === "python-web-scraping-darty") {
    return {
      title: "Python Web Scraping - Laptop Offer Comparison | Ameni Azzouz",
      description:
        "Portfolio case study for a Python Selenium web scraping project collecting new and used laptop offers and exporting structured product data to CSV.",
      openGraph: {
        title: "Python Web Scraping - Laptop Offer Comparison | Ameni Azzouz",
        description:
          "Python, Selenium, undetected-chromedriver and pandas project for product data extraction and CSV export.",
        images: ["/images/projects/web-scraping/darty-scraping-preview.svg"],
      },
    }
  }

  if (slug === "scanpot-security-monitoring-toolbox") {
    return {
      title: "ScanPot - Scanner, Honeypot and SOC Dashboard | Ameni Azzouz",
      description:
        "Portfolio case study for ScanPot, an educational Flask security toolbox combining XSS/SQLi scanning, honeypot, decoy endpoints, risk scoring and SOC dashboard.",
      openGraph: {
        title: "ScanPot - Scanner, Honeypot and SOC Dashboard | Ameni Azzouz",
        description:
          "Educational Python Flask security monitoring project with scanner, honeypot, decoys, risk scoring and SOC dashboard.",
        images: ["/images/projects/scanpot/scanpot-preview.svg"],
      },
    }
  }

  if (slug === "password-security-analyzer") {
    return {
      title: "Password Security Analyzer | Ameni Azzouz",
      description:
        "Portfolio case study for a Python Flask password security analyzer with local strength scoring, weakness detection and secure coding recommendations.",
      openGraph: {
        title: "Password Security Analyzer | Ameni Azzouz",
        description:
          "Python Flask defensive cybersecurity tool for local password strength analysis and security awareness.",
        images: ["/images/projects/password-analyzer/password-analyzer-preview.svg"],
      },
    }
  }

  if (slug === "network-recon-analyzer") {
    return {
      title: "Network Recon Analyzer | Ameni Azzouz",
      description:
        "Portfolio case study for an educational Python network reconnaissance tool covering port scanning, service detection and banner grabbing on authorized targets.",
      openGraph: {
        title: "Network Recon Analyzer | Ameni Azzouz",
        description:
          "Educational Python network security project for authorized reconnaissance, service detection and banner grabbing.",
        images: ["/images/projects/network-recon/network-recon-preview.svg"],
      },
    }
  }

  if (slug === "ms17-010-eternalblue-lab") {
    return {
      title: "Windows Security Assessment - MS17-010/EternalBlue | Ameni Azzouz",
      description:
        "Case study covering SMB enumeration, MS17-010 validation and controlled EternalBlue exploitation in an isolated VMware Host-Only Windows 7 laboratory.",
      openGraph: {
        title: "Windows Security Assessment - MS17-010/EternalBlue | Ameni Azzouz",
        description:
          "SMB enumeration, MS17-010 validation and controlled EternalBlue exploitation in an isolated Windows 7 lab.",
        images: ["/images/projects/eternalblue/ms17-010-validation.webp"],
      },
    }
  }

  if (slug === "wazuh-siem-lab") {
    return {
      title: "Wazuh SIEM SOC Lab | Ameni Azzouz",
      description:
        "Case study covering an open-source SOC lab with Wazuh Manager, Wazuh agents, Suricata IDS and Kali Linux attack simulation.",
      openGraph: {
        title: "Wazuh SIEM SOC Lab | Ameni Azzouz",
        description:
          "Open-source SOC lab for centralized log collection, Suricata IDS alerts and Wazuh dashboard monitoring.",
        images: ["/images/projects/wazuh-siem/dashboard-preview.svg"],
      },
    }
  }

  if (slug === "owasp-juice-shop-lab") {
    return {
      title: "OWASP Juice Shop SQL Injection Lab | Ameni Azzouz",
      description:
        "Case study covering OWASP Top 10 A03:2021 - Injection with a controlled SQL injection authentication bypass on OWASP Juice Shop.",
      openGraph: {
        title: "OWASP Juice Shop SQL Injection Lab | Ameni Azzouz",
        description:
          "Controlled OWASP Juice Shop lab demonstrating SQL injection, login bypass, impact and secure coding recommendations.",
        images: ["/images/projects/owasp-juice-shop/login-payload.webp"],
      },
    }
  }

  return {
    title: "Project case study | Ameni Azzouz",
    description: "Cybersecurity project case study by Ameni Azzouz.",
  }
}

export function generateStaticParams() {
  return translations.en.projects.items.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  return <ProjectCaseStudyClient slug={slug} />
}
