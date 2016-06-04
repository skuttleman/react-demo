import React, { Component } from 'react';
import stateManager from '../stateManager';
import TypeTastic from './TypeTastic';

export default class App extends Component {
  constructor(props) {
    super(props);
    stateManager.wireUp(this);
  }

  render() {
    let { typeWhatever, typeWhateverElse } = this.state;
    let updateState = stateManager.updateState.bind(stateManager);
    return (
      <div>
        <TypeTastic
          placeholder="Type Whatever"
          property="typeWhatever"
          updateState={updateState}
        />
        <TypeTastic
          placeholder="Type Whatever Else"
          property="typeWhateverElse"
          updateState={updateState}
        />
      </div>
    );
  }
}
