import React from "react";
import HomePage from "../components/main/post/home/HomePage";
import Header from "../components/header/navbar/Header";
import Description from "../components/header/Description/Description";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Description />
      <HomePage />
      <Footer />
    </>
  );
};

export default Home;
