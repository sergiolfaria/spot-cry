import React from "react";
import { ImageContainer, LoginContainer } from "./Styles/LoginStyles";
import { LoginForm } from "../components/LoginForm/LoginForm";

export const LoginPage = () => {

  return (
    <div>
      <LoginContainer>
        <ImageContainer />
        <LoginForm />
      </LoginContainer>
    </div>
  );
};
