<script setup>

import Button from '@/components/ui/button/Button.vue';
import { useRouteInfo } from '@/storie/useRoutInfo';


const store = useRouteInfo()




function restData(){
    store.workUndoButtonFn();
    store.workedUndoButton = false;
}
</script>

<template>
    <span>Haqiqatdan ham uchirishni hohlaysizmi? {{ store.count }}...</span> <Button @click="restData" class="text-black" variant="outline">Qaytish</Button>
</template>



<style lang="scss" scoped>

</style>