import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import HelloJSX from './components/HelloJSX';

render(
  React.createElement(HelloJSX, { name: 'React tutorial' }),
  document.getElementById('app-container')
);
