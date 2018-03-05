import React from 'react';
import Amenity from './amenity.jsx';

const OptionalAmenities = ({ optional, revealToggle }) => {
  if(revealToggle) {
    return null;
  }
  return (
    <div>
      {
        Object.keys(optional).map(key => {
          if (optional[key]) {
            return <div><Amenity
              amenity={key}
              hasAmenity={optional[key]}
            /></div>
          }
        })
      }
    </div>
  );
}

const Amenities = ({ priority, optional, revealToggle, onClickReadMore }) => {
  return (
    <div className="amenities">
      <h3><b>Amenities</b></h3>
      <div className="priority">
        {
          Object.keys(priority).map(key => {
            return (
              <div>
                <Amenity
                  amenity={key}
                  hasAmenity={priority[key]}
                />
              </div>
            );
          })
        }
      </div>
      <div>
        <OptionalAmenities
          className="optional"
          optional={optional}
          revealToggle={revealToggle}
        />
      </div>
      <div>
        <h5
          className="read-more"
          onClick={() => { onClickReadMore('amenityHide'); }}
          >{!revealToggle ? 'Hide' : 'Read More'}
        </h5>
      </div>
    </div>
  );
}

export default Amenities;
