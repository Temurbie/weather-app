
import {ref} from "vue"
import { useRoute } from "vue-router";

import getImgService from "../services/getImgService.ts"


export function useCityImg() {

  const route = useRoute();
  const cityName = route.params.state;
  const accessKey = import.meta.env.VITE_ACCESS_KEY
  let imageUrl = ref("");


  async function getData() {
    imageUrl.value = await getImgService.getDynamicImg(cityName, accessKey);

  }
  
  return {imageUrl, getData}
}
