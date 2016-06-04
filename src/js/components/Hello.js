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
        React.createElement('h3', null, 'A framework without a frame'),
        React.createElement('h4', null, 'Things To Discuss:'),
        React.createElement('ol', null,
          React.createElement('li', null, 'JSX / Lack of HTML Template'),
          React.createElement('li', null, 'The "state" and "props" objects'),
          React.createElement('li', null, 'How to manage state outside of a component'),
          React.createElement('li', null, 'Into to Redux'),
          React.createElement('li', null, 'Async behavior'),
          React.createElement('li', null, 'Unit testing'),
        )
      )
    );
  }
});
