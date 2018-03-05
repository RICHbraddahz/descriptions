import React from 'react';
import './styles/boatDescription.scss';

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
      <div>{shipDetails.capacity} guests</div>
      <div>{shipDetails.heads} heads</div>
      <div>{shipDetails.bedrooms.amount} bedrooms</div>
    </div>
    <div
      className='description'>
      {shipDetails.description}
    </div>
  </div>
)

export default BoatDescription;
