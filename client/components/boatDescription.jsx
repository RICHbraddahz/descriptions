import React from 'react';
import './styles/boatDescription.scss';
import FaBed from 'react-icons/lib/fa/bed';
import FaGroup from 'react-icons/lib/fa/group';
import MdAirlineSeatLegroomNormal from 'react-icons/lib/md/airline-seat-legroom-normal';



const BoatDescription = ({ shipDetails, user }) => {
  const capacity = shipDetails.capacity || 1;
  const heads = shipDetails.heads || 0;
  const amount = shipDetails.bedrooms.amount || 0;

  return (
    <div className='boat-description'>
      <div className='top-banner'>
        <div className='boat'>
          <h1><b className='title'>{shipDetails.name}</b></h1>
          <h4>{shipDetails.dock}</h4>
        </div>
        <div className='owner'>
          <div><img src={user.thumbnail}/></div>
          <div>{user.name}</div>
        </div>
      </div>
      <div
        className='summary'>
        <div><FaGroup/>{capacity} guests</div>
        <div><MdAirlineSeatLegroomNormal/>{heads} heads</div>
        <div><FaBed/>{amount} bedrooms</div>
      </div>
      <div
        className='description'>
        {shipDetails.description}
      </div>
    </div>
  );
}

export default BoatDescription;
