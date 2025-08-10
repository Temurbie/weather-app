import axios from "axios";
import { useRoute } from "vue-router";
import {ref} from "vue"
export function useCityImg() {
  const route = useRoute();
  const cityName = route.params.state;
  let imageUrl = ref("");

  const accsesKey = `G-fR1roBLhufV0A7LoMaYkz2hg9g7Y2rlDYGCFwMkIA`;
  async function getData() {
    // console.log(cityName);

    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: `${cityName} city`,
            page: 1,
            per_page: 1,
          },
          headers: {
            Authorization: `Client-ID ${accsesKey}`,
          },
        }
      );

      imageUrl.value = response.data.results[0].urls.full;
      // console.log(imageUrl.value);
    } catch (err) {
      console.log(err);
    }
  }
  return {imageUrl, getData}
}
