import { createSlice } from "@reduxjs/toolkit";

const darkmod = createSlice({
  name: "root",
  initialState: true,
  reducers: {
    toggleDarkMode: (state, action) => {
      return (state = true);
    },
  },
});

export const { toggleDarkMode } = darkmod.actions;
export default darkmod.reducer;
