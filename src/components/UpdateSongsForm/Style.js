import styled from "styled-components";
import { COLORS } from "../../constants/colors";

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

export const UpdateFormContainer = styled.div`
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


export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
`;

export const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${COLORS.darkGray};
  outline: 0;
  font-size: 1.3rem;
  color: ${COLORS.black};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
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

export const DemoContainer = styled.body`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.5rem;
  background-color: #222222;
`;

export const StyledButton = styled.button`
  padding: 8px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  width: 50%;
  background-color: ${(props) =>
    props.isCancel ? COLORS.white : COLORS.white};
  
  &:hover {
    background-color: ${(props) =>
      props.isCancel ? COLORS.red : COLORS.blue};
    color: ${(props) => (props.isCancel ? COLORS.white : "inherit")};
  }
`;
