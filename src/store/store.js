import cartSlice from "./cartSlice";
import productSlice from './productSlice'
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
    }
})

export default store;