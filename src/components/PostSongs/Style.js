import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  background-color: ${COLORS.darkGray};
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-family: "Playfair Display";
  font-weight: 400;
  font-size: 30px;
  color: ${COLORS.white};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: ${COLORS.white};
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 70%;
  height: 2.5rem;
  border: 2px solid ${COLORS.indigo};
  border-radius: 5px;
  padding-left: 1rem;
  margin-bottom: 1rem;
  font-size: 14px;
  transition: opacity 0.3s; /* Adicionei uma transição de opacidade */
  opacity: ${({ expanded }) => (expanded ? 1 : 0)}; /* Controle da opacidade */
`;

export const Button = styled.button`
  width: 70%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, border 0.1s;
  &:hover {
    background-color: purple;
    color: ${COLORS.darkYellow};
    border: 2px solid ${COLORS.yellow};
  }
`;

export const ToggleButton = styled.button`
  width: 70%;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${COLORS.indigo};
  color: ${COLORS.white};
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, border 0.1s;
  &:hover {
    background-color: purple;
    color: ${COLORS.darkYellow};
    border: 2px solid ${COLORS.yellow};
  }
`;