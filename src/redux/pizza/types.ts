
export enum PizzaSliceEnum {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type TPizzaState = {
    items: TPizzaItem[]
    status: PizzaSliceEnum
}

export type TPizzaParams = {
    sortBy: string
    order: string
    category: string
    search: string
    currentPage: number
}

export type TPizzaItem = {
    id: number
    imageUrl: string
    title: string
    types: number[]
    sizes: number[]
    price: number
}