import React from 'react';
import ReactDOM from 'react-dom';
import Description from './description';
import axios from 'axios';

const getAmenityId = (path) => {
  const parts = path.split('/');
  if (parts[1] === 'amenities') {
    const id = parseInt(parts[2], 10);
    if (typeof id === 'number' && id >= 0 && id < 200) {
      return id;
    }
  }
  return null;
};

function renderAmenities(amenities) {
  const url = `/amenities/${amenities}`;
  axios.get(url)
    .then(({ data }) => {
      ReactDOM.render(
        <Description boat={data} />,
        document.getElementById('app'),
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

const amenityId = getAmenityId(window.location.pathname) ||
                  Math.floor(Math.random() * 200);
renderAmenities(amenityId);
