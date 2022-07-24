import { Theme } from '@/types/system'
import { LocalStorageKey } from '@/types/storage'

/**
 * Get current theme
 * @return Theme - if it's dark mode, return 'dark'. Else, return light. Default return is "light"
 */
export const getTheme = (): Theme => {
  if (localStorage.getItem(LocalStorageKey.Theme)) {
    return localStorage.getItem(LocalStorageKey.Theme) as Theme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/**
 * Initialize theme, It's currently called at App.vue
 */
export const initTheme = () => {
  // Get current theme
  const theme = getTheme()

  // Add "dark" class to body
  if (theme === 'dark') {
    // Add dark class
    document.documentElement.classList.add('tw-dark')
  } else {
    // Remove dark class
    document.documentElement.classList.remove('tw-dark')
  }
}

/**
 * Set theme based on parameter
 * @param theme - dark: dark mode, light: light mode, preference: change to mode by users
 */
export const setTheme = (theme: Theme | 'preference') => {
  // Whenever the user explicitly chooses to respect the OS preference
  if (theme === 'preference') {
    localStorage.removeItem(LocalStorageKey.Theme)
  } else {
    localStorage.setItem(LocalStorageKey.Theme, theme)
  }

  // Initialize theme again
  initTheme()
}
