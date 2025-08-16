import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import './assests/tailwind.css'
import uz from '@/locales/uz.json'
import eng from '@/locales/eng.json'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
const i18n = createI18n({
    locale: 'uz',
    fallbackLocale: 'eng',
    messages :{uz, eng}
})

app.use(router)
app.use(pinia)
app.use(i18n) 

app.mount('#app')
