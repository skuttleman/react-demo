import React from 'react';
import { render } from 'react-dom';
import TypeTastic from './components/TypeTastic';

render(
  <div>
    <TypeTastic placeholder="Type Whatever" />
    <TypeTastic placeholder="Type Whatever Else" />
  </div>,
  document.getElementById('app-container')
);
