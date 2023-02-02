import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../../redux-store/slice/location";
import "./style.css";

const LocationList = () => {
  const dispatch = useDispatch();

  return (
    <div className="location-container">
      <div class="">
        <div className="main-box ">
          <div className="ls-1">
            <div className="ls-1-1">
              <span
                className="location-icon"
              
              >
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 1024 1024"
                 
                >
                  <path
                    class="rui-4K4Y7"
                    d="M640 512c0 70.692-57.308 128-128 128s-128-57.308-128-128c0-70.692 57.308-128 128-128s128 57.308 128 128zM942.933 469.333h-89.6c-17.602-157.359-141.307-281.064-297.136-298.527l-1.531-0.139v-89.6h-85.333v89.6c-157.359 17.602-281.064 141.307-298.527 297.136l-0.139 1.531h-89.6v85.333h89.6c17.602 157.359 141.307 281.064 297.136 298.527l1.531 0.139v89.6h85.333v-89.6c157.359-17.602 281.064-141.307 298.527-297.136l0.139-1.531h89.6zM512 772.267c-143.741 0-260.267-116.525-260.267-260.267s116.525-260.267 260.267-260.267c143.741 0 260.267 116.525 260.267 260.267v0c0 143.741-116.525 260.267-260.267 260.267v0z"
                  ></path>
                </svg>
                <div></div>
              </span>
              <div className="location-1">
                <div className="current-location">
                  <span>Use current location</span>
                </div>
                <span class="">Thopumpady, Kochi, Kerala, India</span>
              </div>
            </div>
          </div>
          <div className="ls-2">
            <div className="ls-recent">
              <span>Recent locations</span>
            </div>
            <div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("Thopumpady"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">Thopumpady</span>
                </div>
              </div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("Tilak Nagar"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">Tilak Nagar</span>
                </div>
              </div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("Delhi"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">Delhi</span>
                </div>
              </div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("india"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ls-2">
            <div className="ls-recent">
              <span>Popular locations</span>
            </div>
            <div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("Kerala"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">Kerala</span>
                </div>
              </div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("Tamil Nadu"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">Tamil Nadu</span>
                </div>
              </div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("Punjab"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">Punjab</span>
                </div>
              </div>
              <div
                data-aut-id="locationItem"
                className="ls-2-2"
                onClick={() => dispatch(setLocation("Maharashtra"))}
              >
                <span
                  className="all-loc-icon"
                  role="listbox"
                  tabindex="0"
                  id=""
                  data-aut-id=""
                >
                  <svg
                    width="48px"
                    height="48px"
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
                  <div class="space"></div>
                </span>
                <div className="location-names">
                  <span class="">Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationList;