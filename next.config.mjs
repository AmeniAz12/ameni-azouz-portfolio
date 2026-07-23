/* global process */

const isGithubPages = process.env.GITHUB_PAGES === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/ameni-azouz-portfolio" : undefined,
  assetPrefix: isGithubPages ? "/ameni-azouz-portfolio/" : undefined,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
