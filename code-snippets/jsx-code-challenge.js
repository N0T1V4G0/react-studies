// See app here: https://codesandbox.io/s/jsx-code-challenge-forked-cxzry

//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <h1>My list</h1>
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>
  </div>,
  document.querySelector('#root'),
);
