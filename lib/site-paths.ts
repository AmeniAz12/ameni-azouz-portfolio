export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function withBasePath(path: string | undefined): string | undefined {
  if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
    return path
  }

  if (siteBasePath && path.startsWith(siteBasePath)) {
    return path
  }

  return path.startsWith("/") ? `${siteBasePath}${path}` : path
}
