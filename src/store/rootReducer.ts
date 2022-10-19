import {combineReducers} from "@reduxjs/toolkit";
import itemsSlice from "./items/itemsSlice";


export const rootReducer = combineReducers({
    items:itemsSlice
})