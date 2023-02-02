import React from "react";
import BackArrow from "../../../../../../../assets/BackArrow";




import "./style.css";

const RequestOTP = () => {





    
  return (
    <div className="box-log">
      <div className="container">
        <div className="otp_main_box">
          <span className="btnBack_otp_svg">
            <div className="svg_back_Box">
              <BackArrow />
            </div>
          </span>
          <form className="form_box_otp">
            <div className="form_container_otp">
              <div className="lst_otp_1">
                <svg width="60px" height="60px" viewBox="0 0 1024 1024">
                  <path
                    className="rui-l7uK1"
                    d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                  ></path>
                </svg>
              </div>
              <h3 className="lst_otp_2">
                <span>Enter verification code</span>
              </h3>
              <p className="lst_otp_3">
                <span>
                  We sent a 4-digit code to <strong>+91{'number'}</strong>
                </span>
                <span className="_3p1ST">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    data-aut-id="icon"
                    className=""
                    fill-rule="evenodd"
                  >
                    <path
                      className="rui-4K4Y7"
                      d="M822.315 85.333l-76.843 77.355 116.309 117.035 76.885-77.312v-33.835l-82.773-83.243h-33.579zM193.92 178.048l-108.587 109.269v542.123l108.587 109.227h538.624l108.587-109.269v-274.603l-47.019-36.139-47.019 36.139v235.349l-53.547 53.888h-460.629l-53.589-53.845v-463.573l53.589-53.973h230.272l30.592-42.581-30.592-52.053h-269.269zM309.291 601.643v117.035h116.309l400.939-403.499-116.352-117.035-400.896 403.499z"
                    ></path>
                  </svg>
                </span>
              </p>
              <div className="lst_otp_4">
                <div className="box_input">
                  <div className="input_container_otp">
                    <div className="box_1_otp">
                      <input
                        name="0"
                        maxlength="1"
                        type="number"
                   
                      
                      />
                      <span className="box_inside_line_otp">-</span>
                    </div>
                    <div className="box_1_otp ">
                      <input
                        name="1"
                        maxlength="1"
                        type="number"
                       
                      />
                      <span className="box_inside_line_otp">-</span>
                    </div>
                    <div className="box_1_otp ">
                      <input
                        name="2"
                        maxlength="1"
                        type="number"
                       
                      />
                      <span className="box_inside_line_otp">-</span>
                    </div>
                    <div className="box_1_otp ">
                      <input
                        name="3"
                        maxlength="1"
                        type="number"
                       
                      />
                      <span className="box_inside_line_otp">-</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lst_otp_5">
                <span className="_2M5bz" data-aut-id="resendCodeonClick">
                  <span>Resend code by SMS</span>
                </span>
              </div>
              <div className="lst_otp_5">
                <span className="_2M5bz" data-aut-id="resendCodeonClick">
                  <span>Resend code by Call</span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestOTP;
