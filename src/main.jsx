import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import CounterProvider from './context/CounterProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // v5

  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>
);
