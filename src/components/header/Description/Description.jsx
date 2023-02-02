import "./DescriptionStyle.css";

import React, { useState } from "react";
import Arrow from "../../../assets/Arrow";
import DescriptionMenu from "./description-menu/DescriptionMenu";

const Description = () => {
  const [category, setCategory] = useState(false);
  return (
    <div>
      <div className="discription-container">
        <div className="main-container">
          <div className="all-categories">
            <div className="text-c">
              <span>All Categories</span>
            </div>
            <div onClick={() => setCategory(!category)} className="btn-c">
              <div
                style={{
                  transform: `rotate(${category ? "180deg" : "0deg"})`,
                  transition: "transform .5s",

                  outline: "none",
                }}
                className="btn"
              >
                <Arrow />
              </div>
            </div>
          </div>
          <div className="categories">
            <ul>
              <li>Commercial & Other Vehicles</li>
              <li>For Rent: Houses & Apartments</li>
              <li>Cars</li>
              <li>Motorcycles</li>
              <li>Mobile Phones</li>
              <li>For Sale: Houses & Apartments</li>
              <li>Scooters</li>
            </ul>
          </div>
        </div>
      </div>
      {category && <DescriptionMenu />}
    </div>
  );
};

export default Description;
