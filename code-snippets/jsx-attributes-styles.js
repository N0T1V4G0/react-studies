// See app here: https://codesandbox.io/s/jsx-attributes-and-styling-forked-975tk

import React from 'react';
import ReactDOM from 'react-dom';

const randomImg = 'https://picsum.photos/100';
ReactDOM.render(
  <div>
    <h1
      className="heading hello there"
      contentEditable="true"
      spellCheck="false"
    >
      My Favourite Foods
    </h1>
    <ul>
      <img src={randomImg + '?grayscale'} alt="random" />
      <img
        className="food-img"
        alt="food"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg/1200px-Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg"
      ></img>
      <img
        alt="food"
        className="food-img"
        src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F453291.jpg&w=380&h=254&c=sc&poi=face&q=85"
      ></img>
      <img
        alt="food"
        className="food-img"
        src="https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg"
      ></img>
    </ul>
  </div>,
  document.getElementById('root'),
);
