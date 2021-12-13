import React, { Component } from 'react';

class CardUnit extends Component {
  render() {
    const { course, handleSaveCourse, favorites } = this.props;
    const favoritesCopy = [...favorites];
    favoritesCopy.push(course);
    return (
      <div>
        <h1>{course.course}</h1>
        <h3>{course.instructor}</h3>
        <button
          onClick={() => {
            handleSaveCourse(favoritesCopy);
          }}>
          Save
        </button>
      </div>
    );
  }
}

export default CardUnit;
