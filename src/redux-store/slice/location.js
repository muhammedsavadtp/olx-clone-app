import { createSlice } from "@reduxjs/toolkit";

const location = createSlice({
    name: 'selectlocation',
    initialState: 'Kerala',
    reducers: {
        setLocation: (state, action) => {
            return state = action.payload;
        }
    }
    
})

export const { setLocation } = location.actions;
export default location.reducer;