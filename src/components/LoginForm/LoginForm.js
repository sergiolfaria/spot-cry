import {
  FormContainer,
  LoginTitle,
  LogoWithText,
  StyledForm,
  StyledInput,
  StyledButton,
} from "./Styles";
import logoLogin from "../../assets/logoLogin.png";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import SimpleText from "../SimpleText/SimpleText";
import { login } from "../../services/users";

export const LoginForm = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();
    login(form, navigate);
  };

  return (
    <FormContainer>
      <LogoWithText>
        <img src={logoLogin} alt="logo" />
      </LogoWithText>
      <StyledForm>
        <LoginTitle>Sinta a música, viva a emoção</LoginTitle>
        <div>
          <SimpleText text="Email:" />
          <StyledInput type="email" name="email" onChange={onChange} required={true} value={form.email} />
        </div>
        <div>
          <SimpleText text="Senha:" />
          <StyledInput type="password" name="password" onChange={onChange} required={true} value={form.password} />
        </div>
        <StyledButton type={"submit"} value={"Entrar"} onClick={onSubmitLogin}/>
      </StyledForm>
    </FormContainer>
  );
};
