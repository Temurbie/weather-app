<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

import { useAsyncWeather } from "@/composables/asyncWeather";
import { useCityImg } from "@/composables/getCityImg";

import { weatherIcons } from "@/constants/weatherIcons";

const loading =  ref(true);
setTimeout(() => {
  loading.value = false
}, 2000);

const { getWeather, route, mappedKey, date } = useAsyncWeather();
const { imageUrl, getData } = useCityImg();

const weather = ref(null);
const timeDate = computed(()=> date || 0)

const { t } = useI18n();


const temp = computed(()=>{
  return weather.value?.main ?  Math.floor((weather.value.main.temp - 32) * 5 / 9) : 0
})

const weatherIcon = computed(() => {
  return weatherIcons[mappedKey.value] ?? '';
});

const weatherName = computed (()=>{
  return weather.value?.name || ""
})

const windDirection = computed (()=>{
  weather.value?.wind?.deg || 0
})

onMounted(async () => {
  weather.value = await getWeather();
  await getData();  
});
</script>


<template>
 <v-skeleton-loader type="card-avatar" :loading="loading">
     <div class="relative p-3 w-full min-h-[calc(100vh-80px)] text-black">
    <div
      class="absolute dark:bg-gray-800 shadow-lg inset-0 bg-cover bg-center filter blur-sm"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="relative z-10">
      <p class="text-center text-xl p-3" v-if="route.query.preview">
        Ushbu Shaxarni kuzatish uchun "+" tugmasini bosing
      </p>

      <div class="mt-1 text-center flex justify-center flex-col text-2xl">
        <div class="bg-white/35 dark:bg-gray-800 shadow-lg dark:text-white transition-colors duration-300 text-black inline-block mx-auto p-5 rounded">
          <p class="text-7xl">{{ weatherName }}</p>
          <img class="m-auto p-3 w-40 h-auto" :src="weatherIcon" alt="" />
          <p class="text-5xl">{{ temp }} °C</p>
          <p>{{ $t(`weather.${mappedKey}`) }}</p>
        </div>

        <div class="flex justify-center">
          <p>
          {{ timeDate }}
        </p>
        <p> {{ windDirection }}</p>
        </div>
      </div>
    </div>
  </div>
 </v-skeleton-loader>
</template>


