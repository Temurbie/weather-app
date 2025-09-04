<script setup lang="ts">
import { useRouteInfo } from "../storie/useRoutInfo";
import ControlButtons from "./ControlButtons.vue";
import SaveListComponent from "./SaveListComponent.vue";
import doSwal from "@/services/doSwal";

import { useSelectCard } from "@/storie/selectItem";

const storeSelected = useSelectCard()
const store = useRouteInfo();
function handleClick(id:number){
  
  store.deleteCardInStorage(id);
  doSwal("Shaxar Olib tashlandi");
  console.log(storeSelected.flagIsSelected);
  
}

</script>

<template>
  <div class=" w-full px-6 mb-2">
    <ControlButtons ></ControlButtons>
  </div>
<div class="grid  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full px-6">
    <SaveListComponent :class="{active: storeSelected.flagIsSelected}"  class="cursor-pointer shadow-2xl  hover:border-red-400"
    v-for="item in store.weatherData"
    :key="item.id"
    :data="item"
    @delete="handleClick"
  >
  </SaveListComponent>
</div>
</template>

<style scoped>
  .active{
    background-color:  red;
  }
</style>
