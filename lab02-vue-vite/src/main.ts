// import './assets/main.css'

import './assets/style.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { inject } from '@vercel/analytics'
import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'
const app = createApp(App)

inject()
app.use(createPinia())
app.use(router)

app.mount('#app')
