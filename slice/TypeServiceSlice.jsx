import { createSlice } from "@reduxjs/toolkit";

export const TypeServiceSlice = createSlice({
    name: "type",
    initialState: {
        type: "Laundry",
    },
    reducers: {
        getTypeService: (state, action) => {
            state.type = action.payload
        },
    }
})

export const { getTypeService } = TypeServiceSlice.actions
export default TypeServiceSlice.reducer 