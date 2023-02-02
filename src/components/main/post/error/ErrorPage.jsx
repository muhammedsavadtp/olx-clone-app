import React from "react";
import "./style.css";
const ErrorPage = () => {
  return (
    <div className="container">
      <section>
        <div className="error-container">
          <div className="error-contents">
            <h3 className="error-message-heading">
              <span>
                Oops... we didn't find anything that matches this search :(
              </span>
            </h3>
            <p className="error-message">
              <span>
                Try search for something more general, change the filters or
                check for spelling mistakes
              </span>
            </p>
            <picture className="error-image">
              <img
                src="https://statics.olx.in/external/base/img/noResults.png"
                class="_1spDR"
                alt=""
              ></img>
            </picture>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
