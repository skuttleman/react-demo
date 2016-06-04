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
        <p>A framework without a frame</p>
      </div>
    );
  }
});
