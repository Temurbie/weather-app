import axios from "axios";
import {ref} from 'vue'
export function useGetData() {
    const weatherData = ref([])
  async function getFetch(lat, lang) {
    try {
      const dataWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`
      );
      weatherData.value =
        dataWeather.data.weather[0].description.toLowerCase();
    //   date.value = new Date(Date.now() + dataWeather.data.timezone * 1000);
      console.log(dataWeather, "getweatherdan");

      return dataWeather.data;
    } catch (err) {
      console.log(err);
    }
  }
  return {getFetch, weatherData}
}
