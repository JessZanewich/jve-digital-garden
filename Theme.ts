import { DefaultTheme, createGlobalStyle } from "styled-components";

export const lightTheme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    main: '#F0F7F4',
    secondary: '#70ABAF',
  },
};

export const darkTheme = {
  borderRadius: '5px',

  colors: {
    main: '#32292F',
    secondary: '#99E1D9',
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