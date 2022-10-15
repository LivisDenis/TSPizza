import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum SortPropertyEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    TITLE_DESC = 'title',
    TITLE_ASC = '-title',
}

type TSort = {
    name: string,
    sortProperty: SortPropertyEnum
}

type TFilterState = {
    searchValue: string
    categoryId: number
    currentPage: number
    sort: TSort
}

const initialState: TFilterState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.RATING_DESC
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSort(state, action: PayloadAction<TSort>) {
            state.sort = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        }
    }
})

const {actions, reducer} = filterSlice

export const {setCategoryId, setSort, setCurrentPage, setSearchValue} = actions

export default reducer