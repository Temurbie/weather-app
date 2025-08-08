import axios from "axios";
import { useRoute } from "vue-router";

export function useAsyncWeather() {
  const route = useRoute();
 
  async function getWeather() {
    try {
      const dataWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${route.query.lat}&lon=${route.query.lang}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`
      );
      console.log(dataWeather , "dataWeather 1");
      const localOffset = new Date().getTimezoneOffset() * 60000;
      console.log(localOffset , "localfset1");
      console.log(dataWeather.data , "dataWeatherData");
      
      const utc = dataWeather.data.dt * 1000  + localOffset;
      console.log(utc , "utc 1");
      dataWeather.data.currentTime = utc + 1000  * dataWeather.data.timezone_offset;
      return dataWeather.data

    } catch (err) {
      console.log(err);
    }
  }
  return { getWeather, route}
}
