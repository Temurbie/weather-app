<script setup lang="ts">

import {onMounted} from "vue"

import { useRouteInfo } from "../storie/useRoutInfo";
import SaveListComponent from "./SaveListComponent.vue";

const store = useRouteInfo()


</script>

<template>
<div class="grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full px-6">
    <SaveListComponent  class="shadow-2xl  hover:border-red-400"
    v-for="item in store.weatherData"
    :key="item.id"
    :data="item"
  >
  </SaveListComponent>
</div>
</template>
