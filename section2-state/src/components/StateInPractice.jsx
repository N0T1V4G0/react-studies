import React, { Component } from 'react';

class StateInPractice extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      imgWidth: '',
    };
  }

  handleMouseEnter = () => {
    this.setState({
      message: '',
    });
  };

  handleFocus = (event) => {
    console.log(event);
    this.setState({
      message: 'You agree with our terms of service!',
    });
  };

  imageLoad = (event) => {
    console.dir(event.target); // console.dir mostra a representação DOM do target.
    if (event.target.width > 100) {
      console.log('Image too big!');
    }
  };

  render() {
    const { message } = this.state;

    return (
      <div>
        <input onFocus={this.handleFocus} type="text" />
        <h3 onMouseEnter={this.handleMouseEnter}>{message}</h3>
        <img
          src="https://miro.medium.com/max/1400/0*k9CL2yoHU6ELTkmi.png"
          alt=""
          onLoad={this.imageLoad}
        />
      </div>
    );
  }
}

export default StateInPractice;
