/**
 * System Theme
 */
export type Theme = 'dark' | 'light'

/**
 * Lang code table: http://www.lingoes.net/en/translator/langcode.htm
 */
export type SupportedLang = 'en' | 'ko'
export const supportedLangList: (SupportedLang | string)[] = ['en', 'ko']
export const DEFAULT_LANG: SupportedLang = 'en'
