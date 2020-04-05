import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface HeroProps {
  readonly img: string;
}

export const Hero = styled.header<HeroProps>`
  min-height: 100vh;
  ${(props) => theme.background(props.img, "rgba(0, 0, 0, 0.5)")}
  ${theme.flex("center", "center")}
`;
