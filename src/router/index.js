
import AsynCityView from '@/component/AsynCityView.vue'
import CityView from '@/view/CityView.vue'
import Homeview from '@/view/Homeview.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Homeview
    },
    {
      path: "/weather/:state/:city",
      name: "cityView",
      component: CityView
    },
    {
      path: "/async",
      name: "async",
      component: AsynCityView
    }
  ],
})

export default router
