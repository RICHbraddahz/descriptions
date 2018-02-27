import React from 'react';
import ReactDOM from 'react-dom';
import BoatDescription from './boatDescription.jsx';
import Amenity from './amenity.jsx';
import dummy from './../../mockData.js';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boat: dummy[0];
    }
  }

  render() {
    return {
      <div>
        <BoatDescription
          shipDetails={this.state.boat.shipDetails}
          user={this.state.boat.user}
        />
        <Amenity
          priority={this.state.boat.shipDetails.amenities.priority}
          optional={this.state.boat.shipDetails.amenities.optional}
        />
      </div>
    }
  }
}

export default Description;
