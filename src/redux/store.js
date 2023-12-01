import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice.js";
export const store = configureStore({
    reducer:{
        list:listReducer
    }
})