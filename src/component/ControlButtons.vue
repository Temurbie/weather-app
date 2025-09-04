<script setup>

import { useRouteInfo } from '@/storie/useRoutInfo';
import Button from '@/components/ui/button/Button.vue';

const store = useRouteInfo()


function deleteAll(){
   store.deleteAllCard()
   
   
}

</script>


<template>
   <Button @click="deleteAll" class="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 rounded"  variant="destructive">Delete All</Button>
</template>


