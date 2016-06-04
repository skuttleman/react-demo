import React, { Component } from 'react';
import TypeTastic from './TypeTastic';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    let { dispatch, countDispatches } = this.props;
    return (
      <div>
        <p>Number of Actions Dispatched: {countDispatches}</p>
        <TypeTastic
          placeholder="Type Whatever"
          dispatch={dispatch}
          type="TYPE_WHATEVER"
        />
        <TypeTastic
          placeholder="Type Whatever Else"
          dispatch={dispatch}
          type="TYPE_WHATEVER_ELSE"
        />
      </div>
    );
  }
}

export default connect(({ dispatch, countDispatches }) => ({ dispatch, countDispatches }))(App);
