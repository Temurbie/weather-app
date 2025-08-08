<template>
  <main class="container text-white">
    <div class="mb-8 pt-4 relative">
      <input
        @input="getSearchResult"
        type="text"
        v-model="searchQuery"
        class="bg-transparent py-2 px-1 w-full border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0#004E71]"
        placeholder="Mintaqa yoki shaxar izlang"
      />
      <ul
        class="w-full absolute bg-weather-secondary text-white shadow-md py-2 px-1 top[-66px]"
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
const { getSearchResult, searchQuery, mapBoxSearchResult, haveError, previewCity } =
  useSearchLocation();

</script>
