import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

// Registrar el Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registrado: ', registration);
    }).catch(registrationError => {
      console.log('SW registro fallido: ', registrationError);
    });
  });
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

