import React from 'react';
import { render } from 'react-dom';
import Hello from './components/Hello';
import HelloJSX from './components/HelloJSX';

render(
  React.createElement(Hello, { name: 'React tutorial' }),
  document.getElementById('app-container')
);

// render(
//   <HelloJSX name="React tutorial" />,
//   document.getElementById('app-container')
// );
