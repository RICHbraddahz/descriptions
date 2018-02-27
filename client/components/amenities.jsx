import React from 'react';
import Amenity from './amenity.jsx';

const Amenities = ({ priority, optional }) => (
  <div className="amenities">
    <div className="priority">
      { Object.keys(priority).map(key => (
        <div><Amenity
          amenity={key}
          hasAmenity={priority[key]}
        /></div>));
      }
    </div>
    <div className="optional">
      { Object.keys(optional).map(key => (
        <div><Amenity
          amenity={key}
          hasAmenity={optional[key]}
        /></div>));
      }
    </div>
  </div>
)

export default Amenities;
