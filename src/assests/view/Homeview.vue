<template>
    <main class="container text-white">
        <div class="mb-8 pt-4 relative">
            <input type="text" v-model="inputValue" class="bg-transparent py-2 px-1 w-full border-b focus:border-weather-secondary focus:outline-none 
            focus:shadow-[0px_1px_0_0#004E71]" placeholder="Mintaqa yoki shaxar izlang">
            
        </div>
        
    </main>
</template>

<script setup>
import {ref} from 'vue'
let inputValue = ref("sdsd")
</script>
