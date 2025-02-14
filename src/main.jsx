// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import GithubProvider from './context/GithubContext';

// Create new component
const ThemeWrapper = () => {
  const { isDark } = useTheme(); // Get theme state

  return (
    <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <App />
    </StyledThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// main.jsx
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GithubProvider>
          <ThemeWrapper /> {/* New wrapper component */}
        </GithubProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
