import React, { useState } from "react";
import { FormContainer, LoginTitle, LogoWithText, StyledForm, StyledInput, StyledButton } from "./Styles";
import logoLogin from "../../assets/logoLogin.png";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import SimpleText from "../SimpleText/SimpleText";
import { login } from "../../services/users";
import Loading from "../Loading/Loading";

export const LoginForm = () => {
  const [form, onChange] = useForm({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await login(form, navigate);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
    finally{
      setLoading(false);
    }
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
        <StyledButton type={"submit"} value={"Entrar"} onClick={onSubmitLogin} />
        {loading && <Loading/>}
      </StyledForm>
    </FormContainer>
  );
};
