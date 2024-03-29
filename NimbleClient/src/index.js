import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import AutoQueue from './processes/ProcessQueue';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.processQueue = new AutoQueue();

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter basename={"/"}>
    <App />
  </BrowserRouter>,
  rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
