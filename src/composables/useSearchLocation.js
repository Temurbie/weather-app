import { ref } from "vue";

import { useRouter } from "vue-router";
import { useRouteInfo } from "@/storie/useRoutInfo";
import MapBoxSearchCity from "../services/mapBoxSerachCity.ts"

export function useSearchLocation() {
  
  const searchQuery = ref("");
  const queryTimeout = ref(null);
  const mapBoxSearchResult = ref([]);
  const haveError = ref(false)

  const routeInfoPinia = useRouteInfo()
  const router = useRouter()

  const mapboxAPIKey = import.meta.env.VITE_MAPBOX_KEY 
    

  function getSearchResult() {

    clearTimeout(queryTimeout.value);

    if (searchQuery.value !== "") {
      queryTimeout.value = setTimeout(async () => {
        try{
         clearTimeout(queryTimeout.value);
         mapBoxSearchResult.value = await MapBoxSearchCity.getCites(searchQuery.value, mapboxAPIKey )
        }catch{
            haveError.value = true
        }
      }, 300);
    }else if(searchQuery.value == ""){
      mapBoxSearchResult.value = []
    }else{

      queryTimeout.value = null;
    }
  }



  function previewCity(result){
   
   const [ state, city ]= result.place_name.split(",")
   routeInfoPinia.setrouteInfo(result)

   
   
    router.push({
      name: "cityView",
      params: { state : state.replaceAll("",""), city : city},
      query:{
        lat : result.geometry.coordinates[1],
        lon : result.geometry.coordinates[0],
        preview: true
      }
    })
  }


  return { getSearchResult, searchQuery, mapBoxSearchResult, haveError, previewCity };
}
