<script setup>

import Button from '@/components/ui/button/Button.vue';
import { useRouteInfo } from '@/storie/useRoutInfo';
import { useTheme } from '@/storie/useTheme';
import { computed } from 'vue';


const store = useRouteInfo()
const pickTheme = useTheme();


const textColor = computed(() => pickTheme.isDark ? "text-white" : "text-black");

function restData(){
    store.workUndoButtonFn();
    store.workedUndoButton = false;
}
</script>

<template>
    <span>Haqiqatdan ham uchirishni hohlaysizmi? {{ store.count }}...</span> <Button @click="restData"  :class="textColor" variant="outline">Qaytish</Button>
</template>



<style lang="scss" scoped>

</style>