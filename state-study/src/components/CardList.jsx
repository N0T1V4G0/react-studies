import React, { Component } from 'react';
import CardUnit from './CardUnit';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
    };
  }

  handleSaveCourse = (i) => {
    console.log(i);
    const copyFavorites = this.state.favorites;
    copyFavorites.push(i);
    this.setState({
      favorites: copyFavorites,
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
