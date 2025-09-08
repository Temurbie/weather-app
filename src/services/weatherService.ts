import { Place } from "@/interface/place";
import axios from "axios";  
  

 class WeatherService {

  async getWeather(lat : number, lon : number,  signal?: AbortSignal) : Promise<Place>{

    try{
      return axios.get<Place>(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`,{signal}
    ).then(res => res.data)
    }
    catch(err){
      if(err.name === "CanceledError" || err.name === "AbortError"){
        console.log("error surov berkor qilindi");
        
      }else{
        console.log("API xatosi" , err);
        
      }
    }
    
  }
}
export default new WeatherService();