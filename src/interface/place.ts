export interface Place{
    id:string,
    place_name: string,
    text:string,
    geomeytry:{
        type:string
        coordinates: [number, number]
    }
}