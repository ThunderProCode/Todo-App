import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/index.js';
import Header from './Components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


