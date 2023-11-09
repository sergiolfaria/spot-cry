import { useNavigate } from "react-router-dom";
import logo from "../../assets/logoHeader.png";
import {
  HeaderContainer,
  ButtonsContainer,
  Button,
  HeaderLogo,
} from "./Styles";
import { goToLoginPage } from "../../routes/Coordinator";

export const Header = () => {
  const navigate = useNavigate();

  const login = () => {
    localStorage.removeItem("token");
    goToLoginPage(navigate);
  };
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo" />
      <ButtonsContainer>
        <Button>Inscrever</Button>
        <Button onClick={login}>Entrar</Button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};
