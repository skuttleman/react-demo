import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import DisplayText from './components/DisplayText';
import { Provider } from 'react-redux';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
);

render(
  <Provider store={store}>
    <DisplayText />
  </Provider>,
  document.getElementById('display-container')
);
