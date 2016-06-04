import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      greeting: 'Welcome'
    };
  },
  render() {
    let { greeting } = this.state;
    let { name } = this.props;
    let style = { color: 'blue' };
    return (
      React.createElement('div', null,
        React.createElement('h1', { style }, 'Hello, World'),
        React.createElement('h2', { className: 'awesome' }, `${greeting}, to this ${name}`),
        React.createElement('p', null, `A framework without a frame`)
      )
    );
  }
});
