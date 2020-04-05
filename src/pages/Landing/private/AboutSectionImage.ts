import React from "react";
import styled from "styled-components";
import { Image } from "../../../components/atoms/Image/Image";
import { theme } from "../../../styles/theme";

export const AboutSectionImage = styled(Image)`
  width: 100%;
  max-width: 500px;
  display: block;
  border: 6px solid ${theme.colors.primaryColor};
`;
