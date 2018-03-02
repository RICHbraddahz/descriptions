import React from 'react';
import ReactDOM from 'react-dom';
import BoatDescription from './boatDescription.jsx';
import Amenity from './amenity.jsx';
import SleepingArrangementList from './sleepingArrangementList.jsx';
import BoatRules from './boatRules.jsx';
import dummy from './../../mockData.js';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boat: props.boat[0],
      revealToggle: {
        boatDescriptionHide: true,
        amenityHide: true,
        boatRulesHide: false,
      },
    }

    this.onClickReadMore = this.onClickReadMore.bind(this);
  }

  onClickReadMore(toggled) {
    for (let key in revealToggle) {
      if (key === toggled) {
        revealToggle[key] = !revealToggle[key];
      }
    }
    setState({
      revealToggle: revealToggle,
    });
  }

  render() {
    return (
      <div>
        <BoatDescription
          shipDetails={this.state.boat.shipDetails}
          user={this.state.boat.user}
          revealToggle={this.state.revealToggle.boatDescriptionHide}
          onClickReadMore={this.onClickReadMore}
        />
        <Amenity
          priority={this.state.boat.shipDetails.amenities.priority}
          optional={this.state.boat.shipDetails.amenities.optional}
          revealToggle={this.state.revealToggle.amenityHide}
          onClickReadMore={this.onClickReadMore}
        />
        <SleepingArrangementList
          sleepingArrangement={this.state.boat.shipDetails.bedrooms.sleepingArangement}
        />
      <BoatRules
          boatRules={this.state.boat.shipDetails.boatRules}
          revealToggle={this.state.revealToggle.boatRulesHide}
          onClickReadMore={this.onClickReadMore}
        />
      </div>
    );
  }
}

export default Description;
