import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import alias from './config/alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: false
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'vue3-boilerplate',
        short_name: 'boilerplate',
        start_url: '/',
        description: 'boilerplate!',
        theme_color: '#41B883',
        display: 'standalone',
        icons: [
          {
            src: './logo.png',
            sizes: '200x200',
          },
        ]
      },
    })
  ],
  server: {
    open: true,
  },
  resolve: {
    alias,
  },
})
