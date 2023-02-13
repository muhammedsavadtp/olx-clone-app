import React from "react";
import Footer from "../components/footer/Footer";
import Description from "../components/header/Description/Description";
import Header from "../components/header/navbar/Header";
import ErrorPage from "../components/main/post/error/ErrorPage";

const Error = () => {
  return (
    <>
      <Header />
      <Description />
      <ErrorPage />
      <Footer />
    </>
  );
};

export default Error;
