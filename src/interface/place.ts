export interface Place{
    id:number,
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