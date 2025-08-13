<script setup>
import { RouterView, useRoute } from 'vue-router';
import SiteNavigation from './component/SiteNavigation.vue';
import SaveListComponent from './component/SaveListComponent.vue';

const route = useRoute();
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <SiteNavigation />
    <RouterView />
    <SaveListComponent
      v-if="route.name !== 'cityView'" 
      class="border border-white rounded p-4 inline-block px-4"
    />
  </div>
</template>

