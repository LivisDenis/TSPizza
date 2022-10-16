import {createSlice} from "@reduxjs/toolkit";
import {TPizzaState, PizzaSliceEnum} from "./types";
import {fetchPizza} from "./asyncAction";



const initialState: TPizzaState = {
    items: [],
    status: PizzaSliceEnum.LOADING
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizza.pending, state => {
            state.status = PizzaSliceEnum.LOADING
        })
        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = PizzaSliceEnum.SUCCESS
        })
        builder.addCase(fetchPizza.rejected, state => {
            state.status = PizzaSliceEnum.ERROR
        })
    }
})

const {reducer} = pizzaSlice

export default reducer