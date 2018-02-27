import React from 'react';

const BoatDescription = ({ shipDetails, user }) => (
  <div>
    <div
      className='boat-description'>
      {shipDetails.description}
    </div>

    <div
      className='boat-summary'>
      <h1>{shipDetails.capacity} guests</h1>
      <h1>{shipDetails.heads} heads</h1>
      <h1>{shipDetails.bedrooms.bedrooms} bedrooms</h1>
    </div>

    <div
      className='boat-owner'>
      <img src={props.user.thumbnail}>
        {user.name}
    </div>
  </div>
)

export default BoatDescription;
