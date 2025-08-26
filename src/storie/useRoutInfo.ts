import { ref } from "vue";
import { useStorage } from '@vueuse/core'
import { defineStore } from "pinia";

import { Place } from "@/interface/place";
import WeatherService from "../services/weatherService";

export const useRouteInfo = defineStore("info", () => {

  const routeInfo = ref(null);
  const shareRouteInfo:any = ref([]);
  const weatherData = useStorage<Place[]>("weatherData", [])
  let alertUchun= ref<boolean>(false)

  function setrouteInfo(info:any) {
    routeInfo.value = info;
    console.log("setbuldi", routeInfo.value?.id);
  }

  async function setshareRouteInfo(data : any) {

    if(!data) return;

    shareRouteInfo.value.push(data);

    if (!data?.geometry?.coordinates) return;
    
    const [lon, lat ] = data.geometry.coordinates;
    const weather : Place = await  WeatherService.getWeather(lat,lon)
    
 
    const alreadyWeather = weatherData.value.some((item) => item.id === weather.id);
    console.log(alreadyWeather, "weatherdandd");
    
    if (!alreadyWeather) {
    weatherData.value.push(weather)
    return true
  }

    return false;
  }
  function restAlert(){
      return alertUchun.value = false
  }

  return {
    routeInfo,
    shareRouteInfo,
    weatherData,
    setrouteInfo,
    setshareRouteInfo,
    alertUchun,
    restAlert
  };
});
