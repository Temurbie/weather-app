import { defineStore } from "pinia";
import { ref } from "vue";

export const useSelectCard =  defineStore("forSelect",()=>{

    let flagIsSelected = ref<boolean>(false);
    
    return {flagIsSelected}
})