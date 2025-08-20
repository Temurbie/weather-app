export interface Place{
    id:string,
    name: string,
    weather:{
        description: string
    },
    wind:{
        speed: number
    },
    main:{
        temp:number
    }
}