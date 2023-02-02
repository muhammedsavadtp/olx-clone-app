import React from "react";
import { Route, Routes } from "react-router";
import Error from "../pages/Error";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignInWithPh from "../components/main/post/authentication/signin/SignInWithPh/signInWithPhoneNumber";
import RequestOTP from "../components/main/post/authentication/signin/SignInWithPh/OTP/RequestOTP";
import './route.css'
const PageRouter = () => {
  return (
    <div className="pages">

    <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signinphone" element={<SignInWithPh/>} />
        <Route path="singinwithotp" element={<RequestOTP />} />
        <Route path="*" element={<Error />} />
        
    </Routes>
    </div>
  );
};

export default PageRouter;
