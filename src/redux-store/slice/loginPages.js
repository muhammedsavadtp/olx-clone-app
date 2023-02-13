import { createSlice } from "@reduxjs/toolkit";

// =============================================================================

const loginPages = createSlice({
    name: "loginPages",
    initialState: '',
    reducers: {
        setCurrentLoginPage: (state, action) => {
            return state = action.payload;
        }
    }
})

//exports 
export const { setCurrentLoginPage } =loginPages.actions;
export default loginPages.reducer;