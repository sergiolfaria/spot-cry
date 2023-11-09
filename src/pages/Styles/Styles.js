import styled from "styled-components";
import loginBackground from "../../assets/loginBackground.png";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${loginBackground});
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
`;
