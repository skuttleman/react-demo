import React, { Component } from 'react';

export default class TypeTastic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  typeSomething(value) {
    this.setState({
      whatYouAreTyping: value
    });
  }

  render() {
    let { whatYouAreTyping } = this.state;
    let { placeholder } = this.props;
    return (
      <div>
        <input type="text" placeholder={placeholder} onChange={event => this.typeSomething(event.target.value)} />
        <p>{whatYouAreTyping || '...'}</p>
      </div>
    );
  }
}
