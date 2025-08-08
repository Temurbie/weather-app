<script setup>
import { ref, onMounted } from 'vue';
import { useAsyncWeather } from '@/composables/asyncWeather';

const { getWeather, route } = useAsyncWeather();
const weather = ref(null); // Ma’lumotni saqlash uchun

onMounted(async () => {
  weather.value = await getWeather();
  console.log(weather.value);
  
});
</script>

<template>
    <p class="bg-weather-secondary text-white text-center text-1xl p-3" v-if="route.query.preview">Ushbu Shaxarni kuzatish uchun "+" tugmasini bosing</p>


  <div class="bg-weather-secondary mt-1 text-center flex justify-center flex-col text-white text-2xl" v-if="weather">
    <h2>Ob-havo ma'lumoti:</h2>
    <p>Joy: {{ weather.name }}</p>
    <p>Harorat: {{ weather.main.temp }} °F</p>
    <p>Havo: {{ weather.weather[0].description }}</p>
    <p>Mahalliy vaqt: {{ new Date(weather.currentTime).toLocaleString() }}</p>
    <p>shamol {{ weather.wind.deg }}</p>
  </div>


</template>
