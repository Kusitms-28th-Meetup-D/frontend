import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router.tsx';
import GlobalStyle from './styles/globalStyles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
);
