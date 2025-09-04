import { Place } from "@/interface/place";
import axios from "axios";  
  
 class WeatherService {

  async getWeather(lat : number, lon : number) : Promise<Place>{

    return axios.get<Place>(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`
    ).then(res => res.data)
    
  }
}
export default new WeatherService();