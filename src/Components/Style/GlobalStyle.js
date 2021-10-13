import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  body {
    box-sizing: border-box;
  }
  *, 
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-size: 20px;
    color: black;
    font-family: 'Roboto', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
  }

  input, button {
    font: inherit;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button  {
    -webkit-appearance: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3{
    padding: 0;
    margin: 0;
    font-family: 'Pacifico', cursive;
  }

  p {
    padding: 0;
    margin: 0;
  }

`;
