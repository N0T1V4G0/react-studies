import React, { Component } from 'react';
import CardUnit from './CardUnit';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }
  render() {
    const { courseData } = this.props;
    const { favorites } = this.state;
    console.log(courseData);
    return (
      <div>
        {courseData.map((course) => (
          <CardUnit course={course} />
        ))}
      </div>
    );
  }
}

export default CardList;
