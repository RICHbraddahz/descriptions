import React from 'react';
import ReactDOM from 'react-dom';
import BoatDescription from './boatDescription.jsx';
import Amenities from './amenities.jsx';
import SleepingArrangementList from './sleepingArrangementList.jsx';
import BoatRules from './boatRules.jsx';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealToggle: {
        boatDescriptionHide: true,
        amenityHide: true,
        boatRulesHide: true,
      },
    }

    this.onClickReadMore = this.onClickReadMore.bind(this);
  }

  onClickReadMore(toggled) {
    for (let key in this.state.revealToggle) {
      if (key === toggled) {
        this.state.revealToggle[key] = !this.state.revealToggle[key];
      }
    }
    this.setState({
      revealToggle: this.state.revealToggle,
    });
  }

  render() {
    return (
      <div>
        <BoatDescription
          shipDetails={this.props.boat.shipDetails}
          user={this.props.boat.user}
          revealToggle={this.state.revealToggle.boatDescriptionHide}
          onClickReadMore={this.onClickReadMore}
        />
      <Amenities
          priority={this.props.boat.shipDetails.amenities.priority}
          optional={this.props.boat.shipDetails.amenities.optional}
          revealToggle={this.state.revealToggle.amenityHide}
          onClickReadMore={this.onClickReadMore}
        />
        <SleepingArrangementList
          sleepingArrangement={this.props.boat.shipDetails.bedrooms.sleepingArrangement}
        />
      <BoatRules
          boatRules={this.props.boat.shipDetails.boatRules}
          revealToggle={this.state.revealToggle.boatRulesHide}
          onClickReadMore={this.onClickReadMore}
        />
      </div>
    );
  }
}

export default Description;
