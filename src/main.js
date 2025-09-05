import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import router from './router'
import './assets/tailwind.css'
import uz from '@/locales/uz.json'
import eng from '@/locales/eng.json'
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

const vuetife = createVuetify({
    components,
    directives,
})
const pinia = createPinia()

const i18n = createI18n({
    locale: 'uz',
    fallbackLocale: 'eng',
    messages :{uz, eng}
})

app.use(router)
app.use(pinia)
app.use(i18n)
app.use(vuetife);

app.mount('#app')
