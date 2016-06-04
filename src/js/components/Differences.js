import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Differences extends Component {
  calculateDifferences() {
    let { actualText: phrase1, correctedText: phrase2 } = this.props;
    let [list1, list2] = [phrase1, phrase2].map(phrase => phrase.split(/\s+/));
    return list1.reduce((count, word, i) => count + Number(list2[i] !== word), 0);
  }

  render() {
    return (
      <div>
        <h1>Number of Differences:</h1>
        <h2>{this.calculateDifferences()}</h2>
      </div>
    );
  }
}

export default connector => connect(connector)(Differences);
