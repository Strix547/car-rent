import { createGlobalStyle } from 'styled-components'

import { resetStyles } from './resetStyles'

export const GlobalStyles = createGlobalStyle`
  ${resetStyles}

  
  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background: #000;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  button {
    display: flex;
    padding: 0;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`
