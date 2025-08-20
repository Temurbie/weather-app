<template>
  <main class="container text-black">
    <div class="mb-8 pt-4 relative">
     <Input @input="getSearchResult" v-model="searchQuery" placeholder="Shaxar nomi"/>
      <ul
        class="w-full absolute bg-weather-secondary text-black shadow-md py-2 px-1 top[-66px]"
      >
        <p v-if="haveError">nimadir hato</p>
        <p v-else-if="searchQuery && mapBoxSearchResult.length == 0">
          siz qidirgan malumot topilmadi
        </p>

        <template v-else>
          <li
            v-for="searchResult in mapBoxSearchResult"
            :key="searchResult.id"
            class="py-2 cursor-pointer"
            @click="previewCity(searchResult)"
          >
            {{ searchResult.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </main>
</template>

<script setup>

import { useSearchLocation } from "@/composables/useSearchLocation";
import Input from "../components/ui/input/Input.vue";
const { getSearchResult, searchQuery, mapBoxSearchResult, haveError, previewCity } =
  useSearchLocation();

</script>
