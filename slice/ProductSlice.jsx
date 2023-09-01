import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
    },
    reducers: {
        getProduct: (state, action) => {
            state.product.push({ ...action.payload });
        },
        incrementQty: (state, action) => {
            const itemPresent = state.product.find((item) => item.id == action.payload.id)
            itemPresent.quantity++
        },
        decrementQty: (state, action) => {
            const itemPresent = state.product.find((item) => item.id == action.payload.id)
            itemPresent.quantity--;
        },
    }
})

export const { getProduct, incrementQty, decrementQty } = ProductSlice.actions
export default ProductSlice.reducer 