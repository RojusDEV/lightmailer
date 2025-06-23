import { createSlice } from "@reduxjs/toolkit";

export const selectedSlice = createSlice({
    name: "selected",
    initialState: { value: 0 },
    reducers: {
        changeVal: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeVal } = selectedSlice.actions;
export default selectedSlice.reducer;