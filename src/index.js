import React from 'react';  // core react library
import ReactDOM from 'react-dom'; // dom rendering package

// Custom Imports
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Rendering App Component inside div with id root
ReactDOM.render(
  <React.StrictMode >
    <App />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
