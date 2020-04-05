import React from "react";
import Section from "../../../components/organisms/Section/Section";
import Title from "../../../components/atoms/Title/Title";

import aboutImg from "../../../assets/images/aboutBcg.jpeg";
import { AboutSectionImage } from "./AboutSectionImage";
import { PrimaryButton } from "../../../components/atoms/Button/Button";

import { AboutSectionContents, Left, Right } from "./AboutSection.styles";

const AboutSection: React.FC = () => {
  return (
    <Section color="skyblue">
      <AboutSectionContents>
        <Left>
          <AboutSectionImage src={aboutImg} />
        </Left>
        <Right>
          <Title>About Us</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            accusantium non consectetur excepturi qui quasi, architecto enim
            distinctio totam ipsam vero nostrum corrupti vel animi sunt eos.
            Inventore, accusantium aspernatur?
          </p>
          <PrimaryButton>Find out more</PrimaryButton>
        </Right>
      </AboutSectionContents>
    </Section>
  );
};

export default AboutSection;
