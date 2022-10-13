import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizza = createAsyncThunk(
    'pizza/fetchPizza',
    async (params) => {
        const {sortBy, order, category, search, currentPage} = params
        const response = await axios.get(
            `https://634217a5ba4478d47837ddca.mockapi.io/data?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`
        )
        return response.data
    }
)

const initialState = {
    items: [],
    status: 'loading'
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPizza.pending]: state => {
            state.status = 'loading'
        },
        [fetchPizza.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'success'
        },
        [fetchPizza.rejected]: state => {
            state.status = 'error'
        },
    }
})

const {reducer} = pizzaSlice

export default reducer