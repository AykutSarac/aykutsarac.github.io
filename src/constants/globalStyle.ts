import { createGlobalStyle, DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  body: "#1b1c28",
  main: "#A479F0",
  mainPolished: "rgba(141, 146, 204, 0.2)",
  mainColor: "#FFFFFF",
  accent: "#E5DE17",
  accentColor: "#161616",
  secondary: "#FFFFFF",
  secondaryColor: "#343434",
  dullColor: "#343434",
  ternary: "#000000",
  codeColor: "#D121C5",
  transparent: "rgba(80, 80, 80, 0.2)",
  violet: "#A771FE",
  lightblue: "#BDCCFF",
  mint: "#B5FBDD",
  lightgreen: "#BEF761",
  yellow: "#FFF851",
  red: "#F6522E"
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'M PLUS 1', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.mainColor};
    font-size: 16px;
  }


  h1 {
    font-size: 34px;
  }

  h2 {
    font-size: 30px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default GlobalStyle;
