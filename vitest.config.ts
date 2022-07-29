import { defineConfig } from 'vitest/config'
import alias from './config/alias'

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  resolve: {
    alias,
  },
  test: {
    include: ['tests/**/*.spec.ts'],
    environment: 'jsdom',
  },
})
