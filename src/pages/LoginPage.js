import React from "react";
import { ImageContainer, LoginContainer } from "./Styles/LoginStyles";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/Coordinator";

export const LoginPage = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    goToHomePage(navigate);
  };

  return (
    <div>
      <button onClick={navigateToHome}>Home</button>
      <LoginContainer>
        <ImageContainer />
        <LoginForm />
      </LoginContainer>
    </div>
  );
};
