import {createAsyncThunk} from "@reduxjs/toolkit";
import {ItemInterface} from "../../types/item.interface";

export const fetchItems = createAsyncThunk<ItemInterface[], string, {rejectValue:string}>('items/fetchItems', async (url, thunkAPI) => {
    try {
        const response = await fetch(url)
        if (!response.ok)
            throw Error(response.statusText);
        return await response.json()
    } catch (e) {
        if (e instanceof Error)
        return thunkAPI.rejectWithValue(e.message)
    }
})