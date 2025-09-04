import axios from "axios";

class MapBoxSearchCity{
    async getCites(queryValue:string, mapboxKey:string){
        try{
            const respons = await axios.get( `https://api.mapbox.com/geocoding/v5/mapbox.places/${queryValue}.json?access_token=${mapboxKey}&types=place`);
            return respons.data.features || [];
        }catch(err){
            console.log(err);
        }
    }
}
export default new MapBoxSearchCity()