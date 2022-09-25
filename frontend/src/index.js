import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CreationContextProvider } from './context/CreationContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CreationContextProvider>
      <App />
    </CreationContextProvider>
  </React.StrictMode>
);