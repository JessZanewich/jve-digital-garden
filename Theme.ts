import { DefaultTheme, createGlobalStyle } from "styled-components";

export const lightTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
};

export const darkTheme = {
  borderRadius: '5px',

  colors: {
    main: 'black',
    secondary: 'red',
  },
};

export const defaultTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta',
  },
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.secondary};
    font-family: Poppins, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`