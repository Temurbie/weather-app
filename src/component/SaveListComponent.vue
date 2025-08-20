<script setup lang="ts">

import { useI18n } from "vue-i18n";
import {ref,watchEffect} from 'vue'
import Card from "@/components/ui/card/Card.vue";
import { Place } from "../interface/place";
import {weatherMapping} from "../locales/mapping";

const props = defineProps<Place>();
const {t} = useI18n()
const img = ref(null)
const weatherDescription = ref(props.weather[0].description);
const havoHarorati = ref(props.main.temp);

function haroratniUzgartir(){
  return havoHarorati.value = Math.floor((havoHarorati.value-32)*5/9)
}

function tarjima(){
  return weatherDescription.value = weatherMapping[weatherDescription.value] || "unknown"
}


watchEffect(()=>{
  haroratniUzgartir();
  tarjima();
  console.log("ishladi", havoHarorati.value);
  
})


</script>

<template>
 <div>
  <Card class="p-3 h-40 text-center" :img="img">
    <h1>{{ name }}</h1>
    <p>Harorat: {{ havoHarorati }} °C</p>
    <p>Havo Holat:  <p>{{ $t(`weather.${weatherDescription}`) }}</p></p>
    <p>Shamol Tezligi: {{ Math.floor(wind.speed) }} km/s</p>
  </Card>
</div>
  
</template>
