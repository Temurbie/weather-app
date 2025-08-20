import { Place } from "@/interface/place";

const localKey : string = "weatherData";

export function loadWeatherData(): Place[] {

    try{
        const saved = localStorage.getItem(localKey);
        if(saved){
            return saved ? (JSON.parse(saved) as Place []) : [];
        }
    }catch(e){
        console.log("localstoragedan hatolik", e);
        return [];
    }
}

export function saveWeatherData(data :Place){
    if(data){
        localStorage.setItem(localKey, JSON.stringify(data));
    }else{
        console.log("hatolik saqlashdan");
        
    }
}