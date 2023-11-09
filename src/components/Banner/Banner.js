import { useNavigate } from "react-router-dom";
import { BannerContainer, BannerTitle, BannerText, Button, Note } from "./Styles"
import { goToLoginPage } from "../../routes/Coordinator";

export const Banner = () => {
    const navigate = useNavigate();

    const login = () => {
      localStorage.removeItem("token");
      goToLoginPage(navigate);
    };
    return(
        <BannerContainer>
            <BannerTitle>Aproveite um mês grátis de Premium</BannerTitle>
            <BannerText>Depois, pague somente 799,99R$/mês. Cancele quando quiser</BannerText>
            <Button onClick={login}>Obter Premium</Button>
            <Note>O mês grátis não está disponível para usuários que já experimentaram o Premium.</Note>
        </BannerContainer>
    )
}