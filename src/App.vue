<script setup>
import { RouterView, useRoute } from 'vue-router';
import SiteNavigation from './component/SiteNavigation.vue';
import TheWeather from './component/TheWeather.vue';

const route = useRoute();
</script>

<template id="app">
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <RouterView />
    <hr>
    <TheWeather
      v-if="route.name !== 'cityView'" 
      class="contain-style"
    />
  </div>
</template>

<style scoped>
#app{
  width: 100%;
  min-height: 100vh;
}
</style>