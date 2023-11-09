import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 320px;
  gap: 30px;
  background: ${COLORS.gradientBlue};
  top: 0;
  z-index: 1;
  padding: 0 15%;
`;

export const BannerTitle = styled.h1`
  margin-left: 20px;
  font-size: 2.5rem;
  color: ${COLORS.white};
  font-family: "Raleway", sans-serif;
  font-weight: 600;
`;

export const BannerText = styled.p`
  margin-left: 20px;
  font-size: 1.2rem;
  color: ${COLORS.white};
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

export const Button = styled.div`
  cursor: pointer;
  height: 20%;
  width: 200px;
  margin-left: 20px;
  padding:1rem;
  border-radius: 25px;
  border-style: solid;
  border-color:${COLORS.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${COLORS.white};
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  transform-origin: center center;

  &:hover {
    
  }
`;

export const Note = styled.div`
  font-size: 0.8rem;
  width: 100%;
  margin-left: 20px;
  color: ${COLORS.white};
`;
