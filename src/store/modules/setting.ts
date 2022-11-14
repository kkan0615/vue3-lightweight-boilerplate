import { defineStore } from 'pinia'
import { DEFAULT_LANG, SupportedLang } from '@/types/system'
import { getShortLang, getSystemLang, setLang } from '@/utils/lang'

export interface SettingState {
  lang: SupportedLang | null
}

const useSettingStore = defineStore('setting', {
  state: (): SettingState => {
    return {
      lang: null,
    }
  },
  getters: {
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
      // Initialize current lang
      this.lang = getSystemLang()
    },
    /**
     * Set Language
     * @param lang - supported language or preference
     */
    setLang (lang: SupportedLang) {
      setLang(lang)
      this.lang = getShortLang() as SupportedLang
    },
  }
})


export default useSettingStore
