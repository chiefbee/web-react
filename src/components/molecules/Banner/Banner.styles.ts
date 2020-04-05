import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { media } from "../../../styles/media";

export const BannerWrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: ${theme.rem(60)} ${theme.rem(32)};
  letter-spacing: 3px;
  color: ${theme.colors.white};

  ${media.tablet`
    width: 70vw;
    border: 6px solid ${theme.colors.primaryColor};
  `}
`;
