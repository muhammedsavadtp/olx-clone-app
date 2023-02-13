import React, { useEffect, useRef, useState } from "react";

//assets
import OlxLogo from "../../../assets/OlxLogo";
import Search from "../../../assets/Search";
import Arrow from "../../../assets/Arrow";
import SellButton from "../../../assets/SellButton";
import SellButtonPlus from "../../../assets/SellButtonPlus";
import LocationList from "../location/LocationList";
import Cancel from "../../../assets/Cancel";

//redux
import LanguageSelection from "../languages/LanguageSelection";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../../redux-store/slice/location";
import { signCurrentOutUser } from "../../../redux-store/slice/checkUserAuth";
import { setUserlogIn } from "../../../redux-store/slice/LogInUser";
import { setCurrentLoginPage } from "../../../redux-store/slice/loginPages";

//style sheet
import "./style.css";
import { Link } from "react-router-dom";
// ===============================================================================================================
const Header = () => {
  //state
  const [intputBox1, setInputBox1] = useState(false);
  const [box1Btn, setBox1Btn] = useState(false);
  const [clearBtn, setClearBtn] = useState(false);

  const [btn2, setBtn2] = useState(false); //

  const [userMenu, setUserMenu] = useState(false); // true when click user icon right side down arrow button

  //use
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  //redux
  const { selectLang } = useSelector((state) => state);
  const inputValues = useSelector((store) => store.location);
  const { currnetUserInfo, currentUser } = useSelector(
    (state) => state.checkUserAuth
  );

  //destructure
  const { displayName, email } = currnetUserInfo;

  if (displayName && email) {
    console.log(displayName, email);
  }

  useEffect(() => {
    if (inputValues.length > 0) {
      setBox1Btn(false);
    }
  }, [inputValues]);

  //location input box
  const handleChangeBox1 = (e) => {
    dispatch(setLocation(e.target.value));
    if (e.target.value.length > 0) {
      setBox1Btn(false);
      setClearBtn(true);
    }
  };

  // ----------------------------------------------------------------------------------------
  const box1BtnAction = () => {
    inputRef.current.focus();
    setBox1Btn(!box1Btn);
    if (clearBtn) {
      dispatch(setLocation(""));
    }
  };

  const onFocusBox1 = () => {
    setInputBox1(true);
    setBox1Btn(true);

    setClearBtn(false);

    inputRef.current.select();
  };
  const onBlurBox1 = (e) => {
    e.preventDefault();
    setInputBox1(false);

    if (inputValues.length > 0) {
    }
  };

  // ----------------------------------------------------------------------------------------
  //loging button action
  const LogingAction = () => {
    dispatch(setUserlogIn(true));
    dispatch(setCurrentLoginPage("loginMainPage"));
  };

  // logOut btn action
  const logOutUser = (e) => {
    e.preventDefault();
    dispatch(signCurrentOutUser());
    setUserMenu(false);
    dispatch(setUserlogIn(false));
  };
  // -----------------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <header>
        <div id="main-head">
          <div id="header-box">
            <div className="container">
              <div className="hamburger">
                <div className="hamburger-svg">
                  <svg width="24px" height="24px" viewBox="0 0 1024 1024">
                    <path
                      className="rui-4K4Y7"
                      d="M896 682.667l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 469.333l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 256l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="logo-box">
                <Link to={"/"}>
                  <div className="logo-svg">
                    <OlxLogo />
                  </div>
                </Link>
              </div>
              <div className="location">
                <div className="location-container-1">
                  <div className="location-text">
                    <span>{inputValues}</span>
                  </div>
                  <div className="location-svg">
                    <svg width="18px" height="18px" viewBox="0 0 1024 1024">
                      <path
                        className="rui-4K4Y7"
                        d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="filter-box">
                <div className="filter-svg">
                  <svg width="22px" height="22px" viewBox="0 0 1024 1024">
                    <path
                      className="rui-4K4Y7"
                      d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="input-box-1">
                <div className="box-container">
                  <div
                    onFocus={(e) => onFocusBox1(e)}
                    onBlur={(e) => onBlurBox1(e)}
                    className="bx-c-1"
                    style={{
                      border: `${
                        intputBox1 ? " 2px solid #23e5db" : " 2px solid #002f34"
                      }`,
                    }}
                  >
                    <div className="search">
                      <Search />
                      <span></span>
                    </div>
                    <div className="input">
                      <input
                        ref={inputRef}
                        onChange={handleChangeBox1}
                        value={inputValues}
                        type="text"
                        placeholder="Search city, area or locality"
                        style={
                          {
                            // caretColor: isFocused ? "transparent" : "black",
                          }
                        }
                      />
                    </div>
                    <span className="action-btn" onClick={box1BtnAction}>
                      <div
                        className="btn"
                        style={{
                          transform: `rotate(${box1Btn ? "180deg" : "0deg"})`,
                          transition: "transform .5s",
                          outline: "none",
                        }}
                      >
                        {clearBtn ? <Cancel /> : <Arrow />}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {box1Btn && <LocationList />}

              <div className="input-box-2">
                <div className="container-bx-2">
                  <div className="input-bx-2">
                    <input
                      className="bx-2-inp"
                      type="text"
                      placeholder="Find Cars, Mobile Phones and more..."
                    />
                  </div>
                </div>
              </div>
              <div className="search-btn-bx-2">
                <div className="search-btn-box">
                  <div className="search-svg">
                    <Search />
                  </div>
                </div>
              </div>
              <div className="language-box">
                <div className="container-lang">
                  <span>{selectLang}</span>
                  <div onClick={() => setBtn2(!btn2)} className="arrow-btn">
                    <div
                      style={{
                        transform: `rotate(${btn2 ? "180deg" : "0deg"})`,
                        transition: "transform .5s",
                        outline: "none",
                      }}
                      className="btn-lang"
                    >
                      <Arrow />
                    </div>
                  </div>
                </div>
                <div className="langBox-selection">
                  {btn2 && <LanguageSelection />}
                </div>
              </div>
              {/* --------------------userLogin ----------------*/}
              {currentUser ? (
                <div className="userAfterLogin">
                  <div className="chat_notification_cintainer">
                    <div className="chatBox">
                      <button>
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024">
                          <path
                            className="rui-4K4Y7"
                            d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="notificationBox">
                      <button>
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024">
                          <path
                            className="rui-4K4Y7"
                            d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="userProfileBox">
                    <div className="iconProfile">
                      <div className="iconImage-box">
                        <img
                          src="https://statics.olx.in/external/base/img/avatar_1.png"
                          alt=""
                        ></img>
                      </div>
                      <div className="userMenu-box">
                        <div
                          className="svg_icon_userMenu"
                          onClick={(e) => {
                            e.preventDefault();
                            setUserMenu(!userMenu);
                          }}
                        >
                          <svg
                            width="20px"
                            height="20px"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              className="rui-4K4Y7"
                              d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* -----------------user-menulist------------ */}

                  {userMenu && (
                    <div className="userMenu_list">
                      <div className="userMenu_list_container">
                        <div className="profile">
                          <div className="image_box_1">
                            <img
                              style={{ width: "56px", height: "56px" }}
                              src="https://statics.olx.in/external/base/img/avatar_1.png"
                              alt=""
                            />
                          </div>
                          <div className="loggedUser">
                            <div className="logged_user_container-1">
                              <div className="greetings_logged_user">
                                <span>Hello</span>,
                              </div>
                            </div>
                            <div className="logged_user_container-2">
                              <div
                                className="logged_user_name"
                                style={{
                                  color: "#002f34",
                                  fontSize: "20px",
                                  lineHeight: "24px",
                                  fontWeight: "700",
                                }}
                              >
                                {displayName}
                              </div>
                            </div>
                            <span className="view_edit_user_profile">
                              <span
                                style={{
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  color: "rgb(0, 47, 52)",
                                }}
                              >
                                View and edit profile
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="profileCompletion">
                          <h3 className="steps_remainder">6 steps left</h3>
                          <div className="steps_user_profile">
                            <div className="progressBar">
                              <div className="steps"></div>
                              <div className="steps"></div>
                              <div className="steps"></div>
                              <div className="steps"></div>
                              <div className="steps"></div>
                              <div className="steps"></div>
                            </div>
                          </div>
                          <div className="description_user_profile">
                            We are built on trust. Help one another to get to
                            know each other better.
                          </div>
                        </div>
                        <div className="menu_list_items">
                          <div className="list_boxes">
                            <div className="box_items_1">
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M349.46 85.333h487.619l40.635 40.635v609.524l-40.635 40.635h-487.619l-40.635-40.635v-609.524l40.635-40.635zM390.095 694.857h406.35v-528.254h-406.35v528.254zM146.286 247.873l40.635-40.635 40.635 40.635v609.524h528.254l40.635 40.635-40.635 40.635h-568.889l-40.635-40.635v-650.159zM512 329.143h162.54l40.635 40.635-40.635 40.635h-162.54l-40.635-40.635 40.635-40.635zM512 491.683h81.27l40.635 40.635-40.635 40.635h-81.27l-40.635-40.635 40.635-40.635z"
                                ></path>
                              </svg>
                            </div>
                            <span>My ADS</span>
                          </div>
                          <div className="list_boxes">
                            <div className="box_items_1">
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M426.667 42.667h170.667l42.667 42.667-42.667 42.667h256l42.667 42.667v768l-42.667 42.667h-682.667l-42.667-42.667v-768l42.667-42.667h256l-42.667-42.667 42.667-42.667zM213.333 896h597.333v-682.667h-597.333v682.667zM469.333 426.667v-85.333h256v85.333h-256zM298.667 426.667v-85.333h85.333v85.333h-85.333zM469.333 597.333v-85.333h256v85.333h-256zM298.667 597.333v-85.333h85.333v85.333h-85.333zM469.333 768v-85.333h256v85.333h-256zM298.667 768v-85.333h85.333v85.333h-85.333z"
                                ></path>
                              </svg>
                            </div>
                            <span>Buy Business Packages</span>
                          </div>
                          <div className="list_boxes">
                            <div className="box_items_1">
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M899.285 256l39.381 39.083v476.501l-39.381 39.083h-774.571l-39.381-39.083v-476.501l39.381-39.083h774.571zM853.461 511.573h-681.6v213.632h681.6v-213.632zM693.205 618.411h76.459l34.901 32.213-34.901 32.213h-128.896l-34.901-32.213 34.901-32.213h52.437zM853.461 341.248h-681.387v86.357l681.387-2.347v-84.053z"
                                ></path>
                              </svg>
                            </div>
                            <span>Bought Packages &amp; Billing</span>
                          </div>
                          <div className="list_boxes line_1_1">
                            <div className="box_items_1 ">
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M550.789 744.728c0 21.41-17.377 38.789-38.789 38.789s-38.789-17.377-38.789-38.789 17.377-38.789 38.789-38.789 38.789 17.377 38.789 38.789zM686.546 415.030c0 82.89-58.105 152.513-135.757 170.201v43.131l-38.789 38.789-38.789-38.789v-77.575l38.789-38.789c53.489 0 96.97-43.481 96.97-96.97s-43.481-96.97-96.97-96.97-96.97 43.481-96.97 96.97l-38.789 38.789-38.789-38.789c0-96.232 78.312-174.546 174.546-174.546s174.546 78.312 174.546 174.546zM512 861.090c-192.505 0-349.090-156.626-349.090-349.090 0-192.505 156.587-349.090 349.090-349.090 192.466 0 349.090 156.587 349.090 349.090 0 192.466-156.626 349.090-349.090 349.090zM512 85.333c-235.288 0-426.667 191.379-426.667 426.667s191.379 426.667 426.667 426.667 426.667-191.379 426.667-426.667-191.379-426.667-426.667-426.667z"
                                ></path>
                              </svg>
                            </div>
                            <span>Help</span>
                          </div>
                          <span
                            className="list_boxes "
                            data-aut-id="btnProfileLanguage"
                          >
                            <div className="box_items_1 rnPqb">
                              <svg
                                width="25px"
                                height="25px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M679.214 818.309l-77.189-77.189 78.312-104.494 131.801 52.751c-32 53.915-77.809 98.715-132.927 128.93zM434.425 852.091v-184.941l-38.789-38.789h-212.364c-12.955-36.461-20.364-75.52-20.364-116.364 0-14.235 1.125-28.237 2.792-42.047l53.294 35.53 38.827 2.405 124.51-62.254 58.609 87.854 49.649 13.189 232.728-116.364 16.29-53.915-110.080-192.737c134.75 48.408 231.564 177.106 231.564 328.339 0 37.197-5.973 72.999-16.795 106.667l-162.715-65.125-45.459 12.761-116.364 155.151 3.608 50.695 77.15 77.15c-28.315 7.409-57.871 11.791-88.513 11.791-26.687 0-52.557-3.297-77.575-8.999zM221.945 705.939h134.905v118.303c-54.535-27.23-101.159-67.995-134.905-118.303zM512 162.91c5.663 0 11.17 0.582 16.795 0.853l123.112 215.506-165.43 82.734-58.57-87.893-49.649-13.189-134.982 67.49-57.871-38.555c49.649-132.306 177.106-226.949 326.593-226.949zM512 85.333c-235.249 0-426.667 191.379-426.667 426.667 0 235.249 191.418 426.667 426.667 426.667 235.288 0 426.667-191.418 426.667-426.667 0-235.288-191.379-426.667-426.667-426.667z"
                                ></path>
                              </svg>
                            </div>
                            Select language / भाषा चुनें
                          </span>
                          <div className="list_boxes line_1_1">
                            <div className="box_items_1">
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"
                                ></path>
                              </svg>
                            </div>
                            <span>Settings</span>
                          </div>
                          <div className="list_boxes line_1_1 ">
                            <div className="box_items_1">
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M891.008 822.315l47.659 48.853-47.701 48.085h-757.931l-47.701-48.853 47.787-48.043h757.888zM493.525 85.333l46.507 46.592 0.213 475.179 178.475-189.483 62.976 0.299-0.256 58.752 2.091 4.267-290.005 302.592-291.84-304.512 4.011-4.139 0.256-57.472 62.507 0.213 178.475 189.483 0.171-475.179 46.421-46.592z"
                                ></path>
                              </svg>
                            </div>
                            <span>Install OLX Lite app</span>
                          </div>
                          <span
                            className="list_boxes"
                            data-aut-id="btnProfileLogout"
                            onClick={(e) => logOutUser(e)}
                          >
                            <div className="box_items_1">
                              <svg
                                width="23px"
                                height="23px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-4K4Y7"
                                  d="M128 85.333l-42.667 42.667v768l42.667 42.667h768l42.667-42.667v-213.333l-42.667-42.667-42.667 42.667v170.667h-682.667v-682.667h682.667v170.667l42.667 42.667 42.667-42.667v-213.333l-42.667-42.667h-768zM494.336 298.667l-183.168 183.168v60.331l183.168 183.168h60.331v-60.331l-110.336-110.336h323.669l42.667-42.667-42.667-42.667h-323.669l110.336-110.336v-60.331h-60.331z"
                                ></path>
                              </svg>
                            </div>
                            <span>Logout</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="login-box">
                  <span onClick={LogingAction}>Login</span>
                </div>
              )}

              <Link to={"/sell"}>
                {" "}
                <div className="sell-box">
                  <div className="sell-btn-box">
                    <div className="sell-btn-svg">
                      <div className="inside-sell-btn">
                        <SellButton />
                        <div className="sellMenuContent">
                          <SellButtonPlus></SellButtonPlus>
                          <span>SELL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container-2">
              <div className="search-box-2">
                <div className="input-box-2-container">
                  <div className="search-svg-bx-2">
                    <svg width="20px" height="20px" viewBox="0 0 1024 1024">
                      <path
                        className="rui-4K4Y7"
                        d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"
                      ></path>
                    </svg>
                  </div>
                  <div className="input-box-2">
                    <span>
                      <b>Motorcycles</b> near Delhi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
