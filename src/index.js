import React from 'react';
import ReactDOM from 'react-dom';

import App from './ui/components/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './data/store/store';

import './ui/styles/index.css';
import './ui/styles/Buttons.css';
import './ui/styles/Selects.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

