import React from 'react';
import Amenity from './amenity.jsx';
import './styles/amenities.scss';

const OptionalAmenities = ({ optional, revealToggle, col }) => {
  if(revealToggle) {
    return null;
  }
  return (
    <div>
      {
        Object.keys(optional).map(key => {
          if (optional[key]) {
            col === 'first' ? col = 'second': col = 'first';
            return (
              <div
                className={col}><Amenity
                amenity={key}
                hasAmenity={optional[key]}
              /></div>
            );
          }
        })
      }
    </div>
  );
}

const Amenities = ({ priority, optional, revealToggle, onClickReadMore }) => {
  let col = 'second';
  return (
    <div className="amenities">
      <h3><b className="title">Amenities</b></h3>
      <div className="priority">
        {
          Object.keys(priority).map(key => {
            if (priority[key] === null) {
              priority[key] = false;
            }
            col === 'first' ? col = 'second': col = 'first';
            return (
              <div className={col}>
                <Amenity
                  amenity={key}
                  hasAmenity={priority[key]}
                />
              </div>
            );
          })
        }
        <OptionalAmenities
          className="optional"
          optional={optional}
          revealToggle={revealToggle}
          col={col}
          />
      </div>
      <div>
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
