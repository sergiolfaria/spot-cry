import {
  FooterContainer,
  FooterImage,
  FooterGrid,
  FooterInfo,
  FooterInfoText,
  FakeLink,
  SocialMediaContainer,
  FooterNotes,
} from "./Styles";
import logoFooter from "../../assets/logoFooter.png";
import StyledFacebookIcon from "../../assets/icons/StyledFacebookIcon";
import StyledInstagramIcon from "../../assets/icons/StyledInstagramIcon";
import StyledTwitterIcon from "../../assets/icons/StyledTwitterIcon";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage src={logoFooter} alt="logoFooter" />
      <FooterGrid>
        <FooterInfo>
          <FooterInfoText>
            <strong>Spoticry</strong>
            <FakeLink>© 2021 Musicfy AB</FakeLink>
          </FooterInfoText>
        </FooterInfo>
        <FooterInfo>
          <FooterInfoText>
            <strong>Empresa</strong>
            <FakeLink>Sobre</FakeLink>
            <FakeLink>Empregos</FakeLink>
            <FakeLink>For the Record</FakeLink>
          </FooterInfoText>
        </FooterInfo>
        <FooterInfo>
          <FooterInfoText>
            <strong>Comunidades</strong>
            <FakeLink>Para Artistas</FakeLink>
            <FakeLink>Desenvolvedores</FakeLink>
            <FakeLink>Publicidade</FakeLink>
            <FakeLink>Investidores</FakeLink>
            <FakeLink>Fornecedores</FakeLink>
          </FooterInfoText>
        </FooterInfo>
        <FooterInfo>
          <FooterInfoText>
            <strong>Links úteis</strong>
            <FakeLink>Suporte</FakeLink>
            <FakeLink>Player da web</FakeLink>
            <FakeLink>Aplicativo móvel grátis</FakeLink>
          </FooterInfoText>
        </FooterInfo>
      </FooterGrid>
      <FooterNotes>
        <SocialMediaContainer>
          <StyledFacebookIcon />
          <StyledInstagramIcon />
          <StyledTwitterIcon />
        </SocialMediaContainer>
        <p>Desenvolvido por Flávio</p>
      </FooterNotes>
    </FooterContainer>
  );
};
