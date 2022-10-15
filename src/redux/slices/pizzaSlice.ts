import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

type TPizzaParams = {
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

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async (params: TPizzaParams) => {
        const {sortBy, order, category, search, currentPage} = params
        const response = await axios.get<TPizzaItem[]>(
            `https://634217a5ba4478d47837ddca.mockapi.io/data?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
        )
        return response.data
    }
)

enum PizzaSliceEnum {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

type TPizzaState = {
    items: TPizzaItem[]
    status: PizzaSliceEnum
}

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