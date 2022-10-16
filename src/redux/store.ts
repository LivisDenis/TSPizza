import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import pizzaSlice from "./pizza/slice";
import cartSlice from "./cart/slice";
import filterSlice from "./filter/slice";

export const store = configureStore({
    reducer: {
        filterSlice,
        cartSlice,
        pizzaSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch