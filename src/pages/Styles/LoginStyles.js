import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.png";
import { COLORS } from "../../constants/colors";

export const LoginImageContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${loginBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  color: ${COLORS.darkGray};
`;
