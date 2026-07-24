/* global process */

const isGithubPages = process.env.GITHUB_PAGES === "true"
const githubPagesBasePath = "/ameni-azouz-portfolio"

if (isGithubPages) {
  process.env.NEXT_PUBLIC_BASE_PATH = githubPagesBasePath
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGithubPages ? `${githubPagesBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
