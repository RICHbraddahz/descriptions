import React from 'react';
import './styles/boatDescription.scss';
import FaBed from 'react-icons/lib/fa/bed';
import FaGroup from 'react-icons/lib/fa/group';
import MdAirlineSeatLegroomNormal from 'react-icons/lib/md/airline-seat-legroom-normal';



const BoatDescription = ({ shipDetails, user }) => (
  <div className='boat-description'>
    <div className='top-banner'>
      <div className='boat'>
        <h1><b>Boaty McBoatface</b></h1>
        <h4>Home Town</h4>
      </div>
      <div className='owner'>
        <div><img src={user.thumbnail}/></div>
        <div>{user.name}</div>
      </div>
    </div>
    <div
      className='summary'>
      <div><FaGroup/>{shipDetails.capacity} guests</div>
      <div><MdAirlineSeatLegroomNormal/>{shipDetails.heads} heads</div>
      <div><FaBed/>{shipDetails.bedrooms.amount} bedrooms</div>
    </div>
    <div
      className='description'>
      {shipDetails.description}
    </div>
  </div>
)

export default BoatDescription;
