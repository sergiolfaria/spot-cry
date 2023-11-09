import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const HeaderLogo = styled.img`
    margin-left: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${COLORS.black};
  top: 0;
  z-index: 1;
  padding: 0 15%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: 150px;
`;

export const Button = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${COLORS.white};
  font-family: "Raleway", sans-serif;
  font-weight: 600;

  &:hover {
    color: ${COLORS.blue};
  }
`;
