import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    color: #fff;
  }

  p {
    
    font-weight: 400;
    color: #fff;
  }
  body, main{
    background-color:#272727 !important;
  }

  * {
    font-family: '', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
