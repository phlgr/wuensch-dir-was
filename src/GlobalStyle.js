import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Mountains of Christmas', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: linear-gradient(90deg, hsla(165, 89%, 31%, 1) 0%, hsla(161, 46%, 49%, 1) 100%);
    color: #FFD166;
  }
`;

export default GlobalStyle;
