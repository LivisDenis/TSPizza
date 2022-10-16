
export type TCartItem = {
    id: number
    imageUrl: string
    title: string
    type: string,
    size: string,
    price: number
    count: number
}

export type TCartState = {
    totalPrice: number
    totalCount: number
    items: TCartItem[]
}