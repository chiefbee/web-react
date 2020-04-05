import styled from "styled-components";
import { media } from "../../../styles/media";

export const AboutSectionContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
    align-items: normal;
    display: grid;
    grid-template-columns: 1fr 4fr 4fr 1fr;
  `}

  ${media.widescreen`
    grid-template-columns: 2fr 4fr 4fr 2fr;
  `}
`;

export const Left = styled.div`
  ${media.tablet`
    margin-right: 1rem;
    grid-column-start: 2;
  `}
`;

export const Right = styled.div`
  margin-top: 2rem;

  ${media.tablet`
  margin-top: 0;
    margin-left: 1rem;
  `}

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
