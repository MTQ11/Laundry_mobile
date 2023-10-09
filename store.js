import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./slice/CartSlice"
import ProductSlice from "./slice/ProductSlice"
import TypeServiceSlice from "./slice/TypeServiceSlice"

export default configureStore({
    reducer:{
        cart: CartSlice,
        product: ProductSlice,
        type: TypeServiceSlice
    }
})
