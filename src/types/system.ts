import { UseDarkOptions } from '@vueuse/core'

export const useDarkOption: UseDarkOptions = {
  selector: 'html',
  valueDark: 'tw-dark',
}

/**
 * Lang code table: http://www.lingoes.net/en/translator/langcode.htm
 */
export type SupportedLang = 'en' | 'ko'
export const supportedLangList: (SupportedLang | string)[] = ['en', 'ko']
export const DEFAULT_LANG: SupportedLang = 'en'
