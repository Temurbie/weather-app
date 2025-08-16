import axios from "axios";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import {weatherMapping} from "../locales/mapping"

export function useAsyncWeather() {
  let apiDescription = ref(null);
  let date = ref(null)
  let mappedKey = computed(()=>{
    return weatherMapping[apiDescription.value] || "unknown"
  })

  async function getWeather() {
    try {
      const dataWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.lang}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`
      );
      apiDescription.value = dataWeather.data.weather[0].description.toLowerCase();
      date.value = new Date(Date.now()  + dataWeather.data.timezone * 1000);
      console.log(dataWeather,"getweatherdan");
      
      return dataWeather.data
    } catch (err) {
      console.log(err);
    }
  }

  
// }
  // getTime()
  return { getWeather, route, mappedKey,date}
}
