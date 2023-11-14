import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import GlobalStyle from "./styles/Styles";



function App() {
  return (
    <>
      <GlobalStyle />
      
      <BrowserRouter basename="/spoticry-front">
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
