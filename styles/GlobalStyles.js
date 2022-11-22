import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,html,body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #121212;
    background-color: #fff;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    
    
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;