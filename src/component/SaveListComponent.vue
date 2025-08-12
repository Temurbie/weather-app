<template>
   <div class="flex flex-row ">
        <div v-for="info in ifooo" :key="rotueInfo.shareRouteInfo.id">
            <p>{{ info.id }}</p>
            <p>{{ ifooo.length }}</p>
        </div>
        <p>{{ ifooo.id }}</p>
        <p>{{ info in ifooo }}</p>
        <button @click="test">click</button>
    </div>
</template>

<script setup>
import { useRouteInfo } from '@/stories/useRoutInfo';
import {computed } from "vue"

const rotueInfo = useRouteInfo();
const ifooo = computed(() => rotueInfo.shareRouteInfo);
function test(){
    console.log("rotueInfo.shareRouteInfodan",rotueInfo.shareRouteInfo);
    console.log("rotueInfo.shareRouteInfodan2",ifooo.value);
}



</script>

<style lang="scss" scoped>


</style>