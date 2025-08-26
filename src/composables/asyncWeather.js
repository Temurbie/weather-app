import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import weatherService from "@/services/weatherService";
import { weatherMapping } from "../locales/mapping";

export function useAsyncWeather() {
  const route = useRoute();
  const apiDescription = ref("");
  const date = ref(null);

  const lat = Number(route.query.lat);
  const lon = Number(route.query.lon);

  const mappedKey = computed(() => weatherMapping[apiDescription.value] || "unknown");
  
  async function getWeather() {
    if (!lat || !lon) {
      console.warn("Lat yoki Lon noto‘g‘ri");
      return null;
    }

    try {
      const dataWeather= await weatherService.getWeather(lat, lon);
      console.log("DATA", dataWeather);
      
      apiDescription.value = dataWeather.weather[0].description.toLowerCase();
      date.value = new Date(Date.now() + dataWeather.timezone * 1000);

      console.log(dataWeather, "getWeatherdan");
      return dataWeather;
    } catch (err) {
      console.error("Weather API error:", err);
      return null;
    }
  }

  return { getWeather, route, mappedKey, date };
}
