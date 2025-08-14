

<template>
  <div class="flex flex-row gap-4">
    <div
      v-for="item in store.weatherData"
      :key="item.id"
      class="rounded-xl border border-white/20 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 
             w-64 min-h-[150px] p-4 shadow-lg shadow-black/40 
             flex flex-col items-center justify-center gap-2
             hover:scale-105 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 cursor-pointer" 
    >
      <p>{{ item.name }}</p>
      <p>{{ item.main.temp }}°C</p>
      <img class="w-9 h-9" :src="getImg(item.weather[0].description)" alt="">
      <p>{{ item.weather[0].description }}</p>
      <p>{{ item.wind.speed }}</p>
    </div>
  </div>
</template>
<script setup>
import { useRouteInfo } from '@/stories/useRoutInfo'
// import brokenCloudy from '../assests/png-clipart-sun-orange-sunlight.png'
import brokenCloudy from '../assests/icons8-clear-sky-64.png'
import clearSky from '../assests/png-clipart-sun-orange-sunlight.png' 

const store = useRouteInfo()

// Rasm tanlash funksiyasi
const getImg = (description) => {
  switch (description) {
    case "clear sky":
      return clearSky;
    case "broken clouds":
      return brokenCloudy;
    default:
      return defaultImg;
  }
}
</script>