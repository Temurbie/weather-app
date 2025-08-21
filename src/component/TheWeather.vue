<script setup lang="ts">
import SaveListComponent from "./SaveListComponent.vue";
import { useRouteInfo } from "../storie/useRoutInfo";
import {onMounted} from "vue"

const store = useRouteInfo()
let test = store.shareDataIsLocalStorage;
console.log("testdan", test);
onMounted(() => {
  console.log("Onmouted ishladi");
  
  store.loadFromLocalStorage();
})

</script>

<template>
<div class="grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full px-6">
    <SaveListComponent  class="shadow-2xl  hover:border-red-400"
    v-for="item in store.shareDataIsLocalStorage"
    :key="item.id"
    :id="item.id"
    :name="item.name"
    :main="item.main"
    :weather="item.weather"
    :wind="item.wind"
  >
  </SaveListComponent>
</div>
</template>
