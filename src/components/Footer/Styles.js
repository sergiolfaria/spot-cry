import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const FooterContainer = styled.footer`
  display: grid;
  height: 300px;
  background-color: ${COLORS.yellow};
  grid-template-columns: 1fr 2fr 1fr;
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 0 15%;
`;

export const FooterImage = styled.img`
  object-fit: cover;
  align-self: center;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const FooterInfoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  color: ${COLORS.white};
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  gap: 10px;
  color: ${COLORS.white};
`;

export const FakeLink = styled.p`
  cursor: pointer;
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
  font-weight: 600;

  &:hover {
    color: ${COLORS.indigo};
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;

export const FooterNotes = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;
