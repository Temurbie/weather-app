import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";


export function useSearchLocation() {
   const router = useRouter()
  const mapboxAPIKey =
    "pk.eyJ1IjoidGVtdXJiaWUiLCJhIjoiY21kdm5kMnFiMHV6aTJtcXdldXQyMjZqZyJ9.UOnPbHgIHIwRStwVhma4yw";
  const searchQuery = ref("");
  const queryTimeout = ref(null);
  const mapBoxSearchResult = ref([]);
  const haveError = ref(false)

  function getSearchResult() {
    clearTimeout(queryTimeout.value);

    if (searchQuery.value !== "") {
      queryTimeout.value = setTimeout(async () => {
        try{
            const result = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${mapboxAPIKey}&types=place`
          
        );
        mapBoxSearchResult.value = result.data.features;
        
        }catch{
            haveError.value = true
        }
      }, 300);
      console.log("ishladi", mapBoxSearchResult.value);
    }else if(searchQuery.value == ""){
      mapBoxSearchResult.value = []
    }else{

      queryTimeout.value = null;
    }
  }



  function previewCity(result){
   
   const [ state, city ]= result.place_name.split(",")
    router.push({
      name: "cityView",
      params: { state : state.replaceAll("",""), city : city},
      query:{
        lat : result.geometry.coordinates[1],
        lang : result.geometry.coordinates[0],
        preview: true
      }
    })
   console.log(router);
   
    
  }
  return { getSearchResult, searchQuery, mapBoxSearchResult, haveError, previewCity};
}
