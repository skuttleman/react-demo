import React, { Component } from 'react';
import { render } from 'react-dom';
import TypeTastic from './components/TypeTastic';
import DisplayText from './components/DisplayText';

render(
  <div>
    <TypeTastic placeholder="Type Whatever" property="typeWhatever" />
    <TypeTastic placeholder="Type Whatever Else" property="typeWhateverElse" />
  </div>,
  document.getElementById('app-container')
);

render(
  <DisplayText />,
  document.getElementById('display-container')
);
