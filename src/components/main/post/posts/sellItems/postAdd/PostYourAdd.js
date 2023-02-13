import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

//assets
import BackArrow from "../../../../../../assets/BackArrow";

//style
import "./style.css";

const PostYourAdd = () => {
  const [hideOptions, setHideOptions] = useState(false);

  const [uplaodImage, setUploadImage] = useState(null);
  const [file, setFile] = useState(null);

  const selectRef = useRef(null);

  const uploadImages = (event) => {
    console.log("upload image work");

    setUploadImage(event.target.files[0]);

  };
  useEffect(() => {
  console.log(uplaodImage);
},[uplaodImage])
  const handleChange = (event) => {
    console.log("file add button work");
    setFile(event.target.files[0]);
  };

  function handleClick() {
    console.log("user clicked");
    // setHideOptions(true);
    selectRef.current.focus();
  }

  return (
    <div className="postYourAdd_container">
      <header className="sell_header">
        <div className="header_conainer_sell">
          <Link to={"/sell"}>
            {" "}
            <div className="svg_back_se">
              <BackArrow />
            </div>
          </Link>
        </div>
      </header>
      <div id="mainBoxPostAdd">
        <div className="post_heading">
          <div className="heading">
            <h2>POST YOUR AD</h2>
          </div>
        </div>

        <div className="content_Box">
          <div className="heading_content_bx">
            <h3>Selected category</h3>
          </div>
          <div className="breadcrumb">
            <div className="list_box">
              <ol>
                <li>
                  <span>OLX Autos (Cars)</span>
                  <span className="bar">/</span>
                </li>
                <li>
                  <span>Cars</span>
                </li>
              </ol>
            </div>
            <div className="btn_box">
              <button className="change_Button">
                <span>Change</span>
              </button>
            </div>
          </div>
          <div className="line_bx"></div>
          <div className="input_box">
            <div className="input_container">
              <h2>Include some details</h2>
              <div className="brand_box">
                <div className="box_1">
                  <div className="main_box_container">
                    <label className="">Brand *</label>
                    <div className="selection_box">
                      <select
                        style={{
                          appearance: "none",
                        }}
                        ref={selectRef}
                      >
                        <option value=""></option>
                        <optgroup label="Popular Brand"></optgroup>
                        <option value="maruti-suzuki">Maruti Suzuki</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="tata">Tata</option>
                        <option value="mahindra">Mahindra</option>
                        <option value="toyota">Toyota</option>
                        <option value="cars-honda">Honda</option>
                        <optgroup label="All Brand"></optgroup>
                        <option value="byd">BYD</option>
                        <option value="audi-1">Audi</option>
                        <option value="ambassador-1">Ambassador</option>
                        <option value="ashok-1">Ashok</option>
                        <option value="ashok-leyland-1">Ashok Leyland</option>
                        <option value="aston-1">Aston</option>
                        <option value="aston-martin-1">Aston Martin</option>
                        <option value="bajaj">Bajaj</option>
                        <option value="bentley-1">Bentley</option>
                        <option value="citroen-1">Citroen</option>
                        <option value="bmw">BMW</option>
                        <option value="bugatti">Bugatti</option>
                        <option value="cadillac">Cadillac</option>
                        <option value="caterham">Caterham</option>
                        <option value="chevrolet">Chevrolet</option>
                        <option value="chrysler">Chrysler</option>
                        <option value="conquest">Conquest</option>
                        <option value="daewoo">Daewoo</option>
                        <option value="datsun">Datsun</option>
                        <option value="dc">Dc</option>
                        <option value="dodge">Dodge</option>
                        <option value="eicher-polaris">Eicher Polaris</option>
                        <option value="ferrari">Ferrari</option>
                        <option value="fiat">Fiat</option>
                        <option value="force-motors">Force Motors</option>
                        <option value="ford">Ford</option>
                        <option value="cars-honda">Honda</option>
                        <option value="hummer">Hummer</option>
                        <option value="hyundai">Hyundai</option>
                        <option value="icml">ICML</option>
                        <option value="infiniti">Infiniti</option>
                        <option value="isuzu">Isuzu</option>
                        <option value="jaguar">Jaguar</option>
                        <option value="jeep">Jeep</option>
                        <option value="kia">Kia</option>
                        <option value="lamborghini">Lamborghini</option>
                        <option value="land-rover">Land Rover</option>
                        <option value="lexus">Lexus</option>
                        <option value="mahindra">Mahindra</option>
                        <option value="mahindra-renault">
                          Mahindra Renault
                        </option>
                        <option value="maruti-suzuki">Maruti Suzuki</option>
                        <option value="maserati">Maserati</option>
                        <option value="maybach">Maybach</option>
                        <option value="mazda">Mazda</option>
                        <option value="mercedes-benz">Mercedes-Benz</option>
                        <option value="mg">MG</option>
                        <option value="mini">Mini</option>
                        <option value="mitsubishi">Mitsubishi</option>
                        <option value="nissan">Nissan</option>
                        <option value="opel">Opel</option>
                        <option value="peugeot">Peugeot</option>
                        <option value="porsche">Porsche</option>
                        <option value="premier">Premier</option>
                        <option value="renault">Renault</option>
                        <option value="rolls-royce">Rolls-Royce</option>
                        <option value="san">San</option>
                        <option value="sipani">Sipani</option>
                        <option value="skoda">Skoda</option>
                        <option value="smart">Smart</option>
                        <option value="ssangyong">Ssangyong</option>
                        <option value="subaru">Subaru</option>
                        <option value="tata">Tata</option>
                        <option value="toyota">Toyota</option>
                        <option value="volkswagen">Volkswagen</option>
                        <option value="volvo">Volvo</option>
                      </select>
                      <div className="arrow_svg_bx">
                        <div className="arrow_svg" onClick={handleClick}>
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              className="rui-3KQ-t"
                              d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <span
                        className="rui-3FLBC rui-_74YY"
                        data-aut-id=""
                      ></span>
                    </div>
                  </div>
                  <div className="main_box_container">
                    <label className="">Model*</label>
                    <div className="selection_box">
                      <select
                        style={{
                          appearance: "none",
                        }}
                      >
                        {/* --------------------------------------fill---------------------------------- */}
                      </select>
                      <div className="arrow_svg_bx">
                        <div className="arrow_svg" onClick={handleClick}>
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              className="rui-3KQ-t"
                              d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <span
                        className="rui-3FLBC rui-_74YY"
                        data-aut-id=""
                      ></span>
                    </div>
                  </div>
                  <div className="main_box_container">
                    <label className="">Year *</label>
                    <div className="selection_box">
                      <select
                        id="selectYear"
                        style={{
                          appearance: "none",
                        }}
                      >
                        {/* ---------------------------------Fill----------------------- */}
                      </select>
                      <div className="arrow_svg_bx">
                        <div className="arrow_svg" onClick={handleClick}>
                          <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              className="rui-3KQ-t"
                              d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <span
                        className="rui-3FLBC rui-_74YY"
                        data-aut-id=""
                      ></span>
                    </div>
                  </div>

                  <div className="main_box_container">
                    <label className="">Fuel *</label>
                    <div className="ful_box">
                      <button className="rui-GvxAR" data-aut-id="oppetrol0">
                        CNG &amp; Hybrids
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol1">
                        Diesel
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol2">
                        Electric
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol3">
                        LPG
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol4">
                        Petrol
                      </button>
                    </div>
                  </div>
                  <div className="main_box_container">
                    <label className="">Transmission *</label>
                    <div className="ful_box">
                      <button className="rui-GvxAR" data-aut-id="oppetrol0">
                        Automatic
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol1">
                        Manual
                      </button>
                    </div>
                  </div>
                  <div className="main_box_container">
                    <label className="">Transmission *</label>
                    <div className="input-box-12">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="main_box_container">
                    <label className="">Transmission *</label>
                    <div className="ful_box">
                      <button className="rui-GvxAR" data-aut-id="oppetrol0">
                        1 st
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol1">
                        2nd
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol1">
                        3rd
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol1">
                        4th
                      </button>
                      <button className="rui-GvxAR" data-aut-id="oppetrol1">
                        4+
                      </button>
                    </div>
                  </div>
                  <div className="main_box_container">
                    <label className="">Ad title *</label>
                    <div className="input-box-12">
                      <input type="text" />
                    </div>
                  </div>
                  <div className="main_box_container">
                    <label className="">Description *</label>
                    <div className="input-box-12">
                      <input
                        style={{
                          padding: "40px 10px",
                        }}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="line_bx"></div>
          <div className="input_box">
            <div className="input_container">
              <div className="main_box_container" style={{ width: "100%" }}>
                <h2>SET A PRICE</h2>
                <label className="priceLabel">Price*</label>
                <div className="pricecontainer">
                  <div className="price_box">
                    <div className="rupee_box">
                      <div className="rupeesIcon">
                        <span>₹</span>
                      </div>
                    </div>
                    <div className="input_box_1">
                      <input type="number" />
                      <div className="rui-1pgaV rui-Vcp5d"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line_bx"></div>
          <div className="input_box">
            <div className="input_container">
              <h2>UPLOAD UP TO 20 PHOTOS</h2>
              <div className="image_input_box">
                <div className="image_container">
                  <label htmlFor="file_iamge">
                    {" "}
                    <div className="_img_upload">
                      <div className="upload_btn">
                        <input
                          type="file"
                          id="file_iamge"
                          onChange={uploadImages}
                          style={{ display: "none" }}
                        />

                        <div>
                          <svg
                            width="36px"
                            height="36px"
                            viewBox="0 0 1024 1024"
                          >
                            <path
                              className="rui-2qwuD"
                              d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"
                            ></path>
                          </svg>
                        </div>

                        <div className="description_upload">
                          <span>Add photo</span>
                        </div>
                      </div>
                    </div>{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="line_bx"></div>

          {/* -------------------------------conform your location------------------------------ */}
          <div className="input_box">
            <div className="input_container">
              <h2>Confirm your location</h2>
              <div className="sphereLocationTabContainer">
                <ul className="list_items_location_box">
                  <li className="items_list">
                    <div
                      className="sphereTabManual"
                      style={{
                        borderBottom: "5px solid #002f34",
                        fontWeight: 700,
                      }}
                    >
                      <span>List</span>
                    </div>
                  </li>
                  <li className="items_list">
                    <div className="sphereTabManual">
                      <span>Current location</span>
                    </div>
                  </li>
                </ul>
                <div className="sphereTabContentLocationSelector">
                  <div className="sphereTab_top">
                    <div className="sphereTab_bottom">
                      <div className="sphereTab_container">
                        <label>State *</label>
                        <div className="input_box8">
                          <select>
                            <option value="unknown"></option>
                            <option value="2007598">
                              Andaman &amp; Nicobar Islands
                            </option>
                            <option value="2001145">Andhra Pradesh</option>
                            <option value="2001146">Arunachal Pradesh</option>
                            <option value="2001147">Assam</option>
                            <option value="2001148">Bihar</option>
                            <option value="2001149">Chandigarh</option>
                            <option value="2001178">Chhattisgarh</option>
                            <option value="2001150">
                              Dadra &amp; Nagar Haveli
                            </option>
                            <option value="2001151">Daman &amp; Diu</option>
                            <option value="2001152">Delhi</option>
                            <option value="2001153">Goa</option>
                            <option value="2001154">Gujarat</option>
                            <option value="2001155">Haryana</option>
                            <option value="2001156">Himachal Pradesh</option>
                            <option value="2001157">Jammu &amp; Kashmir</option>
                            <option value="2001158">Jharkhand</option>
                            <option value="2001159">Karnataka</option>
                            <option value="2001160">Kerala</option>
                            <option value="2001161">Lakshadweep</option>
                            <option value="2001162">Madhya Pradesh</option>
                            <option value="2001163">Maharashtra</option>
                            <option value="2001164">Manipur</option>
                            <option value="2001165">Meghalaya</option>
                            <option value="2001166">Mizoram</option>
                            <option value="2001167">Nagaland</option>
                            <option value="2001168">Odisha</option>
                            <option value="2001169">Pondicherry</option>
                            <option value="2001170">Punjab</option>
                            <option value="2001171">Rajasthan</option>
                            <option value="2001172">Sikkim</option>
                            <option value="2001173">Tamil Nadu</option>
                            <option value="2007599">Telangana</option>
                            <option value="2001174">Tripura</option>
                            <option value="2001176">Uttar Pradesh</option>
                            <option value="2001175">Uttaranchal</option>
                            <option value="2001177">West Bengal</option>
                          </select>
                          {/* <div className="rui-2-LBp">
                            <div className="rui-1QnC0">
                              <svg
                                width="16px"
                                height="16px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-1ftqL"
                                  d="M744.727 450.484v-54.846h-54.846l-216.669 216.669-100.305-100.305h-54.846v54.846l127.728 127.728h54.846l244.092-244.092zM512 162.911c-192.485 0-349.091 156.606-349.091 349.091s156.606 349.091 349.091 349.091c192.485 0 349.091-156.606 349.091-349.091s-156.606-349.091-349.091-349.091v0zM512 938.669c-235.268 0-426.667-191.399-426.667-426.667s191.399-426.667 426.667-426.667c235.268 0 426.667 191.399 426.667 426.667s-191.399 426.667-426.667 426.667v0z"
                                ></path>
                              </svg>
                            </div>
                            <div className="rui-33dm0">
                              <svg
                                width="16px"
                                height="16px"
                                viewBox="0 0 1024 1024"
                              >
                                <path
                                  className="rui-3KQ-t"
                                  d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"
                                ></path>
                              </svg>
                            </div>
                          </div> */}
                        </div>
                        {/* <div className="rui-1rV1O">
                          <span
                            className="rui-3FLBC rui-_74YY"
                            data-aut-id=""
                          ></span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line_bx"></div>

          <div className="input_box">
            <div className="input_container">
              <h2>REVIEW YOUR DETAILS</h2>
              <div className="user_details_container">
                <div className="user_image">
                  <div className="image_container1">
                    <div className="avatarWrapper">
                      <figure>
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                          src="https://statics.olx.in/external/base/img/avatar_1.png"
                          alt="avatar"
                        />
                        <label htmlFor="file-input">
                          <div className="svg_box_12">
                            <svg
                              width="25px"
                              height="25px"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                className="rui-1kebF"
                                d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"
                              ></path>
                            </svg>
                          </div>
                        </label>
                      </figure>
                    </div>
                    <input
                      type="file"
                      id="file-input"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="user_name_inputbox">
                  <div className="name_label_box">
                    <label for="name">Name</label>
                    <div className="user_name_input_container">
                      <div className="input_box_name_13">
                        <div className="input_user_name">
                          <input type="text" />
                          <div className=""></div>
                        </div>
                      </div>
                    </div>
                    <div className="Description_count_text ">
                      <span className="space_span"></span>
                      <span className="count_span">6 / 30</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="usercontact_info">
                <div className="otherPhoneLabel">
                  <p>Your phone number</p>
                  <p className="current_user_phoneNumber">+91000000000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="line_bx"></div>
          <div className="input_box">
            <div className="input_container">
              <button className="btnPost">
                <span>Post now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostYourAdd;
