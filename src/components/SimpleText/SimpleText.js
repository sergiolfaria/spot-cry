import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const Text = styled.p`
  font-size: 28px;
  color: ${COLORS.indigo};
`;

const SimpleText = ({ text }) => {
  return <Text>{text}</Text>;
};

export default SimpleText;
