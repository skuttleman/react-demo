import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Type from './components/TypeTastic';
import Diff from './components/Differences';
import TextBody from './components/TextBody';
import reducers from './reducers/rootReducers';
import {
  actualConnector, correctedConnector, differencesConnector, typeConnector
} from './helpers/connectors'

const store = createStore(reducers);
const TypeTastic = Type(typeConnector);
const Differences = Diff(differencesConnector);
const ActualBody = TextBody(actualConnector);
const CorrectedBody = TextBody(correctedConnector);

render(
  <Provider store={store}>
    <TypeTastic />
  </Provider>,
  document.getElementById('app-container')
);

render(
  <Provider store={store}>
    <ActualBody />
  </Provider>,
  document.getElementById('actual-text')
);

render(
  <Provider store={store}>
    <CorrectedBody />
  </Provider>,
  document.getElementById('corrected-text')
);

render(
  <Provider store={store}>
    <Differences />
  </Provider>,
  document.getElementById('differences')
);
