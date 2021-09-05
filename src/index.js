import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const user = {
  name: 'Rany ElHousieny',
  profile: 'https://rany.tk',
};

function website(site) {
  if (site) {
    return site;
  }
  return 'Not Available';
}
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
