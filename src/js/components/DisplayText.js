import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayText extends Component {
  render() {
    let { typeWhatever, typeWhateverElse } = this.props;
    return (
      <div>
        <p>Type Whatever:</p>
        <p>{typeWhatever || '...'}</p>
        <p>Type Whatever Else:</p>
        <p>{typeWhateverElse || '...'}</p>
      </div>
    );
  }
}

export default connect(({ typeWhatever, typeWhateverElse }) => ({ typeWhatever, typeWhateverElse }))(DisplayText);
