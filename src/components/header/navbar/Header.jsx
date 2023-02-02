import React, { useState } from "react";
import OlxLogo from "../../../assets/OlxLogo";
import Search from "../../../assets/Search";
import Arrow from "../../../assets/Arrow";
import SellButton from "../../../assets/SellButton";
import SellButtonPlus from "../../../assets/SellButtonPlus";
import "./style.css";
import LocationList from "../location/LocationList";
import Cancel from "../../../assets/Cancel";


//redux
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../../redux-store/slice/location";
import LanguageSelection from "../languages/LanguageSelection";
import { Link } from "react-router-dom";
import { setUserlogIn } from "../../../redux-store/slice/LogInUser";


const Header = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [inp, setInp] = useState(false);
  const [inpvalue, setInpvalue] = useState(false);
  const [inputValue, setInputValue] = useState("");


//redux
  const dispatch  = useDispatch();
  const inputValues = useSelector((store) => store.location);
  const { selectLang } = useSelector((state) => state);

  const handleChangeBox1 = (e) => { 
    dispatch(setLocation(e.target.value))
   
    setBtn1(false);
    setInpvalue(true);
  };

  const actionBt1 = () => {
    setBtn1(!btn1);
    if (inpvalue === true) {
        dispatch(setLocation(''));
      setInpvalue(false);
    } else if(inputValues.length > 0){
        dispatch(setLocation(""));
    }
  };
  const LogingAction = () => {
 
    dispatch(setUserlogIn(true));
  }

  return (
    <>
      <header>
        <div id="main-head">
          <div id="header-box">
            <div className="container">
              <div className="hamburger">
                <div className="hamburger-svg">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    class=""
                    fill-rule="evenodd"
                  >
                    <path
                      class="rui-4K4Y7"
                      d="M896 682.667l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 469.333l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768zM896 256l42.667 42.667-42.667 42.667h-768l-42.667-42.667 42.667-42.667h768z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="logo-box">
                <div className="logo-svg">
                  <OlxLogo />
                </div>
              </div>
              <div className="location">
                <div className="location-container-1">
                  <div className="location-text">
                    <span>{inputValues}</span>
                  </div>
                  <div className="location-svg">
                    <svg
                      width="18px"
                      height="18px"
                      viewBox="0 0 1024 1024"
                      data-aut-id="icon"
                      class=""
                      fill-rule="evenodd"
                    >
                      <path
                        class="rui-4K4Y7"
                        d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="filter-box">
                <div className="filter-svg">
                  <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    class=""
                    fill-rule="evenodd"
                  >
                    <path
                      class="rui-4K4Y7"
                      d="M341.333 640c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 725.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM682.667 384c55.595 0 102.912 35.712 120.533 85.333v0h92.8l42.667 42.667-42.667 42.667h-92.8c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-434.133l-42.667-42.667 42.667-42.667h434.133c17.621-49.621 64.939-85.333 120.533-85.333zM682.667 469.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667zM341.333 128c55.595 0 102.912 35.712 120.533 85.333v0h434.133l42.667 42.667-42.667 42.667h-434.133c-17.621 49.621-64.939 85.333-120.533 85.333s-102.912-35.712-120.533-85.333v0h-92.8l-42.667-42.667 42.667-42.667h92.8c17.621-49.621 64.939-85.333 120.533-85.333zM341.333 213.333c-23.531 0-42.667 19.136-42.667 42.667s19.136 42.667 42.667 42.667c23.531 0 42.667-19.136 42.667-42.667s-19.136-42.667-42.667-42.667z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="input-box-1">
                <div className="box-container">
                  <div
                    className="bx-c-1"
                    style={{
                      border: `${
                        btn1 ? " 2px solid #23e5db" : " 2px solid #002f34"
                      }`,
                    }}
                  >
                    <div className="search">
                      <Search />
                      <span></span>
                    </div>
                    <div className="input">
                      <input
                        onClick={() => setBtn1(true)}
                        onChange={handleChangeBox1}
                        value={inputValues}
                        type="text"
                        placeholder="Search city, area or locality"
                      />
                    </div>
                    <span onClick={actionBt1} className="action-btn">
                      <div
                        style={{
                          transform: `rotate(${btn1 ? "180deg" : "0deg"})`,
                          transition: "transform .5s",

                          outline: "none",
                        }}
                        className="btn"
                      >
                        {inputValues.length === 0 || inpvalue === false ? (
                          <Arrow />
                        ) : (
                          <Cancel />
                        )}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              {btn1 && <LocationList />}
              <div className="input-box-2">
                <div className="container-bx-2">
                  <div className="input-bx-2">
                    <input
                      onClick={() => {
                        setBtn1(false);
                        setInpvalue(false);
                      }}
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
              <div className="login-box">
                <span onClick={LogingAction}>Login</span>
              </div>

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
            </div>
            <div className="container-2">
              <div className="search-box-2">
                <div className="input-box-2-container">
                  <div className="search-svg-bx-2">
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 1024 1024"
                      data-aut-id="icon"
                      class=""
                      fill-rule="evenodd"
                    >
                      <path
                        class="rui-4K4Y7"
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
