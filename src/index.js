import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const template = (
  <div>
    <h1>===========</h1>
    <h3>
      Products Microfrontend
    </h3>

    <ul>
      <li>Product1</li>
      <li>Product2</li>
      <li>Product3</li>
    </ul>
    <h1>===========</h1>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#fromjs'
  )
);
