import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, a {
    background-color: rgb(38, 51, 64);
    max-width: 700px; 
    font-size: 25px;
    font-weight: 400;
    color: #dadada;
    font-family: "TT Norms Regular", serif;
    text-align: center;
  }
  body {
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    user-select: none;
  }
  
`;