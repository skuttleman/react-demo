import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateActualText, updateCorrectedText } from '../actions/actions';

class TypeTastic extends Component {
  onChange(value) {
    const { dispatch } = this.props;
    dispatch(updateActualText(value));
    updateCorrectedText(dispatch, value);
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

export default connect(({ dispatch }) => ({ dispatch }))(TypeTastic);
