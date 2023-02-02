import React from "react";
import HomePage from "../components/main/post/home/HomePage";
import Header from "../components/header/navbar/Header";
// import BackToTop from "../components/header/backTo/BackToTop";
import Description from "../components/header/Description/Description";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Description />
      {/* <BackToTop/> */}
      <HomePage />
      <Footer/>
    </>
  );
};

export default Home;
