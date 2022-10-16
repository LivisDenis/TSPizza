import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {TPizzaItem, TPizzaParams} from "./types";

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