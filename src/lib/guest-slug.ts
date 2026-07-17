export function normalizeGuestSlug(value: string) {
  return value
    .trim()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1).toLowerCase()}`)
    .join('+')
    .slice(0, 80)
}

export function normalizeGuestSlugParam(value: string) {
  try {
    return normalizeGuestSlug(decodeURIComponent(value))
  } catch {
    return normalizeGuestSlug(value)
  }
}

export function getGuestInvitationPath(slug: string) {
  return `/i/${encodeURIComponent(normalizeGuestSlug(slug))}`
}
