import { ref, computed, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import weatherService from "@/services/weatherService";
import { weatherMapping } from "../locales/mapping";

export function useAsyncWeather() {
  const route = useRoute();
  const apiDescription = ref("");
  const date = ref(null);
  const controller = new AbortController();

  const lat = Number(route.query.lat);
  const lon = Number(route.query.lon);

  const mappedKey = computed(() => weatherMapping[apiDescription.value] || "unknown");
  
  async function getWeather() {
    if (!lat || !lon) {
      return null;
    }

    try {
      const dataWeather= await weatherService.getWeather(lat, lon, controller.signal);
    
      apiDescription.value = dataWeather.weather[0].description.toLowerCase();
      date.value = new Date(Date.now() + dataWeather.timezone * 1000);
      return dataWeather;
      
    } catch (err) {
      console.error("Weather API error:", err);
      return null;
    }
  }
    onUnmounted(()=>{
        controller.abort()
        console.log("unmount buldi va abort buldi");
        
        
      })
  return { getWeather, route, mappedKey, date };
}
