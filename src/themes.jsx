// src/theme.js
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#ffffff',
  text: '#121212',
  primary: '#2ecc71',
  secondary: '#3498db',
  accent: '#e74c3c',
  background: '#f8f9fa',
};

export const darkTheme = {
  body: '#121212',
  text: '#ffffff',
  primary: '#27ae60',
  secondary: '#2980b9',
  accent: '#c0392b',
  background: '#12161a',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`;
