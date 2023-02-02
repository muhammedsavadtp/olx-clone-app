import { createSlice } from "@reduxjs/toolkit";

const LogInUser = createSlice({
    name: "logIn",
    initialState: false,
    reducers: {
        setUserlogIn: (state, action) => {
            return state = action.payload;
        }
    }

})

export const { setUserlogIn } = LogInUser.actions;
export default LogInUser.reducer;