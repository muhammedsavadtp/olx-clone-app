// redux
import React, { useEffect, useState } from "react";
import { signInWithGoogleAuth } from "../../../../../redux-store/slice/checkUserAuth";
import { useSelector, useDispatch } from "react-redux";
import { setUserlogIn } from "../../../../../redux-store/slice/LogInUser";
import { setCurrentLoginPage } from "../../../../../redux-store/slice/loginPages";
//assets
import Google from "../../../../../assets/Google";
import Phone from "../../../../../assets/Phone";
import Cancel from "../../../../../assets/Cancel";
//router
import { Link, useNavigate } from "react-router-dom";
// style sheet
import "./style.css";
// =========================================================================================================

const SignInPageContent = () => {
  const [btn, setbtn] = useState(1);
  // use
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // destructure
  const { userLoggedInStatus } = useSelector((state) => state.checkUserAuth);

  //close btn action
  const closeAction = () => {
    dispatch(setCurrentLoginPage(""));
  };

  // when page render
  useEffect(() => {
    if (userLoggedInStatus) {
      navigate("/");
      dispatch(setCurrentLoginPage(""));
    }
    return () => {
      dispatch(setUserlogIn(false));
    };
  });

  //continue with phone
  const continueWithPhone = (e) => {
    e.preventDefault();
    dispatch(setCurrentLoginPage("continueWithPhone"));
    console.log("continue with phone")
  };

  //sign in with google account
  const signInWithGoogle = (e) => {
    e.preventDefault();
    dispatch(signInWithGoogleAuth());

    console.log("userStatus :" + userLoggedInStatus);
  };

  //----------------------------------------------------------------------------------------------------------------
  return (
    <div className="box-log">
      <div className="container">
        <div className="main_box">
          <span className="btnClose">
            <div className="svgClose" onClick={closeAction}>
              <Link to={"/"}>
                <Cancel />
              </Link>
            </div>
          </span>
          <div className="login_model">
            <div className="poster ">
              <div className="poster-container">
                <div className="slick-list-container">
                  <div className="slick-list ">
                    <div className="pictur-box">
                      <img
                        src={`${
                          btn === 1
                            ? "https://statics.olx.in/external/base/img/loginEntryPointChat.png"
                            : btn === 2
                            ? "https://statics.olx.in/external/base/img/loginEntryPointFavorite.png"
                            : btn === 3
                            ? "https://statics.olx.in/external/base/img/loginEntryPointPost.png"
                            : null
                        }`}
                        alt=""
                      />
                    </div>
                    <h3 className="description">
                      {btn === 1 ? (
                        <span>Keep all your favourites in one place.</span>
                      ) : btn === 2 ? (
                        <span>Close deals from the comfort of your home.</span>
                      ) : btn === 3 ? (
                        <span>
                          Help us become one of the safest places to buy and
                          sell
                        </span>
                      ) : null}
                    </h3>
                  </div>
                </div>
                <ul>
                  <li>
                    {" "}
                    <button
                      style={{
                        position: "relative",
                        backgroundColor: "white",
                      }}
                      onClick={() => setbtn(1)}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          content: " ",
                          display: "block",
                          borderRadius: "50%",
                          boxSizing: "border-box",
                          backgroundColor: `${
                            btn === 1
                              ? "rgb(35, 229, 219)"
                              : "rgba(0, 47, 52, 0.36)"
                          }`,

                          position: "absolute",
                        }}
                      />
                      1
                    </button>
                  </li>
                  <li>
                    {" "}
                    <button
                      style={{
                        position: "relative",
                        backgroundColor: "white",
                      }}
                      onClick={() => setbtn(2)}
                    >
                      {" "}
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          content: " ",
                          display: "block",
                          borderRadius: "50%",
                          boxSizing: "border-box",
                          backgroundColor: `${
                            btn === 2
                              ? "rgb(35, 229, 219)"
                              : "rgba(0, 47, 52, 0.36)"
                          }`,

                          position: "absolute",
                        }}
                      />
                      2
                    </button>
                  </li>
                  <li>
                    {" "}
                    <button
                      style={{
                        position: "relative",
                        backgroundColor: "white",
                      }}
                      onClick={() => setbtn(3)}
                    >
                      {" "}
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          content: " ",
                          display: "block",
                          borderRadius: "50%",
                          boxSizing: "border-box",
                          backgroundColor: `${
                            btn === 3
                              ? "rgb(35, 229, 219)"
                              : "rgba(0, 47, 52, 0.36)"
                          }`,

                          position: "absolute",
                        }}
                      />
                      3
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" siginWith">
              <Link className="link-1" to={"/signinphone"}>
                {" "}
                <div className="input-bx" onClick={(e) => continueWithPhone(e)}>
                  <div className="container-inp-bx-2">
                    <div className="svg">
                      <Phone />
                    </div>

                    <span> Continue with Phone</span>
                  </div>
                </div>{" "}
              </Link>{" "}
            </div>
            <div className="siginWith ">
              <Link className="link-1">
                {" "}
                <div className="input-bx" onClick={(e) => signInWithGoogle(e)}>
                  <div className="container-inp-bx-2">
                    <div className="svg">
                      <Google />
                    </div>

                    <span>Continue with Google</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className=" option">
              <p>OR</p>
            </div>
            <div className="siginWithEmail ">
              <span>Login with Email</span>
            </div>
            <div className=" footer-box">
              <div className="security">
                <span>All your personal details are safe with us.</span>
              </div>
              <p>
                <span>If you continue, you are accepting </span>
                <a href="https://help.olx.in/hc/en-us">
                  <span className="termsAndConditions">
                    <span>OLX Terms and Conditions and Privacy Policy</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPageContent;
