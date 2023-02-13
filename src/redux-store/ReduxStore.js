import { configureStore } from "@reduxjs/toolkit";
import TestSlice from "./slice/TestSlice";
import firebaseSlice from "./slice/firebaseREAD";
import darkmod from "./slice/rootId";
import location from "./slice/location";
import selectLang from "./slice/selectLang";
import LogInUser from "./slice/LogInUser";
import userPhoneNumber from "./slice/userPhoneNumber";
import checkUserAuth from "./slice/checkUserAuth";
import loginPages from "./slice/loginPages";

// ==============================================================================================

const store = configureStore({
  reducer: {
    testobj: TestSlice,
    db: firebaseSlice,
    darkmod,
    location,
    selectLang,
    LogInUser,
    userPhoneNumber,
    checkUserAuth,
    loginPages,
  },
});

export default store;
