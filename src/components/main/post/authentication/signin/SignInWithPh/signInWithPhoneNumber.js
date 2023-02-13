import React, { useState } from "react";
//asset
import Cancel from "../../../../../../assets/Cancel";
import BackArrow from "../../../../../../assets/BackArrow";
//redux
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLoginPage } from "../../../../../../redux-store/slice/loginPages";
import { setPhoneNumber } from "../../../../../../redux-store/slice/userPhoneNumber";
import {
  setRequestOtpPhoneNumber,
  setVerifyOtp,
} from "../../../../../../redux-store/slice/checkUserAuth";

//style sheet
import "./style.css";
//firebase
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../../../../redux-store/firebase/dbconfig";
//=================================================================================================================

const SignInWithPhoneNumber = () => {
  //state
  const [loading, setLoading] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  //use
  const dispatch = useDispatch();

  // destructure
  const { phoneNumber, isValid, submitPhoneNumber } = useSelector(
    (state) => state.userPhoneNumber
  );
  //close btn action
  const closeAction = () => dispatch(setCurrentLoginPage(""));
  //backTo btn action
  const backTo = () => dispatch(setCurrentLoginPage("loginMainPage"));

  //when press 'enter' key
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && submitPhoneNumber) {
      nextPage();
    }
  };

  // -------------------------------------------------------------------------------------
  // continue to sign in with OTP
  const nextPage = async () => {
    dispatch(setRequestOtpPhoneNumber(submitPhoneNumber));
    if (isValid) {
      // action when click next button

      await requestOtp();
    } else {
      dispatch(setCurrentLoginPage("continueWithPhone"));
      console.log("Phone number is not valid");
    }
  };
  // request OTP
  const { verifyOtp } = useSelector((state) => state.checkUserAuth);
  console.log("initial verify otp  :" + verifyOtp);

  const requestOtp = async () => {
    setLoading(true);
    try {
      // const response = await setUpRecaptcha();
      const response = await setUpRecaptcha();
      dispatch(setVerifyOtp(response));
      console.log("after setverify otp  :" + verifyOtp);

      dispatch(setCurrentLoginPage("signInWithOtp"));
      console.log("Recaptcha verification successful");
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      console.error("Error with recaptcha verification:", err);
    }
  };

  // set up recaptcha
  const setUpRecaptcha = async () => {
    const phoneNumber = "+91" + submitPhoneNumber;
    console.log(phoneNumber);
    const recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
      },
      auth
    );

    recaptchaVerifier.render();

    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  };

  //----------------------------------------------------------------------------------------------------------------

  return (
    <div className="box-log">
      <div className="container">
        <div className="main_box">
          {loading && (
            <div
              className="loading-page"
              style={{
                display: "flex",
                justifyContent: "center",
                allignItems: "center",
              }}
            >
              {" "}
              <h1>loading....</h1>
            </div>
          )}
          {loading ? null : (
            <span className="btns-container">
              <div
                className="svgClose-1"
                onClick={closeAction}
                style={{
                  cursor: "pointer",
                }}
              >
                <Cancel />
              </div>
              <div
                className="svgBack-1"
                onClick={backTo}
                style={{
                  cursor: "pointer",
                }}
              >
                <BackArrow />{" "}
              </div>
            </span>
          )}
          {loading ? null : (
            <div className="login_model_1">
              <div className="poster-1 ">
                <div className="poster-container-1">
                  <div className="slick-list-container-1">
                    <div className="slick-list-1 ">
                      <div className="pictur-box-1">
                        <svg width="60px" height="60px" viewBox="0 0 1024 1024">
                          <path
                            className="rui-l7uK1"
                            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="description-1">Enter your phone number</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" main-input-box">
                <div
                  className=" siginWithPhoneNo_container"
                  style={{
                    boxShadow: `${
                      inputFocus
                        ? "inset 0 0 0 3px #00a49f"
                        : "inset 0 0 0 1px rgb(0 47 52 / 64%)"
                    }`,
                  }}
                >
                  <div className="siginWithPhoneNo_container_main">
                    <div className="countryCode-1">+91</div>

                    <input
                      style={{
                        backgroundColor: "red",
                        appearance: "none",
                        background: "none",
                        border: "none",
                        color: " #002f34",
                        display: "block",
                        fontSize: "16px",
                        height: "48px",
                        boxSizing: "border-box",
                        outline: "none",
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        width: "100%",
                        placeholder: "Phone Number",
                        step: "any",
                      }}
                      type="number"
                      step="any"
                      className="phone-c-1-b"
                      value={phoneNumber}
                      onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                      onKeyDown={(e) => handleKeyDown(e)}
                      onFocus={() => setInputFocus(true)}
                      onBlur={() => setInputFocus(false)}
                    />
                  </div>
                </div>

                <div
                  id="next_btn"
                  onClick={(e) => {
                    nextPage(e);
                    setInputFocus(false);
                  }}
                  className="btn-submit-next"
                  style={{
                    background: `${
                      isValid && isHovered
                        ? "#fff"
                        : isValid
                        ? "#002f34"
                        : "#d8dfe0"
                    }`,
                    color: `${
                      isValid && isHovered
                        ? "#002f34"
                        : isValid
                        ? "#fff"
                        : "#7f9799"
                    }`,
                    border: `${
                      isValid && isHovered
                        ? "5px solid #002f34"
                        : isValid
                        ? "5px solid #002f34"
                        : "5px solid #d8dfe0"
                    }`,
                    borderRadius: "4px",
                    padding: "0 7px",
                    fontSize: "16px",
                    height: "48px",
                    margin: "4px 0",
                    width: " 100%",
                    fontFamily: "Roboto, Arial, Helvetica, sans-serif",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: `${isValid ? "pointer" : "not-allowed"}`,
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span style={{ fontWeight: "700" }}>Next</span>
                </div>

                <p className="bottom-text">
                  <span>
                    Your contact number is never shared with external parties
                    nor do we use it to spam you in any way.
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div id="sign-in-button"></div>
    </div>
  );
};

export default SignInWithPhoneNumber;
