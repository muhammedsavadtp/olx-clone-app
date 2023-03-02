import React from "react";

//style
import "./style.css";

const LoadingPageAction = () => {
  return (
    <div class="spinner_container">
      <div className="svg_spin_bx">
        <svg class="rui-9iIWV" width="65px" height="65px" viewBox="0 0 52 52">
          <circle
            class="rui-1Iei9"
            cx="26px"
            cy="26px"
            r="20px"
            fill="none"
            stroke-width="2px"
          ></circle>
        </svg>
        <p>loading...</p>
      </div>
    </div>
  );
};

export default LoadingPageAction;
