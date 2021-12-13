import React, { Component } from 'react';
import CardUnit from './CardUnit';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }

  handleSaveCourse = (arr) => {
    this.setState({
      favorites: arr,
    });
  };

  render() {
    const { courseData } = this.props;
    const { favorites } = this.state;
    console.log(courseData);
    const courseArr = courseData.map((course, i) => (
      <CardUnit
        key={i}
        course={course}
        favorites={favorites}
        handleSaveCourse={this.handleSaveCourse}
      />
    ));

    return <div>{courseArr}</div>;
  }
}

export default CardList;
