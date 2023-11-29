import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
`;

export const Title = styled.h2``;

export const Form = styled.form`
  width: 35%;
    height: 50%;
    background-color: #ffffff;
    display: flex;
    color:black;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Label = styled.label`
  /* Add any styles for labels here */
`;

export const Input = styled.input`
  display: flex;
  /* Add any styles for input fields here */
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 13px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 40px; /* Largura inicial do botão, ajuste conforme necessário */
  height: 40px; /* Altura inicial do botão, ajuste conforme necessário */
  transition: background-color 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out; /* Adiciona transições suaves */

  span {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    margin-left: 8px;
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${COLORS.darkBlue};
    width: 120px; /* Largura durante o hover, ajuste conforme necessário */
    height: 40px; /* Altura durante o hover, ajuste conforme necessário */

    span {
      opacity: 1;
    }

    svg {

    }
  }
`;

export const ToggleButton = styled.button`
  background-color: ${COLORS.red};
  color: ${COLORS.white};
  margin-bottom: 10px;
  /* Add any styles for toggle buttons here */
`;

export const PostFormContainer = styled.div`
    width: 35%;
    height: 50%;
    background-color: #ffffff;
    display: flex;
    color:black;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const CenteredContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the modal is above other content */
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

export const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  max-width: 300px; /* Adjust the max-width as needed */
  margin: 0 auto; /* Center the input field */
  border: 0;
  border-bottom: 2px solid ${COLORS.darkGray};
  outline: 0;
  font-size: 1rem;
  color: ${COLORS.black};
  padding: 13px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${COLORS.blue};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: ${COLORS.gradientBlue};
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${COLORS.darkGray};
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const StyledButton = styled.button`
  padding: 8px;
  cursor: pointer;
  border: none;
  width: 50%;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isCancel ? COLORS.white : COLORS.white};
  

  &:hover {
    background-color: ${(props) =>
    props.isCancel ? `red` : COLORS.blue};
      color: ${(props) => (props.isCancel ? COLORS.white : "inherit")};
  }
`;

