import React from 'react';
import BoatRule from './boatRule.jsx';

const BoatRules = ({ boatRules, revealToggle, onClickReadMore }) => (
  <div className="boat-rules">
    <div>
      {
        boatRules.map(boatRule => {
          if (boatRules[0] || revealToggle) {
            return (
              <div><BoatRule
                boatRule={boatRule}
              /></div>;
            );
          }
        });
      }
    </div>
    <div>
      <h5
        className="read-more"
        onClick={this.onClickReadMore('boatRulesHide')}
        >{this.state.revealToggle ? 'Hide' : 'Read More'}
      </h5>
    </div>
  </div>
)

export default BoatRules;
