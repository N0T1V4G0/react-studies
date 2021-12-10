import React, { Component } from 'react';

class CardUnit extends Component {
  render() {
    const { course, handleSaveCourse, favorites, key } = this.props;
    console.log(key);
    return (
      <div>
        <h1>{course.course}</h1>
        <h3>{course.instructor}</h3>
        <button
          onClick={() => {
            handleSaveCourse(key);
          }}>
          Save
        </button>
      </div>
    );
  }
}

export default CardUnit;
