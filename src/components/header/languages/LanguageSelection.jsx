import React from "react";
import TikMark from "../../../assets/TikMark";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { setLang } from "../../../redux-store/slice/selectLang";
const LanguageSelection = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.selectLang);

 
  

  const handlechange = (lang) => {
   dispatch(setLang(lang));
   
  };
  console.log(language);
  return (
    <div className="language-container">
      <div className="categoryList">
        <div className="languages">
          <ul>
            <li>
              <span
                className="name-lng"
                onClick={() => handlechange("English")}
              >
                English
              </span>
              <span className="tik-mark">
                <button>{language === "English" ? <TikMark /> : null}</button>
              </span>
            </li>
            <li>
              <span className="name-lng" onClick={() => handlechange(" हिंदी")}>
                हिंदी
              </span>
              <span className="tik-mark">
                <button>{language === " हिंदी" ? <TikMark /> : null} </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
