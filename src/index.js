import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import LangProvider from './LangContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
