import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchItems} from "./items.thunk";
import {ItemsSliceInterface} from "./items.interface";
import {ItemInterface} from "../../types/item.interface";
import {mapItems} from "../../utils/mapItems";


const initialState: ItemsSliceInterface = {
    mappedItems: [],
    originItems: [],
    isLoading: false,
    error: ''
}

const itemsSlice = createSlice({
    initialState,
    name: 'items',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItems.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchItems.fulfilled, (state, {payload}: PayloadAction<ItemInterface[]>) => {
            state.mappedItems = mapItems(payload)
            state.originItems = payload
            state.isLoading = false
        })
        builder.addCase(fetchItems.rejected, (state, action) => {
            state.error = action.payload ? action.payload : 'Something wrong'
            state.isLoading = false
        })
    }
})

export default itemsSlice.reducer
export const itemsActions = itemsSlice.actions