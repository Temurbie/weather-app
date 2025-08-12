import { defineStore } from "pinia";
import {ref} from 'vue'

export const useRouteInfo = defineStore('info',()=>{
    const routeInfo = ref(null) 
    const shareRouteInfo = ref([])

    function setrouteInfo(info){
        
        routeInfo.value = info
        console.log("setbuldi", routeInfo.value.id);
    }
    function setshareRouteInfo(data){
        console.log("bosildi va data keldi ", data);
        
        shareRouteInfo.value = data
        console.log("sharedga data berildi", shareRouteInfo.value);
        
    }
    return {
        routeInfo,
        shareRouteInfo,
        setrouteInfo,
        setshareRouteInfo
    }
})