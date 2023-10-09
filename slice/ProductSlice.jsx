import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
    name: "product",
    initialState: {
        product: [],
        productSearch: [],
    },
    reducers: {
        getProduct: (state, action) => {
            state.product.push({ ...action.payload })
        },
        incrementQty: (state, action) => {
            const itemPresent = state.product.find((item) => item.id == action.payload.id)
            itemPresent.quantity++
            const itemPresentSearch = state.productSearch.find((item) => item.id == action.payload.id)
            itemPresentSearch != undefined ? itemPresentSearch.quantity++ : null
        },
        decrementQty: (state, action) => {
            const itemPresent = state.product.find((item) => item.id == action.payload.id)
            itemPresent.quantity--;
            const itemPresentSearch = state.productSearch.find((item) => item.id == action.payload.id)
            itemPresentSearch != undefined ? itemPresentSearch.quantity-- : null
        },
        resetProduct: (state) => {
            state.product = []
        },
        findProduct: (state, action) => {
            const product = []
            const keyItem = state.product.filter((item) => item.name.toLowerCase().split(" ").join("").includes(action.payload.toLowerCase().split(" ").join("")) )
            if (keyItem.length > 0) {
                product.push(...keyItem)
            }
            state.productSearch = product
        }
    },
    
})


export const { getProduct, incrementQty, decrementQty, resetProduct, findProduct } = ProductSlice.actions
export default ProductSlice.reducer 