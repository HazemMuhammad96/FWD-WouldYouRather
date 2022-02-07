import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from "react-router-dom";
import store from './data/store/store';

import './ui/styles/index.css';
import './ui/styles/Buttons.css';
import './ui/styles/Selects.css';
import './ui/styles/Inputs.css';

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

