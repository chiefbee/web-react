import styled from "styled-components";
import { theme } from "../../../styles/theme";

const Section = styled.section`
  padding: ${theme.rem(60)} ${theme.rem(32)};
  background: ${(props) => props.color};
`;

export default Section;
