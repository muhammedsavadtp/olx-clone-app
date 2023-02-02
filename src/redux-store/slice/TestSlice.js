import { createSlice } from "@reduxjs/toolkit";

const testslice = createSlice({
  name: "submiAction",
  initialState: " ",
  reducers: {
    changename: (state, action) => {
      return 'hello guys ';
    },
    },
    extraReducers: {
        reset: () => {
            return ''
        }
    }
});

export const { changename } = testslice.actions;
export default testslice.reducer;
