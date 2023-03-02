import React, { useState, useRef, useEffect } from "react";
//redux/store
import { useSelector, useDispatch } from "react-redux";
import {
  setBrand,
  setModelVehicle,
  setEdition,
  setDrivenInkm,
  setItemTitle,
  setItemDescription,
  setUserName,
  setItemPrice,
  setUserState,
  setUploadImages,
  setImageUrl,
  setFuelType,
  setTransmission,
  setNumberOfOwners,
} from "../../../../../../redux-store/slice/postAdd";

import { uploadData } from "../../../../../../redux-store/slice/postAdd";
import { db, storage } from "../../../../../../redux-store/firebase/dbconfig";
import { app } from "../../../../../../redux-store/firebase/dbconfig";
import { getImageUrl } from "../../../../../../redux-store/slice/postAdd";
//router
import { Link, useNavigate } from "react-router-dom";
//assets
import BackArrow from "../../../../../../assets/BackArrow";
//style
import "./style.css";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { v4 } from "uuid";
import LoadingPageAction from "../../../../../loading/LoadingPageAction";
import AddImage from "../../../../../../assets/AddImage";

// ===============================================================================================================

const PostYourAdd = () => {
  // use
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //store
  const { data } = useSelector((state) => state.db);
  // console.log(data);

  const { userPhoneNumber, currnetUserInfo } = useSelector(
    (state) => state.checkUserAuth
  );

  const {
    brand,
    modelVehicle,
    edition,
    drivenInkm,
    addedTitle,
    itemDescription,
    itemPrice,
    sellerState,
    sellerName,

    uploadItemImages,
    loading,
    imageURL,
    fuelType,
    transmission,
    numberOfOwners,

    imgUrl1,
    imgUrl2,
    imgUrl3,
    imgUrl4,
    imgUrl5,
    imgUrl6,
    imgUrl7,
    imgUrl8,
    imgUrl9,
    imgUrl10,
    imgUrl11,
    imgUrl12,
    imgUrl13,
    imgUrl14,
    imgUrl15,
    imgUrl16,
    imgUrl17,
    imgUrl18,
    imgUrl19,
    imgUrl20,
  } = useSelector((state) => state.postAdd);

  const { displayName, uid } = currnetUserInfo;

  // console.log('this is user id  :'+ uid);
  // console.log('name  :'+displayName);
  // console.log('loafing'+loading);
  //--- state----
  // const [uplaodImage, setUploadImage] = useState(null);
  const [file, setFile] = useState(null);
  const [done, setDone] = useState(false);

  // max length of name
  const [length, setLength] = useState(0);
  // const [userName, setUserName] = useState("");

  //input boxes
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  const [box5, setBox5] = useState(false);
  const [box6, setBox6] = useState(false);
  const [box7, setBox7] = useState(false);
  const [box8, setBox8] = useState(false);
  const [box9, setBox9] = useState(false);

  // --------------------------------------------------------------

  const [brandName, setBrandName] = useState(false);
  const [model, setModel] = useState(false);
  const [year, setYear] = useState(false);
  const [kmDriven, setKmDriven] = useState(false);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);
  const [price, setPrice] = useState(false);
  const [state, setState] = useState(false);
  const [name, setName] = useState(false);
  const [fuel, setFuel] = useState(false);

  // --------------------------------------------------------------
  //brandName
  const handleSelectChange1 = (event) => {
    dispatch(setBrand(event.target.value));
    if (event.target.value.length > 0) {
      setBrandName(true);
    } else {
      setBrandName(false);
    }
  };
  const [box1Warning, setBox1Warning] = useState(false);

  //model

  const handleSelectChange2 = (event) => {
    dispatch(setModelVehicle(event.target.value));
    if (event.target.value.length > 0) {
      setModel(true);
    } else {
      setModel(false);
    }
  };
  const [box2Warning, setBox2Warning] = useState(false);
  //year

  const handleSelectChange3 = (event) => {
    dispatch(setEdition(event.target.value));
    if (event.target.value.length > 0) {
      setYear(true);
    } else {
      setYear(false);
    }
  };
  const [box3Warning, setBox3Warning] = useState(false);
  //kmDriven

  const handleSelectChange4 = (event) => {
    dispatch(setDrivenInkm(event.target.value));

    if (event.target.value > 0) {
      setKmDriven(true);
      setBox4Warning(false);
    } else {
      setKmDriven(false);
    }
  };

  const [box4Warning, setBox4Warning] = useState(false);
  //title

  const handleSelectChange5 = (event) => {
    dispatch(setItemTitle(event.target.value));
    if (event.target.value.length > 0) {
      setTitle(true);
    } else {
      setTitle(false);
    }
  };
  const [box5Warning, setBox5Warning] = useState(false);
  //description

  const handleSelectChange6 = (event) => {
    dispatch(setItemDescription(event.target.value));
    if (event.target.value.length > 0) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };
  const [box6Warning, setBox6Warning] = useState(false);
  //price

  const handleSelectChange7 = (event) => {
    dispatch(setItemPrice(event.target.value));
    if (event.target.value.length > 0) {
      setPrice(true);
    } else {
      setPrice(false);
    }
  };
  const [box7Warning, setBox7Warning] = useState(false);
  //state

  const handleSelectChange8 = (event) => {
    dispatch(setUserState(event.target.value));
    if (event.target.value.length > 0) {
      setState(true);
    } else {
      setState(false);
    }
  };
  const [box8Warning, setBox8Warning] = useState(false);
  //name

  const handleSelectChange9 = (event) => {
    setLength(event.target.value.length);
    dispatch(setUserName(event.target.value));

    if (event.target.value.length > 0) {
      setName(true);
    } else {
      setName(false);
    }
  };
  const [box9Warning, setBox9Warning] = useState(false);

  //page render actions
  useEffect(() => {
    if (displayName) {
      dispatch(setUserName(displayName));
      setLength(displayName.length);
    }
  }, []);

  const imageRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imageRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          dispatch(setImageUrl(url));
        });
      });
    });
  }, []);

  //upload dp  (not functional)
  const handleChange = (event) => {
    // console.log("upload dp");
    setFile(event.target.files[0]);
  };

  // input box btn action
  const selectRef = useRef(null);
  function handleClick() {
    selectRef.current.click();
    console.log('clicked');
  }

  // allvalue true check
  useEffect(() => {
    if (
      brandName &&
      model &&
      year &&
      kmDriven &&
      title &&
      description &&
      price &&
      state &&
      name
    ) {
      console.log("all set ");
      setDone(true);
    } else {
      console.log("please select an option");
    }
  });

  // submit btn action
  const handleSubmit = async (event) => {
    event.preventDefault();

    const docRef = await dispatch(
      uploadData({
        uploadItemImages,
        uid,
        brand,
        modelVehicle,
        edition,
        drivenInkm,
        addedTitle,
        itemDescription,
        itemPrice,
        sellerState,
        sellerName,
        fuelType,
        transmission,
        numberOfOwners,
        imgUrl1,
        imgUrl2,
        imgUrl3,
        imgUrl4,
        imgUrl5,
        imgUrl6,
        imgUrl7,
        imgUrl8,
        imgUrl9,
        imgUrl10,
        imgUrl11,
        imgUrl12,
        imgUrl13,
        imgUrl14,
        imgUrl15,
        imgUrl16,
        imgUrl17,
        imgUrl18,
        imgUrl19,
        imgUrl20,
      })
    );
    console.log("Document written with ID: ", docRef.id);
    navigate("/");
  };

  // car and brands
  const popularBrandOptions = [
    { value: "", label: "" },
    { value: "maruti-suzuki", label: "Maruti Suzuki" },
    { value: "hyundai", label: "Hyundai" },
    { value: "tata", label: "Tata" },
    { value: "mahindra", label: "Mahindra" },
    { value: "toyota", label: "Toyota" },
    { value: "cars-honda", label: "Honda" },
  ];
  const allBrandOptions = [
    { value: "byd", label: "BYD" },
    { value: "audi-1", label: "Audi" },
    { value: "ambassador-1", label: "Ambassador" },
    { value: "ashok-1", label: "Ashok" },
    { value: "ashok-leyland-1", label: "Ashok Leyland" },
    { value: "aston-1", label: "Aston" },
    { value: "aston-martin-1", label: "Aston Martin" },
    { value: "bajaj", label: "Bajaj" },
    { value: "bentley-1", label: "Bentley" },
    { value: "citroen-1", label: "Citroen" },
    { value: "bmw", label: "BMW" },
    { value: "bugatti", label: "Bugatti" },
    { value: "cadillac", label: "Cadillac" },
    { value: "caterham", label: "Caterham" },
    { value: "chevrolet", label: "Chevrolet" },
    { value: "chrysler", label: "Chrysler" },
    { value: "conquest", label: "Conquest" },
    { value: "daewoo", label: "Daewoo" },
    { value: "datsun", label: "Datsun" },
    { value: "dc", label: "Dc" },
    { value: "dodge", label: "Dodge" },
    { value: "eicher-polaris", label: "Eicher Polaris" },
    { value: "ferrari", label: "Ferrari" },
    { value: "fiat", label: "Fiat" },
    { value: "force-motors", label: "Force Motors" },
    { value: "ford", label: "Ford" },
    { value: "cars-honda", label: "Honda" },
    { value: "hummer", label: "Hummer" },
    { value: "hyundai", label: "Hyundai" },
    { value: "icml", label: "ICML" },
    { value: "infiniti", label: "Infiniti" },
    { value: "isuzu", label: "Isuzu" },
    { value: "jaguar", label: "Jaguar" },
    { value: "jeep", label: "Jeep" },
    { value: "kia", label: "Kia" },
    { value: "lamborghini", label: "Lamborghini" },
    { value: "land-rover", label: "Land Rover" },
    { value: "lexus", label: "Lexus" },
    { value: "mahindra", label: "Mahindra" },
    { value: "mahindra-renault", label: "Mahindra Renault" },
    { value: "maruti-suzuki", label: "Maruti Suzuki" },
    { value: "maserati", label: "Maserati" },
    { value: "maybach", label: "Maybach" },
    { value: "mazda", label: "Mazda" },
    { value: "mercedes-benz", label: "Mercedes-Benz" },
    { value: "mg", label: "MG" },
    { value: "mini", label: "Mini" },
    { value: "mitsubishi", label: "Mitsubishi" },
    { value: "nissan", label: "Nissan" },
    { value: "opel", label: "Opel" },
    { value: "peugeot", label: "Peugeot" },
    { value: "porsche", label: "Porsche" },
    { value: "premier", label: "Premier" },
    { value: "renault", label: "Renault" },
    { value: "rolls-royce", label: "Rolls-Royce" },
    { value: "san", label: "San" },
    { value: "sipani", label: "Sipani" },
    { value: "skoda", label: "Skoda" },
    { value: "smart", label: "Smart" },
    { value: "ssangyong", label: "Ssangyong" },
    { value: "subaru", label: "Subaru" },
    { value: "tata", label: "Tata" },
    { value: "toyota", label: "Toyota" },
    { value: "volkswagen", label: "Volkswagen" },
    { value: "volvo", label: "Volvo" },
  ];

  const maruti = [
    { value: "", label: "" },
    { value: "maruti-suzuki-1000", label: "1000" },
    { value: "maruti-suzuki-800", label: "800" },
    { value: "maruti-suzuki-a-star", label: "A-Star" },
    { value: "maruti-suzuki-alto", label: "Alto" },
    { value: "maruti-suzuki-alto-800", label: "Alto 800" },
    { value: "maruti-suzuki-alto-k10", label: "Alto K10" },
    { value: "maruti-suzuki-baleno", label: "Baleno" },
    { value: "maruti-suzuki-baleno-rs", label: "Baleno RS" },
    { value: "maruti-suzuki-celerio", label: "Celerio" },
    { value: "maruti-suzuki-celerio-x", label: "Celerio X" },
    { value: "maruti-suzuki-ciaz", label: "Ciaz" },
    { value: "maruti-suzuki-ciaz-s", label: "Ciaz S" },
    { value: "maruti-suzuki-eeco", label: "Eeco" },
    { value: "maruti-suzuki-ertiga", label: "Ertiga" },
    { value: "maruti-suzuki-esteem", label: "Esteem" },
    { value: "maruti-suzuki-estilo", label: "Estilo" },
    { value: "maruti-suzuki-grand-vitara", label: "Grand Vitara" },
    { value: "maruti-suzuki-gypsy", label: "Gypsy" },
    { value: "maruti-suzuki-ignis", label: "Ignis" },
    { value: "maruti-suzuki-kizashi", label: "Kizashi" },
    { value: "maruti-suzuki-omni", label: "Omni" },
    { value: "maruti-suzuki-ritz", label: "Ritz" },
    { value: "maruti-suzuki-s-cross1", label: "S Cross" },
    { value: "maruti-suzuki-s-cross", label: "S-Cross" },
    { value: "maruti-suzuki-s-presso", label: "S-Presso" },
    { value: "maruti-suzuki-stingray", label: "Stingray" },
    { value: "maruti-suzuki-swift", label: "Swift" },
    { value: "maruti-suzuki-swift-dzire", label: "Swift Dzire" },
    { value: "maruti-suzuki-swift-dzire-tour", label: "Swift Dzire Tour" },
    { value: "maruti-suzuki-sx4", label: "SX4" },
    { value: "maruti-suzuki-versa", label: "Versa" },
    { value: "maruti-suzuki-vitara-brezza", label: "Vitara Brezza" },
    { value: "maruti-suzuki-wagon-r", label: "Wagon R" },
  ];
  //sate
  const userState = [
    { value: "", text: "" },
    { value: "Andaman & Nicobar Islands", text: "Andaman & Nicobar Islands" },
    { value: "Andhra Pradesh", text: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", text: "Arunachal Pradesh" },
    { value: "Assam", text: "Assam" },
    { value: "Bihar", text: "Bihar" },
    { value: "Chandigarh", text: "Chandigarh" },
    { value: "Chhattisgarh", text: "Chhattisgarh" },
    { value: "Dadra & Nagar Haveli", text: "Dadra & Nagar Haveli" },
    { value: "Daman & Diu", text: "Daman & Diu" },
    { value: "Delhi", text: "Delhi" },
    { value: "Goa", text: "Goa" },
    { value: "Gujarat", text: "Gujarat" },
    { value: "Haryana", text: "Haryana" },
    { value: "Himachal Pradesh", text: "Himachal Pradesh" },
    { value: "Jammu & Kashmir", text: "Jammu & Kashmir" },
    { value: "Jharkhand", text: "Jharkhand" },
    { value: "Karnataka", text: "Karnataka" },
    { value: "Kerala", text: "Kerala" },
    { value: "Lakshadweep", text: "Lakshadweep" },
    { value: "Madhya Pradesh", text: "Madhya Pradesh" },
    { value: "Maharashtra", text: "Maharashtra" },
    { value: "Manipur", text: "Manipur" },
    { value: "Meghalaya", text: "Meghalaya" },
    { value: "Mizoram", text: "Mizoram" },
    { value: "Nagaland", text: "Nagaland" },
    { value: "Odisha", text: "Odisha" },
    { value: "Pondicherry", text: "Pondicherry" },
    { value: "Punjab", text: "Punjab" },
    { value: "Rajasthan", text: "Rajasthan" },
    { value: "Sikkim", text: "Sikkim" },
    { value: "Tamil Nadu", text: "Tamil Nadu" },
    { value: "Telangana", text: "Telangana" },
    { value: "Tripura", text: "Tripura" },
    { value: "Uttar Pradesh", text: "Uttar Pradesh" },
    { value: "Uttaranchal", text: "Uttaranchal" },
    { value: "West Bengal", text: "West Bengal" },
  ];

  //fuel
  const [fuelSelect, setFuelSelect] = useState(0);
  //transmission
  const [transmissionSelect, setTransmissionSelect] = useState(0);
  // owner select
  const [ownerSelect, setOwnerSelect] = useState(0);

  const [fuelButtons, setFuelButtons] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [ownerButtons, setOwnerButtons] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [transmissionButtons, setTransmissionButtons] = useState([
    false,
    false,
  ]);

  const handleFuelButtonClick = (index) => {
    setFuelSelect(index + 1);
    const newButtons = fuelButtons.map((button, i) =>
      i === index ? !button : false
    );
    setFuelButtons(newButtons);
  };

  const handletransmissionButtonClick = (index) => {
    setTransmissionSelect(index + 1);
    const newButtons = transmissionButtons.map((button, i) =>
      i === index ? !button : false
    );
    setTransmissionButtons(newButtons);
  };

  const handleownerButtonClick = (index) => {
    setOwnerSelect(index + 1);
    const newButtons = ownerButtons.map((button, i) =>
      i === index ? !button : false
    );
    setOwnerButtons(newButtons);
  };

  //image upload bx
  const [images, setImages] = useState([]);
  //set image
  // const uploadImages = (event, index) => {
  //   const file = event.target.files[0];
  //   let newImages = [...images];
  //   newImages[index] = file;
  //   setImages(newImages);
  // };
  const uploadImages = (event, index) => {
    const file = event.target.files[0];
    let newImages = [...images];
    newImages[index] = file;
    setImages(newImages);

    dispatch(setImageUrl({ index, file }));
  };

  const removeImage = (index) => {
    let newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
    const value = null;
    dispatch(setImageUrl({ index, value }));
  };

  const renderImageUploadBox = (index) => {
    return (
      <div key={index} className="image_input_box">
        <div className="image_container">
          <label htmlFor={`file_image_${index}`}>
            {" "}
            <div className="_img_upload">
              <div className="upload_btn">
                <input
                  type="file"
                  id={`file_image_${index}`}
                  onChange={(event) => uploadImages(event, index)}
                  style={{ display: "none" }}
                />
                {images[index] ? (
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    src={URL.createObjectURL(images[index])}
                    alt=""
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <AddImage />{" "}
                    </div>

                    <div className="description_upload">
                      <span>Add photo</span>
                    </div>
                  </div>
                )}
                {images[index] && (
                  <div className="remove_image_button">
                    <button onClick={() => removeImage(index)}>Remove</button>
                  </div>
                )}
              </div>
            </div>{" "}
          </label>
        </div>
      </div>
    );
  };

  const imageUploadBoxes = [];
  for (let i = 0; i < 20; i++) {
    imageUploadBoxes.push(renderImageUploadBox(i));
  }
  // =========================================================================================================================
  return (
    <div>
      {loading && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            top: "0",
            zIndex: "9",
          }}
        >
          <LoadingPageAction />
        </div>
      )}

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
                <Link to={"/sell"}>
                  <button className="change_Button">
                    <span>Change</span>
                  </button>
                </Link>
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
                      <div
                        className="selection_box"
                        style={{
                          boxShadow: box1
                            ? "inset 0 0 0 3px #00a49f"
                            : box1Warning
                            ? "inset 0 0 0 3px red"
                            : null,
                        }}
                      >
                        <select
                          onFocus={() => setBox1(true)}
                          onBlur={() => {
                            setBox1(false);
                            brand === ""
                              ? setBox1Warning(true)
                              : setBox1Warning(false);
                          }}
                          style={{
                            appearance: "none",
                          }}
                          onChange={handleSelectChange1}
                        >
                          <optgroup label="Popular Brand"></optgroup>
                          {popularBrandOptions.map((res, index) => (
                            <option key={index} value={res.value}>
                              {res.label}
                            </option>
                          ))}
                          <optgroup label="allBrandOptions"></optgroup>
                          {allBrandOptions.map((res, index) => (
                            <option key={index} value={res.value}>
                              {res.label}
                            </option>
                          ))}
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
                      <div
                        className="selection_box"
                        style={{
                          boxShadow: box2
                            ? "inset 0 0 0 3px #00a49f"
                            : box2Warning
                            ? "inset 0 0 0 3px red"
                            : null,
                        }}
                      >
                        <select
                          ref={selectRef}
                          style={{
                            appearance: "none",
                          }}
                          onFocus={() => setBox2(true)}
                          onBlur={() => {
                            setBox2(false);
                            modelVehicle === ""
                              ? setBox2Warning(true)
                              : setBox2Warning(false);
                          }}
                          onChange={handleSelectChange2}
                        >
                          {maruti.map((res, index) => (
                            <option key={index} value={res.value}>
                              {res.label}
                            </option>
                          ))}
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
                      <div
                        className="input-box-12"
                        style={{
                          boxShadow: box3
                            ? "inset 0 0 0 3px #00a49f"
                            : box3Warning
                            ? "inset 0 0 0 3px red"
                            : null,
                        }}
                      >
                        <input
                          id="selectYear"
                          type="text"
                          style={{
                            appearance: "none",
                          }}
                          onFocus={() => setBox3(true)}
                          onBlur={() => {
                            setBox3(false);
                            edition === ""
                              ? setBox3Warning(true)
                              : setBox3Warning(false);
                          }}
                          onChange={handleSelectChange3}
                        ></input>
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
                        <button
                          style={{
                            background:
                              fuelSelect === 1 && fuelButtons[0]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              fuelSelect === 1 && fuelButtons[0]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol0"
                          onClick={() => {
                            dispatch(setFuelType(" CNG / Hybrids"));
                            handleFuelButtonClick(0);
                          }}
                        >
                          CNG &amp; Hybrids
                        </button>
                        <button
                          style={{
                            background:
                              fuelSelect === 2 && fuelButtons[1]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              fuelSelect === 2 && fuelButtons[1]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol1"
                          onClick={() => {
                            handleFuelButtonClick(1);
                            dispatch(setFuelType(" Diesel"));
                          }}
                        >
                          Diesel
                        </button>
                        <button
                          style={{
                            background:
                              fuelSelect === 3 && fuelButtons[2]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              fuelSelect === 3 && fuelButtons[2]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol2"
                          onClick={() => {
                            handleFuelButtonClick(2);
                            dispatch(setFuelType(" Electric"));
                          }}
                        >
                          Electric
                        </button>
                        <button
                          style={{
                            background:
                              fuelSelect === 4 && fuelButtons[3]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              fuelSelect === 4 && fuelButtons[3]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol3"
                          onClick={() => {
                            handleFuelButtonClick(3);
                            dispatch(setFuelType(" LPG"));
                          }}
                        >
                          LPG
                        </button>
                        <button
                          style={{
                            background:
                              fuelSelect === 5 && fuelButtons[4]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              fuelSelect === 5 && fuelButtons[4]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol4"
                          onClick={() => {
                            handleFuelButtonClick(4);
                            dispatch(setFuelType(" Petrol"));
                          }}
                        >
                          Petrol
                        </button>
                      </div>
                    </div>
                    <div className="main_box_container">
                      <label className="">Transmission *</label>
                      <div className="ful_box">
                        <button
                          style={{
                            background:
                              transmissionSelect === 1 && transmissionButtons[0]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              transmissionSelect === 1 && transmissionButtons[0]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol0"
                          onClick={() => {
                            console.log("automatic");
                            handletransmissionButtonClick(0);
                            dispatch(setTransmission(" Automatic"));
                          }}
                        >
                          Automatic
                        </button>
                        <button
                          style={{
                            background:
                              transmissionSelect === 2 && transmissionButtons[1]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              transmissionSelect === 2 && transmissionButtons[1]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol1"
                          onClick={() => {
                            handletransmissionButtonClick(1);
                            console.log("manuel");
                            dispatch(setTransmission(" Manual"));
                          }}
                        >
                          Manual
                        </button>
                      </div>
                    </div>
                    <div className="main_box_container">
                      <label className="">KM driven*</label>
                      <div
                        className="input-box-12"
                        style={{
                          boxShadow: box4
                            ? "inset 0 0 0 3px #00a49f"
                            : box4Warning
                            ? "inset 0 0 0 3px red"
                            : null,
                        }}
                      >
                        <input
                          type="text"
                          onFocus={() => {
                            setBox4(true);
                          }}
                          onBlur={() => {
                            setBox4(false);
                            drivenInkm === ""
                              ? setBox4Warning(true)
                              : setBox4Warning(false);
                          }}
                          onChange={handleSelectChange4}
                          maxLength="6"
                          value={drivenInkm}
                        />
                      </div>
                      <div
                        className="rui-1rV1O"
                        style={{
                          display: "flex",
                          marginBlockEnd: "5px",
                        }}
                      >
                        <p
                          className="rui-3FLBC rui-_74YY"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: "1",
                            fontSize: "12px",
                            marginBlockEnd: "5px",

                            color: box4Warning ? "red" : "white",
                          }}
                        >
                          KM driven is mandatory. Please complete the required
                          field.
                        </p>

                        <span
                          className="rui-YekSh rui-_74YY"
                          style={{
                            paddingLeft: "16px",
                            whiteSpace: "nowrap",
                            fontSize: "12px",
                          }}
                        >
                          {drivenInkm.length} / 6
                        </span>
                      </div>
                    </div>
                    <div className="main_box_container">
                      <label className="">No. of Owners *</label>
                      <div className="ful_box">
                        <button
                          style={{
                            background:
                              ownerSelect === 1 && ownerButtons[0]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              ownerSelect === 1 && ownerButtons[0]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol0"
                          onClick={() => {
                            handleownerButtonClick(0);
                            dispatch(setNumberOfOwners("  1 st"));
                          }}
                        >
                          1 st
                        </button>
                        <button
                          style={{
                            background:
                              ownerSelect === 2 && ownerButtons[1]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              ownerSelect === 2 && ownerButtons[1]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol1"
                          onClick={() => {
                            handleownerButtonClick(1);
                            dispatch(setNumberOfOwners(" 2nd"));
                          }}
                        >
                          2nd
                        </button>
                        <button
                          style={{
                            background:
                              ownerSelect === 3 && ownerButtons[2]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              ownerSelect === 3 && ownerButtons[2]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol1"
                          onClick={() => {
                            handleownerButtonClick(2);
                            dispatch(setNumberOfOwners("  3rd"));
                          }}
                        >
                          3rd
                        </button>
                        <button
                          style={{
                            background:
                              ownerSelect === 4 && ownerButtons[3]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              ownerSelect === 4 && ownerButtons[3]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol1"
                          onClick={() => {
                            handleownerButtonClick(3);
                            dispatch(setNumberOfOwners(" 4th "));
                          }}
                        >
                          4th
                        </button>
                        <button
                          style={{
                            background:
                              ownerSelect === 5 && ownerButtons[4]
                                ? "#c8f8f6"
                                : "",
                            outline:
                              ownerSelect === 5 && ownerButtons[4]
                                ? "1px solid black"
                                : "",
                          }}
                          className="rui-GvxAR"
                          data-aut-id="oppetrol1"
                          onClick={() => {
                            handleownerButtonClick(4);
                            dispatch(setNumberOfOwners(" 4+ "));
                          }}
                        >
                          4+
                        </button>
                      </div>
                    </div>
                    <div className="main_box_container">
                      <label className="">Ad title *</label>
                      <div
                        className="input-box-12"
                        style={{
                          boxShadow: box5
                            ? "inset 0 0 0 3px #00a49f"
                            : box5Warning
                            ? "inset 0 0 0 3px red"
                            : null,
                        }}
                      >
                        <input
                          type="text"
                          onFocus={() => setBox5(true)}
                          onBlur={() => {
                            setBox5(false);
                            addedTitle === ""
                              ? setBox5Warning(true)
                              : setBox5Warning(false);
                          }}
                          onChange={handleSelectChange5}
                        />
                      </div>
                    </div>
                    <div className="main_box_container">
                      <label className="">Description *</label>
                      <div
                        className="input-box-12"
                        style={{
                          boxShadow: box6
                            ? "inset 0 0 0 3px #00a49f"
                            : box6Warning
                            ? "inset 0 0 0 3px red"
                            : null,
                          paddingTop: '5px',
                          paddingBottom: '5px',
                         
                        }}
                      >
                        <textarea
                          style={{
                            appearance: "none",
                            background: "none",
                            border: "none",
                            fontFamily: 'sans-serif',

                            display: "block",

                            height: "100px",
                            boxSizing: "border-box",
                            outline: "none",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            width: "100%",
                          }}
                          type="text"
                          onFocus={() => setBox6(true)}
                          onBlur={() => {
                            setBox6(false);
                            itemDescription === ""
                              ? setBox6Warning(true)
                              : setBox6Warning(false);
                          }}
                          onChange={handleSelectChange6}
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
                  <div
                    className="pricecontainer"
                    style={{
                      boxShadow: box7
                        ? "inset 0 0 0 3px #00a49f"
                        : box7Warning
                        ? "inset 0 0 0 3px red"
                        : null,
                    }}
                  >
                    <div className="price_box">
                      <div className="rupee_box">
                        <div className="rupeesIcon">
                          <span>₹</span>
                        </div>
                      </div>
                      <div className="input_box_1">
                        <input
                          type="number"
                          onFocus={() => setBox7(true)}
                          onBlur={() => {
                            setBox7(false);
                            itemPrice === ""
                              ? setBox7Warning(true)
                              : setBox7Warning(false);
                          }}
                          onChange={handleSelectChange7}
                        />
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
                <div
                  style={{
                    display: "flex",
                    width: "100 %",
                    flexWrap: "wrap",
                  }}
                >
                  {imageUploadBoxes}
                </div>
              </div>
            </div>

            <div className="line_bx"></div>

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
                          <div
                            className="input_box8"
                            style={{
                              boxShadow: box8
                                ? "inset 0 0 0 3px #00a49f"
                                : box8Warning
                                ? "inset 0 0 0 3px red"
                                : null,
                            }}
                          >
                            <select
                              onFocus={() => setBox8(true)}
                              onBlur={() => {
                                setBox8(false);
                                sellerState === ""
                                  ? setBox8Warning(true)
                                  : setBox8Warning(false);
                              }}
                              onChange={handleSelectChange8}
                            >
                              {userState.map((option, index) => (
                                <option key={index} value={option.value}>
                                  {option.text}
                                </option>
                              ))}
                            </select>
                          </div>
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
                            src={
                              "https://statics.olx.in/external/base/img/avatar_1.png"
                            }
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
                      <label htmlFor="name">Name</label>
                      <div className="user_name_input_container">
                        <div
                          className="input_box_name_13"
                          style={{
                            boxShadow: box9
                              ? "inset 0 0 0 3px #00a49f"
                              : box9Warning
                              ? "inset 0 0 0 3px red"
                              : null,
                          }}
                        >
                          <div className="input_user_name">
                            <input
                              type="text"
                              onFocus={() => setBox9(true)}
                              onBlur={() => {
                                setBox9(false);
                                sellerName === ""
                                  ? setBox9Warning(true)
                                  : setBox9Warning(false);
                              }}
                              onChange={handleSelectChange9}
                              maxLength="30"
                              value={sellerName}
                            />
                            <div className=""></div>
                          </div>
                        </div>
                      </div>
                      <div className="Description_count_text ">
                        <span className="space_span"></span>
                        <span className="count_span">{length} / 30</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="usercontact_info">
                  {userPhoneNumber ? (
                    <div className="otherPhoneLabel">
                      <p>Your phone number</p>
                      <p className="current_user_phoneNumber">
                        {"+91" + userPhoneNumber}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="line_bx"></div>
            <div className="input_box">
              <div className="input_container">
                <button
                  onClick={handleSubmit}
                  className="btnPost"
                  style={{
                    background: done ? "#002f34" : "#d8dfe0",
                    border: done ? "#002f34" : "#d8dfe0",
                    color: done ? "white" : "#7f9799",
                    cursor: done ? "pointer" : "not-allowed",
                  }}
                >
                  <span>Post now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostYourAdd;
