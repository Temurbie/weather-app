import axios from "axios";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import {weatherMapping} from "../locales/mapping"

export function useAsyncWeather() {
  const route = useRoute();
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
      return dataWeather.data
    } catch (err) {
      console.log(err);
    }
  }
// function getTime() {
//   let d = new Date();
//   let day = d.getDate()
//   let month = d.getMonth()
//   let year = d.get()
//   let month = d.getMonth()
//   console.log(day);
  
  
// }
  // getTime()
  return { getWeather, route, mappedKey,date}
}
