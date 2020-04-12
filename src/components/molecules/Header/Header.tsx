import React from "react";
import { Hero } from "../../atoms/Hero/Hero";

import homeImg from "../../../assets/images/homeBcg.jpeg";
import Banner from "../Banner/Banner";
import { PrimaryButton } from "../../atoms/Button/Button";

// there is a clever way to turn a button into an <a> element:
// <PrimaryButton as="a" href="http://www.google.com" marginTop="1rem">View Details</PrimaryButton>

const Header = () => {
  const bannerTitle = `Deniz welcomes you to Beachwalk Resort!`;
  const bannerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam 
  molestiae accusamus, maxime asperiores ducimus neque.`;

  return (
    <Hero img={homeImg}>
      <Banner title={bannerTitle} text={bannerText}>
        <PrimaryButton marginTop="1rem">View Details</PrimaryButton>
      </Banner>
    </Hero>
  );
};

export default Header;
