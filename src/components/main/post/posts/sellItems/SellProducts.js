import React from "react";
import { Link } from "react-router-dom";
//assets
import BackArrow from "../../../../../assets/BackArrow";
import ArrowRight from "../../../../../assets/ArrowRight";
import Car from "../../../../../assets/Car";
//style
import "./style.css";
import Properties from "../../../../../assets/Properties";
import Mobiles from "../../../../../assets/Mobiles";
import Jobs from "../../../../../assets/Jobs";
import Bikes from "../../../../../assets/Bikes";
import Appliances from "../../../../../assets/Appliances";
import Spares from "../../../../../assets/Spares";
import Furniture from "../../../../../assets/Furniture";
import Fashion from "../../../../../assets/Fashion";
import Hobbies from "../../../../../assets/Hobbies";
import Pets from "../../../../../assets/Pets";
import Services from "../../../../../assets/Services";

const SellProducts = () => {
  return (
    <div className="sell_container">
      <header id="sell_header">
        <div className="header_conainer_sell">
          <Link to={"/"}>
            <div className="svg_back_se">
              <BackArrow />
            </div>
          </Link>
        </div>
      </header>

      <div id="sell_main">
        <div className="inside_main">
          <div className="container-m1">
            <div className="box_container_sell">
              <div className="heading_bxc">
                <span>Post your Ad</span>
              </div>
              <div className="body_box_bxc">
                <div className="bxc_bd_box">
                  <h3 className="catogory_heading">
                    <span>Choose a category</span>
                  </h3>
                  <div className="sessionWithTittle">
                    <ul className="categoryLevel">
                      <Link to={'/postyouradd'}>  <li className="list_catogories">
                        <div className="svg_box_list">
                          <Car />
                        </div>

                        <span className="item_name_list">OLX Autos (Cars)</span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      </Link>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Properties />
                        </div>
                        <span className="item_name_list"> Properties </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Mobiles />
                        </div>
                        <span className="item_name_list"> Mobiles </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Jobs />
                        </div>
                        <span className="item_name_list"> Jobs </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Bikes />
                        </div>
                        <span className="item_name_list"> Bikes </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Appliances />
                        </div>
                        <span className="item_name_list">
                          Electronics &amp; Appliances
                        </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Spares />
                        </div>

                        <span className="item_name_list">
                          Commercial Vehicles &amp; Spares
                        </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Furniture />
                        </div>
                        <span className="item_name_list"> Furniture </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Fashion />
                        </div>
                        <span className="item_name_list"> Fashion </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Hobbies />
                        </div>
                        <span className="item_name_list">
                          Books, Sports &amp; Hobbies
                        </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Pets />
                        </div>
                        <span className="item_name_list"> Pets </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                      <li className="list_catogories">
                        <div className="svg_box_list">
                          <Services />
                        </div>
                        <span className="item_name_list"> Services </span>
                        <div className="svg_box_list">
                          <ArrowRight />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProducts;
