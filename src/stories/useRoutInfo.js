import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useRouteInfo = defineStore("info", () => {
  const routeInfo = ref(null);
  const shareRouteInfo = ref([]);
  const weatherData = ref([]);

  function setrouteInfo(info) {
    routeInfo.value = info;
    console.log("setbuldi", routeInfo.value?.id);
  }

  async function setshareRouteInfo(data) {
    if (!data) {
      console.log(" data yuq:", data);
      return;
    }

    const mavjud = shareRouteInfo.value.some((item) => item.id === data.id);
    if (!mavjud) {
      shareRouteInfo.value.push(data);
      console.log("yangi shahar qoshildi", shareRouteInfo.value);
    } else {
      console.log("Bu shahar allaqachon mavjud", data.id);
      return; 
    }

   
    const result = await Promise.all(
      shareRouteInfo.value.map((item) => {
        const [lon, lat] = item.geometry.coordinates;
        return getFetch(lon, lat);
      })
    );

    console.log(" result:", result);
  }

  async function getFetch(lon, lat) {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`
      );

      const mavjud = weatherData.value.some((item) => item.id === data.id);
      if (!mavjud) {
        weatherData.value.push(data);
        console.log(" Yangi ob-havo malumoti qoshildi:", data.name);
      } else {
        console.log("Bu shahar ob-havosi allaqachon kuzatilmoqda:", data.name);
      }

      return data;
    } catch (err) {
      console.error("err", err);
    }
  }

  return {
    routeInfo,
    shareRouteInfo,
    weatherData,
    setrouteInfo,
    setshareRouteInfo,
  };
});
