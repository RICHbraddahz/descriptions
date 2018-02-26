import React from 'react';
import ReactDOM from 'react-dom';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boat:
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
