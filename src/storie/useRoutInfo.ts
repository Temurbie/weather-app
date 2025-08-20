import { defineStore } from "pinia";
import { ref } from "vue";
import getFetch from '../services/weatherService'
import { Place } from "@/interface/place";


export const useRouteInfo = defineStore("info", () => {
  const routeInfo = ref(null);
  const shareRouteInfo:any = ref([]);
  const weatherData = ref<Place []>([]);
  const shareDataIsLocalStorage = ref<Place[]>([]);

  function setrouteInfo(info:any) {
    routeInfo.value = info;
    console.log("setbuldi", routeInfo.value?.id);
  }

  async function setshareRouteInfo(data : any) {
 
    if(!data) return;


    shareRouteInfo.value.push(data);

    const [lon, lat ] = data.geometry.coordinates;
    const weather : Place = await  getFetch(lon,lat)
    
 
    const alreadyWeather = weatherData.value.some((item) => item.id === weather.id);
    
    if (!alreadyWeather) {
      weatherData.value.push(weather)

      localStorage.setItem("weatherData", JSON.stringify(weatherData.value))
      const getItemLocalStorage = localStorage.getItem("weatherData");
      try{
        
      if(getItemLocalStorage){
        shareDataIsLocalStorage.value = JSON.parse(getItemLocalStorage) as Place[];
        console.log(shareDataIsLocalStorage, "localdan");
        
      }
      }catch(e){
        console.log("hatolik", e);
        
      }
      return true;
    }
    return false;
  }
  function loadFromLocalStorage() {
    const saved = localStorage.getItem("weatherData");
    if (saved) {
      try {
        const parsed: Place[] = JSON.parse(saved);
        shareDataIsLocalStorage.value = parsed;
        weatherData.value = parsed;
      } catch (e) {
        console.error("JSON parse hatolik:", e);
      }
    }
  }
  return {
    routeInfo,
    shareRouteInfo,
    weatherData,
    setrouteInfo,
    setshareRouteInfo,
    shareDataIsLocalStorage,
    loadFromLocalStorage
  };
});
