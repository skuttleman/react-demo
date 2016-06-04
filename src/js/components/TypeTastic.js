import React, { Component } from 'react';
import stateManager from '../stateManager';

export default class TypeTastic extends Component {
  onChange(value) {
    let { property } = this.props;
    stateManager.updateState(property, value);
  }

  render() {
    let { placeholder } = this.props;
    return (
      <input
        type="text"
        placeholder={placeholder}
        onChange={event => this.onChange(event.target.value)}
      />
    );
  }
}
