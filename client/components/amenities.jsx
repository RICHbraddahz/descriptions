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
        });
      }
    </div>
  );
}

const Amenities = ({ priority, optional, revealToggle, onClickReadMore }) => (
  <div className="amenities">
    <div className="priority">
      {
        Object.keys(priority).map(key => (
          <div><Amenity
            amenity={key}
            hasAmenity={priority[key]}
          /></div>
        ));
      }
    </div>
    <div>
      <OptionalAmenities
        className="optional"
        revealToggle={revealToggle}/>
      <h5
        className="read-more"
        onClick={this.onClickReadMore('amenityHide')}
        >{this.state.revealToggle ? 'Hide' : 'Read More'}
      </h5>
    </div>
  </div>
)

export default Amenities;
