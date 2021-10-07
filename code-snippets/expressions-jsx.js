// See app here: https://codesandbox.io/s/javascript-expressions-in-jsx-forked-7sn1o

import React from 'react';
import ReactDOM from 'react-dom';

const fName = 'Lucas';
const lName = 'Barbosa';
const luckyNumber = 9;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}
    </h1>
    <p>My lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById('root'),
);
