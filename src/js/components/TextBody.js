import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateActualText, updateCorrectedText } from '../actions/actions';

class TextBody extends Component {
  render() {
    let { title, text } = this.props;
    return (
      <div>
        <h1>{title}:</h1>
        <p>{text}</p>
      </div>
    );
  }
}

export default connector => connect(connector)(TextBody);
