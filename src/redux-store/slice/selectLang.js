import { createSlice } from "@reduxjs/toolkit";

const selectLang = createSlice({
    name: "lang",
    initialState: 'English',
    reducers: {
        setLang: (state, action) => {
            return state = action.payload;
        }
    }
})

export const { setLang } = selectLang.actions;
export default selectLang.reducer;