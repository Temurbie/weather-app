<script setup lang="ts">

import { ref, computed, toRefs } from 'vue'
import { useI18n } from "vue-i18n";

import {weatherMapping} from "../locales/mapping";
import { Place } from "../interface/place";
import Card from "@/components/ui/card/Card.vue";
import Button from '@/components/ui/button/Button.vue';



const props = defineProps<{
  data : Place
}>();

const emit = defineEmits<{
  (e: "delete" , id:number)
}>()

const {data} = toRefs(props)
const {t} = useI18n()
const img = ref(null)
const deleted = ref(false)


const weatherDescription = computed (()=> data.value.weather[0]?.description)

const havoHarorati = computed(()=> Math.floor((data.value.main?.temp  - 32) * 5 /9 ))

const tarjima = computed(()=> weatherMapping[weatherDescription.value] || "unknown")

const shamolTezligi = computed(()=> Math.floor( data.value.wind?.speed))

const sityName = computed(() => data.value.name)

function deleteCard(){
  emit("delete", data.value.id);
}
</script>

<template>
 <div>
  <Card
    class="group   bg-card text-card-foreground hover:bg-muted-foreground hover:scale-110 p-7 rounded-lg text-center"
    :img="img"
  >
    <div
      class="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
    >
         <Button variant="destructive" @click="deleteCard">Delete</Button>
    </div>

    <h1>{{ sityName }}</h1>
    <p>Harorat: {{ havoHarorati }} °C</p>
    <p>
      Havo Holat: <span>{{ $t(`weather.${tarjima}`) }}</span>
    </p>
    <p>Shamol Tezligi: {{ shamolTezligi }} km/s</p>
  </Card>
 </div>
</template>


