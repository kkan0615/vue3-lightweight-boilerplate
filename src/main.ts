import { createApp } from 'vue'
import App from './App.vue'
/* Pinia */
import pinia from '@/store'
/* Router */
import router from '@/router'
/* Add Global styles */
import '@/styles/index.scss'
/* I18n */
import i18n from '@/locales'

const app = createApp(App)
app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
