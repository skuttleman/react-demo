import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import DisplayText from './components/DisplayText';

render(
  <App />,
  document.getElementById('app-container')
);

render(
  <DisplayText />,
  document.getElementById('display-container')
);
