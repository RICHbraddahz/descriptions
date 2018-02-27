import React from 'react';

const Amenities = ({ amenity, hasAmenity }) => (
  <div className="amenity">
    <h5>{amenity}:{hasAmenity}</h5>
  </div>
)

export default Amenities;
