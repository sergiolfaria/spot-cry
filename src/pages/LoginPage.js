import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/Coordinator";
import { ImageContainer, LoginContainer } from "./Styles/Styles";
import { LoginForm } from "../components/LoginForm/LoginForm";

export const LoginPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    goToHomePage(navigate);
  };

  return (
    <LoginContainer>
      <ImageContainer />
      <LoginForm>
        <h1>Login</h1>
        <p>login página</p>
        <button onClick={goHome}>Home</button>
      </LoginForm>
    </LoginContainer>
  );
};
