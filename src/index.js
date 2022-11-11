import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppLuckyGrid from './LuckyGrid';
import reportWebVitals from './reportWebVitals';
import background from "./asserts/bg.png";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode style={{display: 'flex', width: '100ww', alignItems: 'center', justifyContent: 'center'}}>
    <AppLuckyGrid /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
