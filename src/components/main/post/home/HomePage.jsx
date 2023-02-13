import React from "react";
import SignInPage from "../authentication/signin/signInPage";
import SignInWithPhoneNumber from "../authentication/signin/SignInWithPh/signInWithPhoneNumber";
import RequestOTP from "../authentication/signin/SignInWithPh/OTP/RequestOTP";
// redux
import { useSelector } from "react-redux";


//assets
import ArrowLeft from "../../../../assets/ArrowLeft";
import Heart from "../../../../assets/Heart";
import ArrowRight from "../../../../assets/ArrowRight";

//css
import "./style.css";
const HomePage = () => {
  const page = useSelector((state) => state.loginPages);


// --------------------------------------------------------------------------------------------
  return (
    <div>
      {page === "loginMainPage" ? (
        <SignInPage />
      ) : page === "continueWithPhone" ? (
        <SignInWithPhoneNumber />
      ) : (
        page === "signInWithOtp"?<RequestOTP/>: null
      )}

      <div className="container">
        <div id="page-main-content">
          <div className="main-sec">
            <div className="Based-on-last-search">
              <div id="bannerImageWrapper">
                <div id="bannerImage">
                  <div className="btn-banner">
                    <span>Sell Car</span>
                  </div>
                </div>
              </div>
              <div id="display-products">
                <div className="display-container">
                  <div className="bundles-last-search">
                    <div className="ls-header">
                      <span>More on For Sale: Houses &amp; Apartments</span>
                      <button>
                        <span>View more</span>
                      </button>
                    </div>
                    <div className="ls-products">
                      <div className="back-bt-1">
                        <span>
                          <ArrowLeft />
                        </span>
                      </div>

                      <div
                        className="ls-each-product"
                        // ref={scrollRef}
                        // style={{ overflowX: "hidden" }}
                      >
                        <div className="product-box">
                          <div className="link">
                            <figure className="item-image">
                              <img
                                src="https://apollo-singapore.akamaized.net:443/v1/files/nsztywiu5e011-IN/image;s=272x0"
                                alt="Fully Deluxe Luxurious 2BHK Upto 90% Loan Near Dwarka Main Road"
                              />
                            </figure>
                            <div className="product-details">
                              <div className="featured-label">
                                <label>
                                  <span>Featured</span>
                                </label>
                              </div>
                              <span className="sp-1">₹ 24,99,999</span>
                              <span className="sp-2">
                                2 Bds - 1 Ba - 650 ft2
                              </span>
                              <span className="sp-3">
                                Fully Deluxe Luxurious 2BHK Upto 90% Loan Near
                                Dwarka Main Road
                              </span>
                              <div className="footer-item">
                                <span className="sp-1">
                                  <span>Dec 30</span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <span className="heart-like">
                            <button>
                              <Heart />
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="more-btn">
                        <span>
                          <ArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Fresh-recommendations">
              <div className="sec-2-container">
                <div className="title-sec-2">
                  <span>Fresh recommendations</span>
                </div>
                <div className="product-list">
                  <ul>
                    <li>
                      <div className="box-tems">
                        <div className="itemImage">
                          <img
                            src="https://apollo-singapore.akamaized.net:443/v1/files/6k6z83s0zz9r-IN/image;s=272x0"
                            alt="Maruti Suzuki XL6 Zeta, 2021, Petrol"
                          />
                        </div>
                        <div className="item-description">
                          <div className="item-featured">
                            <label>
                              <picture>
                                <img
                                  src="https://statics.olx.in/external/base/img/olxAutos/olxautos-blue-logo-small_1x.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="head-featured">
                                <span>Featured</span>
                              </div>
                            </label>
                          </div>
                          <span className="itemPrice">₹ 11,45,000</span>
                          <span className="itemDetails">2021 - 6000.0 km</span>
                          <span className="itemTitle">
                            Maruti Suzuki XL6 Zeta, 2021, Petrol
                          </span>
                          <div className="footer-items">
                            <span className="item-location">
                              Kalkaji, Delhi
                            </span>
                            <span className="post-date">
                              <span>Dec 03</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="heart-icon">
                        <button>
                          <Heart />
                        </button>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
