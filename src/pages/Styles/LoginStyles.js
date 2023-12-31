import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.jpg";
import { COLORS } from "../../constants/colors";

export const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${loginBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginImageContainer = styled.div`
  width: 40%;
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
