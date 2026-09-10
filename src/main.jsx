// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import './index.css';

const ThemeWrapper = () => {
  const { isDark } = useTheme();

  return (
    <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <App />
    </StyledThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ThemeWrapper />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
