<script setup>

import { RouterView } from 'vue-router';
import SiteNavigation from './component/SiteNavigation.vue';
import SaveListComponent from './component/SaveListComponent.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
        <SiteNavigation/>
        <RouterView/>        
        <SaveListComponent class="border border-white rounded p-4 inline-block px-4" />
    </div>
</template>

<style scoped>

</style>
