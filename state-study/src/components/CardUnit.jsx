import React, { Component } from 'react';

class CardUnit extends Component {
  render() {
    const { course } = this.props;
    return (
      <div>
        <h1>{course.course}</h1>
        <h3>{course.instructor}</h3>
      </div>
    );
  }
}

export default CardUnit;
