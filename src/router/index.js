import App from '@/App.vue'
import SiteNavigation from '@/component/SiteNavigation.vue'
import Homeview from '@/view/Homeview.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview
    }
  ],
})

export default router
