import React from 'react';
import './styles/sleepingArrangement.scss';
import FaBed from 'react-icons/lib/fa/bed';

const SleepingArangement = ({ bedroom, bedroomCount }) => (
  <div className="sleeping-arrangement">
    <h5><FaBed/> Bedroom {bedroomCount}</h5>
    <h5>Sleeps {bedroom}</h5>
  </div>
)

export default SleepingArangement;
