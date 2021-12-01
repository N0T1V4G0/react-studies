import React from 'react';

class StateInAction extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Text in State',
    };
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        <h1>{text}</h1>
      </div>
    );
  }
}

export default StateInAction;
