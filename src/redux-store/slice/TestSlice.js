/* 
import { createAction, createSlice } from "@reduxjs/toolkit";
const incrementBy = createAction("incrementBy");
const decrement = createAction("decrement");

function isRejectedAction(action) {
  return action.type.endsWith("rejected");
}

const testslice = createSlice({
  name: "submiAction",
  initialState: " ",
  reducers: {
    changename: (state, action) => {
      return "hello guys ";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementBy, (state, action) => {
        // action is inferred correctly here if using TS
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(decrement, (state, action) => {})
      // You can match a range of action types
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {}
      )
      // and provide a default case if no other handlers matched
      .addDefaultCase((state, action) => {});
  },
});

export const { changename } = testslice.actions;
export default testslice.reducer;
*/