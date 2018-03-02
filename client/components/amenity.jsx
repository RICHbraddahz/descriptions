import React from 'react';

const Amenities = ({ amenity, hasAmenity }) => {
  return (
    <div className="amenity">
      <h5>{amenity + ': ' + hasAmenity} </h5>
    </div>
  );
}

export default Amenities;
