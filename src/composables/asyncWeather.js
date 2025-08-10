import axios from "axios";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import {weatherMapping} from "../locales/mapping"

export function useAsyncWeather() {
  const route = useRoute();
  let apiDescription = ref(null);
  let mappedKey = computed(()=>{
    // console.log(weatherMapping, "weatherMapping");
    // console.log(apiDescription.value, "apiDescription");
    
    return weatherMapping[apiDescription.value] || "unknown"
  })

  async function getWeather() {
    try {
      const dataWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.lang}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`
      );
      // console.log(dataWeather.data.weather[0].description , "dataWeather 1");
      apiDescription.value = dataWeather.data.weather[0].description.toLowerCase();
      // console.log(apiDescription , "apidesc");
      // console.log(dataWeather.data);
      
      return dataWeather.data

    } catch (err) {
      console.log(err);
    }
  }
  return { getWeather, route, mappedKey}
}
