import { defineStore } from 'pinia'

export interface SettingState {
  isDark: boolean,
}

const useSettingStore = defineStore('setting', {
  state: (): SettingState => {
    return {
      isDark: true,
    }
  },
  getters: {
    IsDark(state) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },
  actions: {
    /**
     * init setting
     */
    initSetting () {
      // Set dark mode
      // @TODO: Add get from localStorage
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    },
  }
})


export default useSettingStore
