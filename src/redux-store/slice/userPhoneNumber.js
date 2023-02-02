import { createSlice } from "@reduxjs/toolkit";

const userPhoneNumber = createSlice({
  name: "userPhoneNumber",
  initialState: {
    phoneNumber: "",
    isValid: false,
    submitPhoneNumber: "",
  },
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      if (state.phoneNumber.length === 10) {
        state.isValid = true;
        state.submitPhoneNumber = state.phoneNumber;
      } else {
        state.isValid = false;
        state.submitPhoneNumber = "";
      }
    },
  },
});

export const { setPhoneNumber, checkPhoneNumber } = userPhoneNumber.actions;
export default userPhoneNumber.reducer;
