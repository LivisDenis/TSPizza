import {createSlice} from "@reduxjs/toolkit";

export type TCartItem = {
    id: number
    imageUrl: string
    title: string
    type: string,
    size: string,
    price: number
    count: number
}

type TCartState = {
    totalPrice: number
    totalCount: number
    items: TCartItem[]
}

const initialState: TCartState = {
    totalPrice: 0,
    totalCount: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(item => item.id === action.payload.id)

            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0)
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        minusItem(state, action) {
            const findItem = state.items.find(item => item.id === action.payload)

            if (findItem && findItem.count > 1) {
                findItem.count--
            }
            state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0)
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
            state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0)
            state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
        },
        clearCart(state) {
            state.items = []
            state.totalCount = 0
            state.totalPrice = 0
        },
    }
})

const {actions, reducer} = cartSlice

export const {addItem, minusItem, removeItem, clearCart} = actions

export default reducer