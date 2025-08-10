<template>
  <div class="relative p-3 text-white">

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
          <p class="text-7xl"> {{ weather?.name }} </p>
        </div>
        <p class="text-5xl">{{ weather?.main?.temp }} °F</p>
        <p>Havo: {{ $t(`weather.${mappedKey}`) }} </p>
        <p>Mahalliy vaqt: {{ new Date(weather?.currentTime).toLocaleString() }}</p>
        <p>shamol {{ weather?.wind?.deg }}</p>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, onMounted } from 'vue';
import { useAsyncWeather } from '@/composables/asyncWeather';
import { useCityImg } from '@/composables/getCityImg';
import { useI18n } from 'vue-i18n'

const { getWeather, route, mappedKey } = useAsyncWeather();
const  {imageUrl, getData} = useCityImg()
const weather = ref(null);
const {t} = useI18n()

onMounted(async () => {
  weather.value = await getWeather();
  await getData()
  
  console.log(weather.value);
  console.log(mappedKey.value);
  
});

</script>
