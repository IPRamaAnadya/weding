export function normalizeIndonesianPhone(value?: string | null) {
  if (!value?.trim()) return null

  let digits = value.replace(/\D/g, '')
  if (digits.startsWith('0062')) digits = digits.slice(2)
  if (digits.startsWith('0')) digits = `62${digits.slice(1)}`
  else if (digits.startsWith('8')) digits = `62${digits}`

  return /^628\d{7,11}$/.test(digits) ? digits : null
}
