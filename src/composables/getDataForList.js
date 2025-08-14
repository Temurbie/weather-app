import axios from "axios";

export function useGetData() {
    const weatherData = ref([])
  
  return {getFetch, weatherData}
}
