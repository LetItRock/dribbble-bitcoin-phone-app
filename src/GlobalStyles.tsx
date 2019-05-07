import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,*::before,*::after {
    box-sizing: inherit;
    user-select: none;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`
