<script setup lang="ts">

import { useI18n } from "vue-i18n";
import {ref,watchEffect} from 'vue'
import Card from "@/components/ui/card/Card.vue";
import { Place } from "../interface/place";
import {weatherMapping} from "../locales/mapping";
import TheButton from "./TheButton.vue";

const props = defineProps<Place>();
const {t} = useI18n()
const img = ref(null)
const weatherDescription = ref(props.weather[0].description);
const havoHarorati = ref(props.main.temp);
const deleted = ref(false)
function haroratniUzgartir(){
  return havoHarorati.value = Math.floor((havoHarorati.value-32)*5/9)
}

function handleDelete(){
  console.log("bosildi");
  
  deleted.value = true
}

function tarjima(){
  return weatherDescription.value = weatherMapping[weatherDescription.value] || "unknown"
}


watchEffect(()=>{
  haroratniUzgartir();
  tarjima();
  console.log("ishladi", havoHarorati.value);
  
})
function test(event: MouseEvent) {
  const button = event.currentTarget as HTMLElement;
  console.log(button);
}


</script>

<template>
 <div>
  <Card
    v-if="!deleted"
    class="group   bg-card text-card-foreground hover:bg-muted-foreground hover:scale-110 p-7 rounded-lg text-center"
    :img="img"
  >
    <div
      class="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
    >
      <TheButton
        class="cursor-pointer"
        @click.stop="handleDelete"
        size="sm"
       
      >
        Delete
      </TheButton>
    </div>

    <h1>{{ name }}</h1>
    <p>Harorat: {{ havoHarorati }} °C</p>
    <p>
      Havo Holat: <span>{{ $t(`weather.${weatherDescription}`) }}</span>
    </p>
    <p>Shamol Tezligi: {{ Math.floor(wind.speed) }} km/s</p>
  </Card>
 </div>
</template>


