import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {  HashRouter } from "react-router-dom";
import store from './data/store/store';

import './assets/styles/Colors.css';
import './assets/styles/Dimens.css';
import './assets/styles/index.css';
import './assets/styles/Buttons.css';
import './assets/styles/Selects.css';
import './assets/styles/Inputs.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

