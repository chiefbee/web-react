import React from "react";
import styled from "styled-components";

interface Props {
  children: any;
  textAlign?: string;
}

const Title: React.FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default styled(Title)`
  font-size: 2rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  text-align: ${(props) => props.textAlign ?? "left"};
`;
