import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import GithubProvider from './context/GithubContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GithubProvider>
        <App />
      </GithubProvider>
    </BrowserRouter>
  </React.StrictMode>
);
