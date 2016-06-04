import React, { Component } from 'react';

export default class TypeTastic extends Component {
  onChange(value) {
    let { dispatch, type } = this.props;
    dispatch({ type, value });
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
