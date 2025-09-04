<script setup>

import { useRouteInfo } from '@/storie/useRoutInfo';
import Button from '@/components/ui/button/Button.vue';
import doSwal from '@/services/doSwal';
const store = useRouteInfo()


function deleteAll(){
   store.deleteAllCard();
   doSwal("Shaxarlar Olib tashlandi")
   
}

</script>


<template>
   <Button @click="deleteAll" class="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 rounded"  variant="destructive">Delete All</Button>
</template>


