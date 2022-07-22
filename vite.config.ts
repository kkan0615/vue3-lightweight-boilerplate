import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: false
    }),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'vue3-boilerplate',
        short_name: 'boilerplate',
        start_url: './',
        description: 'boilerplate!',
        theme_color: '#41B883',
        display: 'standalone',
        icons: [
          {
            src: './favicon.ico',
            sizes: '32x32',
          },
        ]
      },
    })
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: [{
      find: '@',
      replacement: fileURLToPath(new URL('./src', import.meta.url)),
    }]
  }
})
