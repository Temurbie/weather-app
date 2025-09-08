import axios from "axios";

const URL = "https://api.unsplash.com/search/photos";

export class DynamicBg {
  async getDynamicImg(cityName: string, accessKey: string) {
    try {
      return axios.get(URL, {
        params: {
          query: `${cityName} city`,
          page: 1,
          per_page: 1,
        },
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }).then(res => res.data.results[0]?.urls?.regular || "");

    } catch (error) {
      console.error("Error fetching image:", error);
      return "";
    }
  }
}
export default new DynamicBg();