import { createApp } from 'vue'
import App from './App.vue'
/* Pinia */
import pinia from '@/store'
/* Router */
import router from '@/router'
/* Add Global styles */
import '@/styles/index.scss'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
