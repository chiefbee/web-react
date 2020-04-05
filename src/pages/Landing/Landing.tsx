import React from "react";
import Header from "../../components/molecules/Header/Header";
import AboutSection from "./private/AboutSection";
import RoomsSection from "./private/RoomsSection";

const Landing = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <RoomsSection />
    </>
  );
};

export default Landing;
