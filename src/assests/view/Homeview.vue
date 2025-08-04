<template>
    <main class="container text-white">
        <div class="mb-8 pt-4 relative">
            <input @input="getSearchResult" type="text" v-model="searchQuery" class="bg-transparent py-2 px-1 w-full border-b focus:border-weather-secondary focus:outline-none 
            focus:shadow-[0px_1px_0_0#004E71]" placeholder="Mintaqa yoki shaxar izlang">
            <ul class="w-full absolute bg-weather-secondary z-0 text-white shadow-md py-2 px-1 top[-66px]">
                <li v-for="searchResult in mapBoxSearchResult" :key=" searchResult.id" class="py-2 cursor-pointer">
                    {{ searchResult.place_name }}
                </li>
            </ul>  
        </div>
        
    </main>
</template>

<script setup>
import axios from 'axios'
import {ref} from 'vue'
const mapboxAPIKey = "pk.eyJ1IjoidGVtdXJiaWUiLCJhIjoiY21kdm5kMnFiMHV6aTJtcXdldXQyMjZqZyJ9.UOnPbHgIHIwRStwVhma4yw"
const searchQuery = ref("")
const queryTimeout = ref(null)
const mapBoxSearchResult = ref([])
const getSearchResult = () =>{
    clearTimeout(queryTimeout.value)
    queryTimeout.value = setTimeout( async () => {
        if(searchQuery.value !== ""){
            const result = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`)
            mapBoxSearchResult.value = result.data.features;
            console.log(mapBoxSearchResult.value , "valuedam");
            
            return;
        }
        mapBoxSearchResult.value = null
    }, 300)
    console.log(queryTimeout.value);
    
    
}
</script>
