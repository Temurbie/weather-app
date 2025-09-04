<script setup lang="ts">

import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import doSwal from '@/services/doSwal'

import { useRouteInfo } from '@/storie/useRoutInfo'
import BaseModal from './BaseModal.vue'
import { guideText } from '@/constants/guideText';

const modalLogic = ref(false)
const routeInfo = useRouteInfo()
const route = useRoute()




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
</script>


<template>
   <header class="sticky  top-0 bg-weather-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-black py-6">
           <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3 flex-1">
                <i class="fa-solid fa-sun text-2xl"></i>
                <p class="text-2xl">The Local Weather</p>
            </RouterLink>
            <div class="flex gap-3 flex-1 justify-end ">
                <i @click="toggleModal" class="fa-solid fa-circle-info text-xl
                hover:text-weather-secondary duration-150 cursor-pointer"></i>
                <i v-if="route.name !=='home'" @click="addData" class="fa-solid fa-plus text-xl
                hover:text-weather-secondary duration-150 cursor-pointer"></i>
            </div>
            <BaseModal :modalLogic="modalLogic" @close-modal="toggleModal">
                <div class="text-black-700 mt-10" v-html="guideText">
                  
                </div>
            </BaseModal>
        </nav>
   </header>
</template>

