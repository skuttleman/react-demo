import React, { Component } from 'react';

export default class TypeTastic extends Component {
  onChange(value) {
    let { property, updateState } = this.props;
    updateState(property, value);
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
