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
      <div>
        <h1 style={style}>Hello, JSX</h1>
        <h2 className="awesome">{greeting}, to this {name}</h2>
        <h3>A framework without a frame</h3>
        <h4>Things To Discuss:</h4>
        <ol>
          <li>JSX / Lack of HTML Template</li>
          <li>The "state" and "props" objects</li>
          <li>How to manage state outside of a component</li>
          <li>Into to Redux</li>
          <li>Async behavior</li>
          <li>Unit testing</li>
        </ol>
      </div>
    );
  }
});
