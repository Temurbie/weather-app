<script setup lang="ts">
import { useRouteInfo } from "../storie/useRoutInfo";
import ControlButtons from "./ControlButtons.vue";
import SaveListComponent from "./SaveListComponent.vue";
import doSwal from "@/services/doSwal";
import SnackBar from "./SnackBar.vue";

const store = useRouteInfo();

function handleClick(id: number) {
  store.deleteCardInStorage(id);
  doSwal("Shaxar Olib tashlandi");
 
}

</script>

<template>
  <section>
    <div v-if="store.weatherData.length == 0" class="text-center dark:text-black mt-4">
      <span>Malumotlar hali mavjud emas</span>
    </div>
    <div v-if="store.weatherData.length > 0">
      <div class="w-full px-6 mb-2 mt-2">
        <ControlButtons></ControlButtons>
      </div>
<TransitionGroup
  name="fade"
  tag="div"
  class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full px-6"
>
  <SaveListComponent
    v-for="item in store.weatherData"
    :key="item.id"
    :data="item"
    @delete="handleClick"
    class="group transition-transform duration-300 hover:scale-105"
  />
</TransitionGroup>
    
    </div>
      <div
        v-if="store.workedUndoButton"
        class="bg-red-500 fixed bottom-2 left-[35%] p-2 content-around text-white rounded-sm"
      >
        <SnackBar></SnackBar>
      </div>
  </section>
</template>

<style  scoped>

.fade-enter-active, .fade-leave-active {
  transition: all 0.9s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1);
}


</style>
