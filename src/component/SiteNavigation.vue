<template>
   <header class="sticky  top-0 bg-weather-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
           <RouterLink :to="{ name: 'home' }" class="flex items-center gap-3 flex-1">
                <i class="fa-solid fa-sun text-2xl"></i>
                <p class="text-2xl">The Local Weather</p>
            </RouterLink>
            <div class="flex gap-3 flex-1 justify-end ">
                <!-- <i @click="toggleModal" class="fa-solid fa-circle-info text-xl
                hover:text-weather-secondary duration-150 cursor-pointer"></i> -->
                <i @click="addData" class="fa-solid fa-plus text-xl
                hover:text-weather-secondary duration-150 cursor-pointer"></i>
            </div>
            <BaseModel :modalLogic="modalLogic" @close-modal="toggleModal">
                <h1 class="text-red-700">salom men modulman</h1>
            </BaseModel>
        </nav>
   </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import BaseModel from './BaseModel.vue';
import {ref } from 'vue'
import { useRouteInfo } from '@/stories/useRoutInfo';
import swal from 'sweetalert'

const routeInfo = useRouteInfo()

const modalLogic = ref(null);
const toggleModal = () =>{
    
    modalLogic.value = !modalLogic.value
    console.log("bosildi", modalLogic);
}
function addData(){
   
    routeInfo.setshareRouteInfo(routeInfo.routeInfo)
}
</script>

