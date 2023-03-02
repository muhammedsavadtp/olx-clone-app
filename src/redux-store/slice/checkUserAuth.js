import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/dbconfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

//----------------------------------------------------------------------------------------------------------------
const auth = getAuth(app);
//----------------------------------------CREATE-ASYNC-THUNK----------------------------------------------------------------

//sign in with google

const provider = new GoogleAuthProvider();

const signInWithGoogleAuth = createAsyncThunk("api/data", () => {
  return signInWithPopup(auth, provider).then((result) => {
    try {
      // console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePicture = result.user.photoURL;
      const userId =result.user.uid;
     

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePicture", profilePicture);
    } catch (err) {
      console.log(err);
    }
  });
});



// loggout user
const signCurrentOutUser = createAsyncThunk("", () => {
  return signOut(auth);
});

//--------------------------------------------CREATE-SLICE-------------------------------------------------------------------
const checkUserAuth = createSlice({
  name: "checkUserAuth",
  initialState: {
    userPhoneNumber: "",
    currnetUserInfo: [],
    currentUser: false,
    error: "",
    loading: true,
    userLoggedInStatus: false,
    verifyOtp: "",
  },

  //reducers
  reducers: {
    setRequestOtpPhoneNumber: (state, action) => {
      state.userPhoneNumber = action.payload;
    },
    setCurrentUser: (state, action) => {
      const userdetails = action.payload.toJSON();
      if (action.payload) {
        state.currnetUserInfo = userdetails;
        state.currentUser = true;
        console.log("user found");
      } else {
        state.currentUser = false;
        console.log("user logOut");
      }
    },

    setVerifyOtp: (state, action) => {
      console.log("this is action payload  :" + action.payload);

      return {
        ...state,
        verifyOtp: action.payload,
      };
    },
  },

  // extra reducers
  extraReducers: {
    [signInWithGoogleAuth.fulfilled]: (state, action) => {
      state.loading = false;
      state.userLoggedInStatus = true;
    },
    [signInWithGoogleAuth.pending]: (state, action) => {
      state.loading = true;
      state.userLoggedInStatus = false;
    },
    [signInWithGoogleAuth.rejected]: (state, action) => {
      state.loading = false;
      state.userLoggedInStatus = false;
      state.error = "some-error-while-signInwith-Google ";
    },
    // -----------------------------------------------------------------
  },
});

export { signInWithGoogleAuth };
export { signCurrentOutUser };
export const { setRequestOtpPhoneNumber, setCurrentUser, setVerifyOtp } =
  checkUserAuth.actions;







export default checkUserAuth.reducer;
