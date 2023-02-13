import React, { useEffect, useState } from "react";
import {
  auth,
  signInWithGoogle,
} from "../../../../../../../redux-store/firebase/dbconfig";

import {
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDataInfo } from "../../../../../../../redux-store/slice/firebaseREAD";
import { useDispatch, useSelector } from "react-redux";

const NewTestOtp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataInfo());
    console.log(userData);
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });
  },[] );

  const userData = useSelector((store) => store.db);


  // ---------------------------------------------------------------------------
  const [signInInputMail, SetsignInInputMail] = useState("");
  const [signInInputPassword, SetsignInInputPassword] = useState("");

  const [signUpInputMail, SetsignUpInputMail] = useState("");
  const [signUpInputPassword, SetsignUpInputPassword] = useState("");

  const [signUpUser, setSignUpUser] = useState(false);
  const [signInUser, setSignInUser] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [signUpUserError, setSignUpUserError] = useState("");
  const [signInUserError, setSignInUserError] = useState("");

  async function signUp(e) {
    e.preventDefault();
    console.log("user-sign-Up-btn-clicked");
    console.log("e-mail :" + signUpInputMail);
    console.log("Password :" + signUpInputPassword);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpInputMail,
        signUpInputPassword
      );
      setSignUpUser(true);
      console.log("UserDetailsStoredInFireBase :" + user);
    } catch (error) {
      console.log(error.message);
      setSignUpUserError(error.message);
      setSignUpUser(false);
    }
  }
  async function signIn(e) {
    e.preventDefault();
    console.log("user-sign-In-btn-clicked");
    console.log("e-mail :" + signInInputMail);
    console.log("Password :" + signInInputPassword);

    try {
      const users = await signInWithEmailAndPassword(
        auth,
        signInInputMail,
        signInInputPassword
      );
      setSignInUser(true);
      console.log("User logged in" + users);
    } catch (error) {
      console.log(error.message);
      setSignInUserError(error.message);
      setSignInUser(false);
    }
  }
  function googleSignIn() {
    signInWithGoogle();
  }
  async function signOutUser(e) {
    e.preventDefault();
    console.log("user-sign-out-btn-clicked");
    await signOut(auth);
    console.log("user signout");
    setSignInUser(false);
    setSignUpUser(false);
    SetsignInInputMail("");
    SetsignInInputPassword("");
    SetsignUpInputMail("");
    SetsignUpInputPassword("");
  }
  // ---OTP------------------------------------------------------------------------
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [valid, setValid] = useState(false);
  
  const [confirmObj, setConfirmObj] = useState("");

  //setUp recaptcha
  function setUpRecaptcha() {
    const phonenumber = "+91" + userPhoneNumber;
    const recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
      },
      auth
    );

    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phonenumber, recaptchaVerifier);
  }

  //request OTP 
  const requestOtp = async (e) => {
    e.preventDefault();
    console.log("userphoneNumber :" + userPhoneNumber);

    if (userPhoneNumber === "" || userPhoneNumber === undefined)
      return console.log("please entered a valid phone number");
    try {
      const response = await setUpRecaptcha();
      console.log('this is the response  :'+ response);
      setConfirmObj(response);
      setValid(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log('this confirm obj   :->' + confirmObj)
  //submit OTP
  const submitOtp = async (e) => {
    e.preventDefault();
    console.log(otp);
    if (otp === "" || otp === null) return;
    try {
      console.log('otp confirm page ')
      await confirmObj.confirm(otp);
      console.log("user sucessfully authenticated");
    } catch (err) {
      console.log(err.message);
    }
  };

  // ---------------------------------------------------------------------------
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      ></div>
      {/* ------------ SIGN-UP-------------- */}
      <input
        type="text"
        className="email"
        value={signUpInputMail}
        onChange={(e) => SetsignUpInputMail(e.target.value)}
      />
      <input
        type="text"
        className="password"
        value={signUpInputPassword}
        onChange={(e) => SetsignUpInputPassword(e.target.value)}
      />
      <button onClick={signUp} className="signUpWithEmailAndPassword">
        signUp
      </button>
      <div
        style={{
          width: "100%",
        }}
      ></div>
      <span>{signUpUser ? "signUp user sucessfully" : signUpUserError}</span>
      <div
        style={{
          width: "100%",
        }}
      ></div>
      {/* ------------ SIGN-IN-WITH-EMAIL------------- */}
      <input
        type="text"
        className="email"
        value={signInInputMail}
        onChange={(e) => SetsignInInputMail(e.target.value)}
      />
      <input
        type="text"
        className="password"
        value={signInInputPassword}
        onChange={(e) => SetsignInInputPassword(e.target.value)}
      />
      <button onClick={signIn} className="logingWithEmailAndPassword">
        logIn
      </button>
      <div
        style={{
          width: "100%",
        }}
      ></div>{" "}
      <span>{signInUser ? "sucessfully-signed-in" : signInUserError}</span>
      <h1>{currentUser?.email}</h1>
      <div
        style={{
          width: "100%",
        }}
      ></div>{" "}
      {/* ------------------------SIGN-OUT----------------- */}
      <button onClick={(e) => signOutUser(e)}>SignOut </button>
      <button onClick={googleSignIn}>Sign in with Google</button>
      <div
        style={{
          width: "100%",
        }}
      >
        <h1>{currentUser ? localStorage.getItem("name") : ""} </h1>
        <h1>{currentUser ? localStorage.getItem("email") : ""} </h1>
        {currentUser ? (
          <img src={localStorage.getItem("profilePicture")} alt="" />
        ) : null}

        {/* ---------------SIGN-IN-WITH-OTP---------------------------------- */}
        <div
          className="signInWithPhoneNumber"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            backgroundColor: "blue",
          }}
        >
          {/*---------------- Request to OTP------------- */}
          <input
            type="text"
            placeholder="enter your phoneNumber"
            value={userPhoneNumber}
            onChange={(e) => setUserPhoneNumber(e.target.value)}
          />
          <button onClick={(e) => requestOtp(e)}>RequestOTP</button>

          {/*---------------- Submit-OTP------------ */}
          {valid ? (
            <input
              type="text"
              value={otp}
              placeholder="OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          ) : null}
          {valid ? (
            <button onClick={(e) => submitOtp(e)}>SubmitOTP</button>
          ) : null}

          {/* ------------cptcha-container------------ */}
          {valid ? "" : <div id="sign-in-button" />}
        </div>
      </div>
    </div>
  );
};

export default NewTestOtp;
