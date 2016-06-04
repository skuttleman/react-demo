import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions';

export class TypeTastic extends Component {
  onChange(value) {
    const { dispatch } = this.props;
    dispatch(actions.updateActualText(value));
    actions.updateCorrectedText(dispatch, value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Type Something"
        onChange={event => this.onChange(event.target.value)}
      />
    );
  }
}

export default connector => connect(connector)(TypeTastic);
