import React, { Component } from 'react';
import stateManager from '../stateManager';

export default class DisplayText extends Component {
  constructor(props) {
    super(props);
    stateManager.wireUp(this);
  }

  render() {
    let { typeWhatever, typeWhateverElse } = this.state;
    return (
      <div>
        <p>Type Whatever:</p>
        <p>{typeWhatever || '...'}</p>
        <p>Type Whatever Else:</p>
        <p>{typeWhateverElse || '...'}</p>
      </div>
    );
  }
}
