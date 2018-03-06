import React from 'react';
import FaBed from 'react-icons/lib/fa/bed';
import './styles/sleepingArrangement.scss';

const SleepingArrangement = ({ bedroom, bedroomCount }) => (
  <div className="sleeping-arrangement">
    <div><FaBed/></div> 
    <div>Bedroom {bedroomCount}</div>
    <div>Sleeps {bedroom}</div>
  </div>
)

export default SleepingArrangement;
