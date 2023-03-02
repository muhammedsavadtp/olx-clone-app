import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/dbconfig"

const getDataInfo = createAsyncThunk('api/data', () => {
    return getDocs(collection(db, "products"))
        .then((querySnapshot) => {
            const newData = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
            return newData;
        }) 
})

const firebase = createSlice({ 
    name: "data",
    initialState: {
        data: [],
        error: '',
        loading: false,
    },
    extraReducers: {
        [getDataInfo.pending]: (state, action) => {
            state.loading = true;
        },
        [getDataInfo.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload;
        },
        [getDataInfo.rejected]: (state, action) => {
            state.loading = false;
            state.error = 'some error found'
        },
    }

})

export { getDataInfo }
export default firebase.reducer;
