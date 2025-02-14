// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import GithubProvider from './context/GithubContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GithubProvider>
          <StyledThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <App />
          </StyledThemeProvider>
        </GithubProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
