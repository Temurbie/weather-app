import { ref } from "vue";
import axios from "axios";

export function useSearchLocation() {
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
      console.log("ishladi", haveError.value);

      return;
    }
    queryTimeout.value = null;
  }
  return { getSearchResult, searchQuery, mapBoxSearchResult, haveError};
}
