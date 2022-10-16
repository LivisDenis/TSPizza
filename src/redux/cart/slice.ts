import {createSlice} from "@reduxjs/toolkit";
import {TCartState} from "./types";
import {getCartLS} from "../../utils/getCartLS";
import {calcTotalCount, calcTotalPrice} from "../../utils/calc";

const initialState: TCartState = getCartLS()

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
            state.totalCount = calcTotalCount(state.items)
            state.totalPrice = calcTotalPrice(state.items)
        },
        minusItem(state, action) {
            const findItem = state.items.find(item => item.id === action.payload)

            if (findItem && findItem.count > 1) {
                findItem.count--
            }
            state.totalCount = calcTotalCount(state.items)
            state.totalPrice = calcTotalPrice(state.items)
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
            state.totalCount = calcTotalCount(state.items)
            state.totalPrice = calcTotalPrice(state.items)
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