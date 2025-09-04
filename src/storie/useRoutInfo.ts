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
  const cacheCartData = ref<Place[]>([])
  let workedUndoButton = ref<boolean>(false)
  const count = ref(0);
  function setrouteInfo(info:any) {
    routeInfo.value = info;

  }

  async function setshareRouteInfo(data : any) {

    if(!data) return;

    shareRouteInfo.value.push(data);

    if (!data?.geometry?.coordinates) return;
    
    const [lon, lat ] = data.geometry.coordinates;
    const weather : Place = await  WeatherService.getWeather(lat,lon)
    
 
    const alreadyWeather = weatherData.value.some((item) => item.id === weather.id);
    
    if (!alreadyWeather) {
    weatherData.value.push(weather)
    alertUchun.value = true;
    return true
  }

    return false;
  }
  function restAlert(){
      return alertUchun.value = false
  }

 function deleteCardInStorage(id: number) {
  weatherData.value = weatherData.value.filter(item => item.id !== id)
}

function countFn(second = 5) {
  count.value = 5 
  const timer = setInterval(() => {
    count.value--;

    if (count.value <= 0) {
      clearInterval(timer); 
    }
  }, 1000);
}

function deleteAllCard(){
 
  if(weatherData.value.length > 0){

      cacheCartData.value = [...weatherData.value];
      weatherData.value = []

      workedUndoButton.value = true;

      countFn();

      setTimeout(() => {
        workedUndoButton.value = false
      }, 5000);
}
  }


function workUndoButtonFn(){
  weatherData.value = [...cacheCartData.value];
  
}



  return {
    routeInfo,
    shareRouteInfo,
    weatherData,
    setrouteInfo,
    setshareRouteInfo,
    alertUchun,
    restAlert,
    deleteCardInStorage,
    deleteAllCard,
    cacheCartData,
    workUndoButtonFn,
    workedUndoButton,
    count
  };
});
