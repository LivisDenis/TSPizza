import {TCartItem} from "../redux/cart/types";
import {calcTotalCount, calcTotalPrice} from "./calc";

export const getCartLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []

    const totalPrice = calcTotalPrice(items)
    const totalCount = calcTotalCount(items)

    return {
        totalPrice,
        totalCount,
        items: items as TCartItem[]
    }
}