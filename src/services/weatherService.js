  import axios from "axios";  
  
 export default async function  getFetch(lat, lon) {  
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lon}&lon=${lat}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`
      );
      
      return data;
   
  }
