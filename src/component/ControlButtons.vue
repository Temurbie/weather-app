<script setup>

import { useRouteInfo } from '@/storie/useRoutInfo';
import Button from '@/components/ui/button/Button.vue';
import useSwal from '@/composables/useSwal';
const store = useRouteInfo()

const doSwal = useSwal();

function deleteAll(){
   store.deleteAllCard();
   doSwal.doSwal("Shaxar olib tashlandi")
   
}

</script>


<template>
   <Button @click="deleteAll" class="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 rounded"  variant="destructive">Delete All</Button>
</template>


