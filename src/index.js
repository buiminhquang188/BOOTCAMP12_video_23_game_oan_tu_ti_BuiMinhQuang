import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Import jQuery trước
import 'jquery/dist/jquery.min.js';
// Import popper vào
import 'popper.js/dist/popper.min.js';
// Import Bootstrap
import 'bootstrap/dist/js/bootstrap';
// Import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
