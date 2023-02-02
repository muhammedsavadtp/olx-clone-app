import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getUserAuth = createAsyncThunk((data) => {});

const checkUserAuth = createSlice({
  name: "checkUserAuth",
  initialState: {
    userPhoneNumber: "",
    UserInfo: [],
    error: "",
    loading: true,
  },
    reducers: {
        setRequestOtpPhoneNumber: (state, action) => {
            state.userPhoneNumber = action.payload;
      }
  },
  extraReducers: {
    [getUserAuth.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getUserAuth.pending]: (state, action) => {
      state.loading = true;
    },
    [getUserAuth.rejected]: (state, action) => {
      state.loading = false;
      state.error = "some-error";
    },
  },
});

export const { setRequestOtpPhoneNumber } = checkUserAuth.actions;
export default checkUserAuth.reducer;