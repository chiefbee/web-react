import styled from "styled-components";
import { theme } from "../../../styles/theme";

interface ButtonProps {
  readonly marginTop?: string;
  readonly marginRight?: string;
  readonly marginBottom?: string;
  readonly marginLeft?: string;
}

export const PrimaryButton = styled.button<ButtonProps>`
  display: inline-block;
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
  text-transform: capitalize;
  font-size: ${theme.rem(18)};
  ${theme.fonts.roboto}
  padding: ${theme.rem(17)} ${theme.rem(36)};
  letter-spacing: 1px;
  border: 2px solid ${theme.colors.primaryColor};
  margin-top: ${(props) => props.marginTop || 0};
  margin-right: ${(props) => props.marginRight || 0};
  margin-bottom: ${(props) => props.marginBottom || 0};
  margin-left: ${(props) => props.marginLeft || 0};

  &:hover {
    background: transparent;
    cursor: pointer;
    color: ${theme.colors.primaryColor}
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  padding: ${theme.rem(9)} ${theme.rem(12)};
`;
