import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

// assets
import ArrowRight from "../../../../../assets/ArrowRight";
import ArrowLeft from "../../../../../assets/ArrowLeft";

// styleSheet
import "./style.css";
import { doc, getDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../../../../redux-store/firebase/dbconfig";
// =======================================================================
const ViewAddPost = () => {
  const [path, setPath] = useState([
    "home",
    "car",
    "car in kerala",
    "car in kozhikode",
    "BMW 5 Series 2012 Diesel Good Condition",
  ]);

  const image = ([
    "https://apollo-singapore.akamaized.net/v1/files/bapkqtdrahb71-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/crwrt600n7x83-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/szwlretmf9hb1-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/bgsy2u201im02-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/879nexzpng3h3-IN/image;s=780x0;q=60",
    "https://apollo-singapore.akamaized.net/v1/files/vbtldmm97le1-IN/image;s=780x0;q=60",
  ]);

  const relatedAdd = [
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/ammc2hn28otn1-IN/image",
      discription: "BMW 5 Series 520d, 2012, Diesel",
      price: "₹ 15,50,000",
    },
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/fgsgmnq71f5h-IN/image",
      discription: "BMW 5 Series 525i, 1994, Petrol",
      price: "₹ 18,00,000",
    },
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/jg99jwoiusy23-IN/image",
      discription: "BMW 5 Series 520d, 2012, Diesel",
      price: "₹ 16,00,000",
    },
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/i23xgjzurero1-IN/image",
      discription: " Audi Q7 White 2012 model",
      price: "₹ 15,00,000",
    },
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/ytosnsc7vh75-IN/image",
      discription: "BMW X6 2009-2014 xDrive30d, 2009, Diesel",
      price: "₹ 18,00,000",
    },
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/ua23dnyf1nuc3-IN/image",
      discription: " BMW 5 Series 2012 Diesel Well Maintained",
      price: "₹ 17,70,000",
    },
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/okaqjgi0fapf3-IN/image",
      discription: "BMW 5 Series 520d, 2012, Diesel",
      price: "₹ 18,00,000",
    },
    {
      imageUrl:
        "https://apollo-singapore.akamaized.net:443/v1/files/c0j5rxecczx53-IN/image",
      discription: " BMW 5 Series 2011 Diesel 79000 Km Driven",
      price: "₹ 11,99,999",
    },
  ];



  const myRef = useRef(null);

  const handleButtonClick = () => {
    const currentScrollLeft = myRef.current.scrollLeft;
    myRef.current.scrollTo({
      left: currentScrollLeft + 1280,
      behavior: "smooth",
    });
  };
  const handleButtonClickBack = () => {
    const currentScrollLeft = myRef.current.scrollLeft;
    myRef.current.scrollTo({
      left: currentScrollLeft - 1280,
      behavior: "smooth",
    });
  };

  //scroll down check 
  const [hasScrolledDown, setHasScrolledDown] = useState(false);



  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop >= 50) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scroll left related
  const relatedRef = useRef(null);

  const scrollLeftRelated = () => {
    console.log('related clicked');
    const currentScrollLeft = relatedRef.current.scrollLeft;
    relatedRef.current.scrollTo({
      left: currentScrollLeft - 600,
      behavior: "smooth",
    });
  }
  const scrollRightRelated = () => {
    console.log("related clicked right");

      const currentScrollLeft = relatedRef.current.scrollLeft;
      relatedRef.current.scrollTo({
        left: currentScrollLeft + 600,
        behavior: "smooth",
      });
  }

  //use params
  const { productID } = useParams()
  console.log(productID,'this is product id');


  // const ids = useSelector((state) => state.viewAdd);
  
  const [data, setData] = useState(null);
  const [brandName, setBrandName] = useState('');
  const [edition, setEdition] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [fuel, setFuel] = useState('');
  const [km, setKm] = useState('');
  const [transmission, setTransmission] = useState('');
  const [numberOfOwners, setNumberOfOwners] = useState('');
  const [sellerState, setSellerState] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [postDay, setPostDay] = useState('');
  const [postMonth, sePostMonth] = useState('');
  const [postYear, sePostYear] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (productID) { // Only fetch data if id is truthy
          const docRef = doc(db, 'products', productID);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setData(docSnap.data());
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data !== null) {
      const brand = data.brand;
      const edition = data.edition
      const drivenInkm = data.drivenInkm
      const modelVehicle = data.modelVehicle
      const itemPrice = data.itemPrice
      const fuelType = data.fuelType
      const transmission = data.transmission
      const numberOfOwners = data.numberOfOwners
      const sellerState = data.sellerState
      const sellerName = data.sellerName
      const postDay = data.postDay
      const postMonth = data.postMonth
      const postYear = data.postYear
      const itemDescription = data.itemDescription
      const imgUrl = data.imgUrl
      // const lastTwoDigits = postYear.slice(-2);
      setImgUrl(imgUrl)
      setBrandName(brand);
      setEdition(edition)
      setModel(modelVehicle)
      setPrice(itemPrice)
      setFuel(fuelType)
      setKm(drivenInkm)
      setTransmission(transmission)
      setNumberOfOwners(numberOfOwners)
      setSellerState(sellerState)
      setSellerName(sellerName)
      setPostDay(postDay)
      sePostMonth(postMonth)
      setItemDescription(itemDescription)
      
      sePostYear(postYear)
      
      console.log(postYear);
     
    }
  }, [data]);




  // ===========================================================================================================================

  return (
  
    <div id="viewPostContainer">
      <div className="main_box">
        {/* banner */}
        <div className="banner_path">
          <ol className="pathList">
            {path.map((res, index) => (
              <Link key={index}>
                <li>
                  <span
                    style={{
                      fontWeight: index === path.length - 1 ? "bold" : null,
                    }}
                  >
                    {res}
                  </span>
                  <div
                    className="svg_image"
                    style={{
                      display: index === path.length - 1 ? "none" : "block",
                      cursor: index === path.length - 1 ? "none" : "pointer",
                    }}
                  >
                    <ArrowRight ArrowWidth={"18px"} arrowHeight={"18px"} />
                  </div>
                </li>
              </Link>
            ))}
          </ol>
        </div>
        {/* fix top */}
        {hasScrolledDown ? (
          <ul className="fix_top">
            <li className="overview_li">OVERVIEW</li>
            <li className="button_list_top">
              <button>
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className=""
                 
                >
                  <path
                    className="rui-4K4Y7"
                    d="M768 853.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM256 597.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM768 170.667c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333zM768 597.333c-52.437 0-98.688 24.107-130.005 61.312l-213.675-123.392c1.067-7.637 2.347-15.275 2.347-23.253 0-4.779-1.024-9.259-1.408-13.909l218.283-126.037c31.104 33.408 75.179 54.613 124.459 54.613 94.251 0 170.667-76.416 170.667-170.667s-76.416-170.667-170.667-170.667c-94.251 0-170.667 76.416-170.667 170.667 0 14.208 2.261 27.819 5.504 41.003l-205.867 118.912c-30.763-45.013-82.389-74.581-140.971-74.581-94.251 0-170.667 76.416-170.667 170.667s76.416 170.667 170.667 170.667c55.467 0 104.235-26.88 135.424-67.84l209.195 120.747c-2.048 10.539-3.285 21.333-3.285 32.427 0 94.251 76.416 170.667 170.667 170.667s170.667-76.416 170.667-170.667c0-94.251-76.416-170.667-170.667-170.667z"
                  ></path>
                </svg>
              </button>
              <div className="name_action">Share</div>
            </li>
            <li className="button_list_top" style={{ margin: "0" }}>
              <button>
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 1024 1024"
                  data-aut-id="icon"
                  className=""
         
                >
                  <path
                    className="rui-4K4Y7"
                    d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"
                  ></path>
                </svg>
              </button>
              <div className="name_action">Wishlist</div>
            </li>
          </ul>
        ) : null}
        {/* carousel image */}
         <div className="product_image" ref={myRef}>
          {imgUrl.map((res, index) => (
            <div className="image_bx" key={index}>
              <div className="images">
                <img src={res} alt="img" />
              </div>
            </div>
          ))}
        </div>
        <div className="slide_button">
          <div className="left_slide" onClick={handleButtonClickBack}>
            <ArrowLeft />
          </div>
          <div className="right_slide" onClick={handleButtonClick}>
            <ArrowRight />
          </div>
        </div>
        <div className="actionBtns">
          <div className="ctnr_btn">
            <button>
              <svg width="28px" height="28px" viewBox="0 0 1024 1024">
                <path
                  className="rui-2It78"
                  d="M768 853.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM256 597.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333zM768 170.667c47.104 0 85.333 38.229 85.333 85.333s-38.229 85.333-85.333 85.333c-47.104 0-85.333-38.229-85.333-85.333s38.229-85.333 85.333-85.333zM768 597.333c-52.437 0-98.688 24.107-130.005 61.312l-213.675-123.392c1.067-7.637 2.347-15.275 2.347-23.253 0-4.779-1.024-9.259-1.408-13.909l218.283-126.037c31.104 33.408 75.179 54.613 124.459 54.613 94.251 0 170.667-76.416 170.667-170.667s-76.416-170.667-170.667-170.667c-94.251 0-170.667 76.416-170.667 170.667 0 14.208 2.261 27.819 5.504 41.003l-205.867 118.912c-30.763-45.013-82.389-74.581-140.971-74.581-94.251 0-170.667 76.416-170.667 170.667s76.416 170.667 170.667 170.667c55.467 0 104.235-26.88 135.424-67.84l209.195 120.747c-2.048 10.539-3.285 21.333-3.285 32.427 0 94.251 76.416 170.667 170.667 170.667s170.667-76.416 170.667-170.667c0-94.251-76.416-170.667-170.667-170.667z"
                ></path>
              </svg>
            </button>
            <button>
              <svg width="28px" height="28px" viewBox="0 0 1024 1024">
                <path
                  className="rui-2It78"
                  d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* product details */}
        <div className="product_details">
          <div className="leftPanel">
            <div className="pnl-1">
              <div className="pnl-1-1">
                <div className="pnl-1-1-container">
                  <div className="space_pnl-1-1"></div>
                  <h1 className="itemTitle">{brandName} {model} {edition}</h1>
                  <div className="Highline">530d Highline</div>
                  <div className="itemParameters">
                    <div className="item_details">
                      <picture>
                        <img
                          alt=""
                          src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/petrol_2x.png"
                          className="_2WXOb"
                        />
                      </picture>
                      <h2 className="itemAttribute_fuel">{fuel}</h2>
                    </div>
                    <div className="item_details">
                      <picture>
                        <img
                          alt=""
                          src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/mileage_2x.png"
                          className="_2WXOb"
                        />
                      </picture>
                      <h2 className="itemAttribute_mileage">{km} Km</h2>
                    </div>
                    <div className="item_details">
                      <picture>
                        <img
                          alt=""
                          src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/transmission_2x.png"
                          className="_2WXOb"
                        />
                      </picture>
                      <h2
                        className="_3rMkw"
                        data-aut-id="itemAttribute_transmission"
                      >
                        {transmission}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pnl-2">
              <div className="pnl_2_1">
                <h3 className="adOverview">
                  <span>Overview</span>
                </h3>
                <div className="space_pnl-1-2"></div>
                <div className="pnl_1_box">
                  <div className="pnl_1_box_cnt">
                    <div className="pnl_1_box_cnt_1">
                      <div className="cntr_pnl_2">
                        <picture>
                          <img
                            src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/first_owner_1x.png"
                            className="icon_img"
                            alt="4th"
                          />
                        </picture>
                      </div>
                      <div className="owner_details">
                        <div className="Owner">Owner</div>
                        <div className="owner_nth">{numberOfOwners}</div>
                      </div>
                    </div>
                    <div className="pnl_1_box_cnt_1">
                      <div className="cntr_pnl_2">
                        <picture>
                          <img
                            src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/location_1x.png"
                            className="icon_img"
                            alt="--"
                          />
                        </picture>
                      </div>
                      <div className="seller_adress">
                        <div className="Location">Location</div>
                        <div className="pinned_location">
                          {sellerState}
                        </div>
                      </div>
                    </div>
                    <div className="pnl_1_box_cnt_1">
                      <div className="cntr_pnl_2">
                        <picture>
                          <img
                            src="https://statics.olx.in/olxin/buyers/items/v1/inspection/light/inspectionDate_1x.png"
                            className="icon_img"
                            alt="2023-02-14T07:55:20+05:30"
                          />
                        </picture>
                      </div>
                      <div className="post_add_details">
                        <div className="post_add_date">Posting date</div>
                        <div className="post_add_count">{postDay}-{postMonth}-{"postYear"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pnl-3">
              <div className="pnl3_title">
                <h4 className="itemDescriptonTitle">
                  <span>Description</span>
                </h4>
                <div
                  className="space_pnl-1-2"
                  style={{
                    margin: "16px -24px 14px",
                    borderBottom: "1px solid rgb(14 4 5 / 20%)",
                  }}
                ></div>
                <div className="driven">{itemDescription}</div>
              </div>
            </div>
            <section className="pnl-4">
              <div className="pnl_4_1">
                <span>Related ads</span>
              </div>
              <div className="cntr_pnl_4">
                <div className="pnl_4_1_1" onClick={scrollLeftRelated}>
                  <span className="svg_pnl4_1 ">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024">
                      <path
                        className="rui-2ncPg"
                        d="M684.685 85.333l-407.352 396.501v60.331l407.352 396.501h61.982v-60.331l-376.339-366.336 376.339-366.336v-60.331z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="pnl_4_2" ref={relatedRef}>
                  {relatedAdd.map((obj,index) => (
                    <div className="pnl_4_2_2" key={index} >
                      <Link
                        to={""}
                        className="pnl_link"
                        href="/item/bmw-5-series-520d-2012-diesel-iid-1717793744"
                      >
                        <div className="imgCnt">
                          <div className="img_box">
                            <img
                              src={obj.imageUrl}
                              alt="₹ 15,50,000"
                              className="rui-1SuTa"
                            />
                          </div>
                          <div className="add_info">
                            <div className="prdc_price">{ obj.price}</div>
                            <div className="product_name_and_info">
                            {obj.discription}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}  
                </div>
                <div className="pnl_4_1_1" onClick={scrollRightRelated}>
                  <span className="svg_pnl4_1">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024">
                      <path
                        className="rui-3KQ-t"
                        d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </section>
          </div>
          <div className="rightPanel">
            <div className="right_panel_1">
              <div className="priceCard">
                <div className="itemPrice">₹{price }</div>
                <div>
                  <button className="make-offer">
                    <span>Make offer</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="sellerInfo">
              <div className="">
                <div className="profileCard">
                  <Link to={""} className="profileCard_link">
                    <img
                      alt=""
                      className="seller_dp"
                      src="https://statics.olx.in/external/base/img/avatar_4.png"
                    ></img>
                  </Link>
                  <div className="follow_user">
                    <Link to={""} rel="nofollow" href="/profile/449395867">
                      <div className="user_name_post">{sellerName}</div>
                      <span className="follow_user_svg">
                        <svg width="18px" height="18px" viewBox="0 0 1024 1024">
                          <path
                            className="rui-4K4Y7"
                            d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="chat_with_seller">
                <button
                  type="button"
                  data-aut-id="btnChat"
                  className="rui-39-wj rui-3evoE rui-1JPTg rui-2NuAg"
                  fdprocessedid="tfzzwf"
                >
                  <span>Chat with seller</span>
                </button>
              </div>
              <div className="location_navigator">
                <div className="lc_cntr">
                  <div className="lc_1">
                    <svg width="36px" height="36px" viewBox="0 0 1024 1024">
                      <path
                        className="rui-l7uK1"
                        d="M512 85.333c211.755 0 384 172.267 384 384 0 200.576-214.805 392.341-312.661 469.333v0h-142.656c-97.856-76.992-312.683-268.757-312.683-469.333 0-211.733 172.267-384 384-384zM512 170.667c-164.672 0-298.667 133.973-298.667 298.667 0 160.021 196.885 340.523 298.453 416.597 74.816-56.725 298.88-241.323 298.88-416.597 0-164.693-133.973-298.667-298.667-298.667zM512.006 298.66c94.101 0 170.667 76.565 170.667 170.667s-76.565 170.667-170.667 170.667c-94.101 0-170.667-76.565-170.667-170.667s76.565-170.667 170.667-170.667zM512.006 383.994c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"
                      ></path>
                    </svg>
                  </div>
                  <div className="lc_2">
                    <div>{sellerState}    </div>
                  </div>
                  <div className="lc_3">
                    <Link
                      to={""}
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.google.com/maps/dir/?api=1&amp;destination=undefined,undefined"
                    >
                      <div className="lc_3_1" aria-hidden="true" data-aut-id="">
                        <img
                          src="https://statics.olx.in/external/base/img/seller-card-map_3x.png"
                          alt="google map"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="baxter-ads-details">
              <div
                id="baxter-ads-details-middle"
                className="_3nD9j baxter-style-dfp-default-middle"
                style={{ textAlign: "center" }}
              ></div>
            </div>
            <div className="line_1"></div>
            <div className="report_add">
              <div className="re_add_1">
                <strong>AD ID {productID}</strong>
                <p className="_3nhIU">Report this ad</p>
              </div>
            </div>
            <div className="baxter-ads-details">
              <div id="baxter-ads-details-middle-bottom" className=""></div>
            </div>
            <div className="baxter-ads-details">
              <div
                id="baxter-ads-details-bottom"
                className="_27Wkc baxter-style-dfp-default-bottom"
                style={{ textAlign: "center" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAddPost;
