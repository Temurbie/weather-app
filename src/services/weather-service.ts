import axios from "axios"

class WeatherService {
    url: string

    getWeather(lat: string, lang: string): Promise<any> {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=8a80ec6d7e7192c50cd139ba06fc708f&units=imperial`);
    }
}

export default new WeatherService