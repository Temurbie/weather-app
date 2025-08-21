<script setup>
import { ref, onMounted, computed } from "vue";
import { useAsyncWeather } from "@/composables/asyncWeather";
import { useCityImg } from "@/composables/getCityImg";
import { useI18n } from "vue-i18n";
import brokenCloud from "../assests/icons8-clear-sky-64.png";
import clearSkyIcon from "../assests/png-clipart-sun-orange-sunlight.png";


const { getWeather, route, mappedKey, date } = useAsyncWeather();
const { imageUrl, getData } = useCityImg();
const weather = ref(null);
const { t } = useI18n();
const timeDate = date
const temp = computed(()=>{
  return weather.value?.main ?  Math.floor((weather.value.main.temp - 32) * 5 / 9) : 0
  
})



const weatherIcon = computed(() => {
  switch (mappedKey.value) {
    case "clear_sky":
      return clearSkyIcon;
      break
    case "broken_clouds":
    return brokenCloud
      break
  }
});
onMounted(async () => {
  weather.value = await getWeather();
  await getData();
  console.log(date.value);
  
  
});
</script>


<template>
  <div class="relative p-3 text-black">
    <div
      class="absolute inset-0 bg-cover bg-center filter blur-sm"
      :style="{ backgroundImage: `url(${imageUrl})` }"
    ></div>
    <div class="relative z-10">
      <p class="text-center text-1xl p-3" v-if="route.query.preview">
        Ushbu Shaxarni kuzatish uchun "+" tugmasini bosing
      </p>

      <div class="mt-1 text-center flex justify-center flex-col text-2xl">
        <div class="flex flex-col justify-center items-center">
        </div>
        <div class="bg-white/35 text-black inline-block mx-auto p-5 rounded">
          <p class="text-7xl">{{ weather?.name }}</p>
          <img class="m-auto p-3 w-40 h-auto" :src="weatherIcon" alt="" />
          <p class="text-5xl">{{ temp}} °C</p>
          <p>{{ $t(`weather.${mappedKey}`) }}</p>
        </div>

        <div class="flex justify-center">
          <p>
          {{ timeDate }}
        </p>
        <p>shamol {{ weather?.wind?.deg }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


