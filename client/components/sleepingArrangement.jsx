import React from 'react';

const SleepingArangement = ({ bedroom, bedroomCount }) => (
  <div className="sleeping-arrangement">
    <h5>Bedroom {bedroomCount}</h5>
    <h5>{bedroom}</h5>
  </div>
)

export default SleepingArangement;
