import React from "react";
import { BannerWrapper } from "./Banner.styles";

interface Props {
  title: string;
  text: string;
  children: JSX.Element | JSX.Element[];
}

const Banner: React.FC<Props> = ({ title, text, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </BannerWrapper>
  );
};

export default Banner;
