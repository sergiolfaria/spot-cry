import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 60vh;
  min-height: 500px;
  background-color: ${COLORS.white};
`;

export const MainGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 20px;
`;
export const Img =styled.img`
    filter: invert(1);
`

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
