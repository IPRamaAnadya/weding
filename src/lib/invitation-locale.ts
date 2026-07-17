export const invitationLocaleValues = ['id', 'en', 'yue', 'ja'] as const

export type InvitationLocale = (typeof invitationLocaleValues)[number]

export const invitationLocaleOptions: Array<{
  value: InvitationLocale
  label: string
  context: string
}> = [
  { value: 'id', label: 'Indonesia', context: 'Bahasa Indonesia · adat Bali' },
  { value: 'en', label: 'English', context: 'International · formal' },
  { value: 'yue', label: '粵語', context: 'Hong Kong · Cantonese' },
  { value: 'ja', label: '日本語', context: 'Japan · formal' },
]

export function normalizeInvitationLocale(value: unknown): InvitationLocale {
  return invitationLocaleValues.includes(value as InvitationLocale)
    ? value as InvitationLocale
    : 'id'
}

export const htmlLanguageByLocale: Record<InvitationLocale, string> = {
  id: 'id',
  en: 'en',
  yue: 'zh-HK',
  ja: 'ja',
}

export const openGraphLocaleByLocale: Record<InvitationLocale, string> = {
  id: 'id_ID',
  en: 'en_US',
  yue: 'zh_HK',
  ja: 'ja_JP',
}
