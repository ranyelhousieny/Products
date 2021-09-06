import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const template = (
  <div>
    <h1>
      Products Microfrontend
    </h1>
    <ul>
      <li>Product1</li>
      <li>Product2</li>
      <li>Product3</li>
    </ul>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
