import React from 'react';
import ReactDOM from 'react-dom';
import BoatDescription from './boatDescription.jsx'
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
      </div>
    }
  }
}

export default Description;
