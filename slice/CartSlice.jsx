import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id == action.payload.id)
            if (itemPresent) {
                itemPresent.quantity++
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 })
            }

        },
        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if (itemPresent.quantity == 1) {
                const deletedItem = state.cart.filter((item) => item.id !== action.payload.id)
                state.cart = deletedItem
            } else
                itemPresent.quantity--;
        },
        removeCart: (state, action) => {
            const deleteItem = state.cart.filter((item) => item.id !== action.payload.id)
            state.cart = deleteItem
        },
        resetCart: (state) => {
            state.cart = []
        }
    }
})

export const { addCart, incrementQuantity, decrementQuantity, removeCart, resetCart } = CartSlice.actions
export default CartSlice.reducer