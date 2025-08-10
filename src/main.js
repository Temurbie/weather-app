import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assests/tailwind.css'
import { createI18n } from 'vue-i18n'
import uz from '@/locales/uz.json'
import eng from '@/locales/eng.json'

const app = createApp(App)
const i18n = createI18n({
    locale: 'uz',
    fallbackLocale: 'eng',
    messages :{uz, eng}
})

app.use(router)
app.use(i18n) 

app.mount('#app')
