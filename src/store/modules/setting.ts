import { defineStore } from 'pinia'
import { DEFAULT_LANG, SupportedLang, Theme } from '@/types/system'
import { getTheme, initTheme, setTheme } from '@/utils/theme'
import { getShortLang, getSystemLang, setLang } from '@/utils/lang'
import { useI18n } from 'vue-i18n'
import i18n from '@/locales'

export interface SettingState {
  theme: Theme | null
  lang: SupportedLang | null
}

const useSettingStore = defineStore('setting', {
  state: (): SettingState => {
    return {
      theme: null,
      lang: null,
    }
  },
  getters: {
    /**
     * Get current Theme
     * @param state
     */
    Theme (state) {
      return state.theme || getTheme()
    },
    /**
     * Get current Theme
     * @param state
     */
    Lang (state) {
      return state.lang || DEFAULT_LANG
    },
  },
  actions: {
    initSetting() {
      // Initialize theme
      initTheme()
      this.theme = getTheme()
      // Initialize current lang
      this.lang = getSystemLang()
    },
    /**
     * Set Theme
     * @param theme
     */
    setTheme (theme: Theme | 'preference') {
      setTheme(theme)
      this.theme = getTheme()
    },
    /**
     * Set Language
     * @param lang - supported language or preference
     */
    setLang (lang: SupportedLang | 'preference') {

      setLang(lang)
      this.lang = getShortLang() as SupportedLang
      i18n.global.locale = this.lang
    },
  }
})


export default useSettingStore
