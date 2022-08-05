import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import App from './App';
import { store } from 'stores';
import { Provider } from 'react-redux';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>,
  rootElement
);