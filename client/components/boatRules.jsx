import React from 'react';
import BoatRule from './boatRule.jsx';

const BoatRules = ( {boatRules} ) => (
  <div className="boat-rules">
    <div>
      {
        boatRules.map(boatRule => (
          <div><BoatRule
            boatRule={boatRule}
          /></div>));
        )
      }
    </div>
  </div>
)

export default BoatRules;
