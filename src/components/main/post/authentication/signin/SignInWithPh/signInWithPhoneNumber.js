import React, { useEffect, useState } from "react";
import Cancel from "../../../../../../assets/Cancel";
import { useSelector, useDispatch } from "react-redux";
import { setUserlogIn } from "../../../../../../redux-store/slice/LogInUser";
import { setPhoneNumber } from "../../../../../../redux-store/slice/userPhoneNumber";
import { setRequestOtpPhoneNumber } from "../../../../../../redux-store/slice/checkUserAuth";
import { Link } from "react-router-dom";
import BackArrow from "../../../../../../assets/BackArrow";
import OlxLogo from "../../../../../../assets/OlxLogo";

import "./style.css";

const SignInWithPhoneNumber = () => {
  //store
  const dispatch = useDispatch();

  const { phoneNumber, isValid, submitPhoneNumber } = useSelector(
    (state) => state.userPhoneNumber
  );
  const closeAction = () => dispatch(setUserlogIn(false));

  //

  return (
    <div className="box-log">
      <div className="container">
        <div className="main_box">
          <span className="btns-container">
            <div className="svgClose-1" onClick={closeAction}>
              <Link to={"/"}>
                <Cancel />
              </Link>
            </div>
            <div className="svgBack-1">
              <Link to={"/signIn"}>
                <BackArrow />{" "}
              </Link>
            </div>
          </span>
          <div className="login_model_1">
            <div className="poster-1 ">
              <div className="poster-container-1">
                <div className="slick-list-container-1">
                  <div className="slick-list-1 ">
                    <div className="pictur-box-1">
                      <svg width="60px" height="60px" viewBox="0 0 1024 1024">
                        <path
                          class="rui-l7uK1"
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
              <div className=" siginWithPhoneNo_container">
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
                    autocomplete="off"
                    type="number"
                    step="any"
                    className="phone-c-1-b"
                    value={phoneNumber}
                    onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                  />
                </div>
              </div>

              <Link
                to={`${isValid ? "/singinwithotp" :"/signinphone"}`}
                className="link-next-btn"
              >
                <button
                  onClick={() =>
                    dispatch(setRequestOtpPhoneNumber(submitPhoneNumber))
                  }
                  className="btn-submit-next"
                  style={{
                    background: `${isValid ? "#002f34" : "#d8dfe0"}`,
                    color: `${isValid ? "#fff" : "#7f9799"}`,
                    border: `${isValid ? "#002f34" : "#7f9799"}`,
                  }}
                >
                  <span>Next</span>
                </button>
              </Link>

              <p className="bottom-text">
                <span>
                  Your contact number is never shared with external parties nor
                  do we use it to spam you in any way.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWithPhoneNumber;
