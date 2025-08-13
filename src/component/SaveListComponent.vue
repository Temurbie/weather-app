<template>
  <div class="flex flex-row gap-4">
    <div
      v-for="item in getAllData"
      :key="item.id"
      class="rounded border-2 border-black w-64 h-auto flex items-center justify-center text-white"
    >
    </div>
    <button @click="test">test</button>
  </div>
</template>


<script setup>
import { useRouteInfo } from '@/stories/useRoutInfo';
import {computed } from "vue"
import { useGetData } from '@/composables/getDataForList';
import { ref} from "vue"

const {getFetch, weatherData} = useGetData();
const rotueInfo = useRouteInfo();
const routeInfoArray = computed(() => rotueInfo.shareRouteInfo);
const getAllData = ref([])

async function test(){
    const result = await Promise.all(
    routeInfoArray.value.map(item=>{
        const [lang, lat] = item.geometry.coordinates;
        return getFetch(lang,lat)
    })
)
getAllData.value = result
console.log("datalar", getAllData);
}
</script>

<style lang="scss" scoped>


</style>