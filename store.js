import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slice/CartSlice"
import ProductSlice from "./slice/ProductSlice"

export default configureStore({
    reducer:{
        cart: CartSlice,
        product: ProductSlice
    }
})
