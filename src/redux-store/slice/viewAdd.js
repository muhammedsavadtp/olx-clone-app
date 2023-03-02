import { createSlice } from "@reduxjs/toolkit";

const viewAdd = createSlice({
    name: "viewAdd",
    initialState: '',
    reducers: {
        setViewAddId: (state, action) => {
            return action.payload;
        }
    }
})

export const { setViewAddId } = viewAdd.actions;
export default viewAdd.reducer; 