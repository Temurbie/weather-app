import {ref, watch} from "vue"

import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useTheme = defineStore("theme", ()=>{

const isDark = useStorage("theme", false);

function toggleTheme() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
  }
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  }

  return { isDark, toggleTheme };

})