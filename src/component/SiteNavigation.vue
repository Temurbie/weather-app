<script setup lang="ts">

import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import doSwal from '@/services/doSwal'

import { useRouteInfo } from '@/storie/useRoutInfo'
import { useTheme } from "../storie/useTheme"
import BaseModal from './BaseModal.vue'
import { guideText } from '@/constants/guideText';

const modalLogic = ref(false)
const routeInfo = useRouteInfo()
const route = useRoute()
const pickTheme = useTheme();




watch(
  () => routeInfo.alertUchun,
  
  (yangiQiymat) => {
    if (yangiQiymat) {
      doSwal("Shaxar Qushildi");
      routeInfo.restAlert();
    }
  }
)

const toggleModal = () => {
  modalLogic.value = !modalLogic.value
}

function addData() {
  routeInfo.setshareRouteInfo(routeInfo.routeInfo)
}

function toggleTheme(){
  pickTheme.toggleTheme();
}

</script>


<template>
  <header class="sticky top-0 bg-weather-primary dark:bg-gray-800 shadow-lg transition-colors duration-300">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 py-6 text-black dark:text-white transition-colors duration-300">
      
      <div @click="toggleTheme" class="cursor-pointer text-black dark:text-white text-2xl transition-colors duration-300">
        <i v-if="pickTheme.isDark" class="fa-solid fa-sun"></i>
        <i v-else class=" fa-solid fa-moon"></i>
      </div>

      <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3 flex-1">
        <i class="fa-solid fa-cloud-sun text-2xl dark:text-yellow-400 transition-colors duration-300"></i>
        <p class="text-2xl">The Local Weather</p>
      </RouterLink>
      <div class="flex gap-3 flex-1 justify-end">
        <i 
        v-if="route.name !== 'cityView'"
          @click="toggleModal" 
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary dark:hover:text-yellow-300 transition-colors duration-150 cursor-pointer"
        ></i>
        <i 
          v-if="route.name !== 'home'" 
          @click="addData" 
          class="fa-solid fa-plus text-xl hover:text-weather-secondary dark:hover:text-yellow-300 transition-colors duration-150 cursor-pointer"
        ></i>
      </div>

      <BaseModal :modalLogic="modalLogic" @close-modal="toggleModal">
        <div class="mt-10 text-black dark:bg-gray-800 transition-colors duration-300 p-3 dark:text-white" v-html="guideText"></div>
      </BaseModal>
    </nav>
  </header>
</template>
