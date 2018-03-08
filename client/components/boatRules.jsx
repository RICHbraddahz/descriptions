import React from 'react';
import BoatRule from './boatRule.jsx';
import './styles/boatRules.scss';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';

const ShowMoreBoatRules = ({ boatRules, revealToggle }) => {
  if (revealToggle) {
    return (
      <div>
        <BoatRule boatRule={boatRules[0]}/>
      </div>
    );
  }
  return (
    <div>
      {
        boatRules.map(boatRule => {
            return (
              <div>
                <BoatRule boatRule={boatRule}/>
              </div>
            );
        })
      }
    </div>
  );
}
const BoatRules = ({ boatRules, revealToggle, onClickReadMore }) => {
  return (
    <div className="boat-rules">
      <h3><b className="title">Boat Rules</b></h3>
      <ShowMoreBoatRules
        boatRules={boatRules}
        revealToggle={revealToggle}
      />
      <div>
        <h5
          className="read-more"
          onClick={() => { onClickReadMore('boatRulesHide'); }}
          >{!revealToggle ? 'Hide': 'Read More'}
        </h5>
      </div>
    </div>
  );
}

export default BoatRules;
