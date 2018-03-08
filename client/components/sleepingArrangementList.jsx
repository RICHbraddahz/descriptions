import React from 'react';
import SleepingArrangement from './sleepingArrangement.jsx';
import './styles/sleepingArrangementList.scss';

const SleepingArrangementList = ({ sleepingArrangement }) => {
  let bedroomCount = 0;
  return (
    <div className="sleeping-arrangement-list">
      <h3><b className="title">Sleeping Arrangemnt</b></h3>
      <div>
        {
          sleepingArrangement.map(bedroom => {
            bedroomCount++;
            return (
              <div className="sleeping-box"><SleepingArrangement
                bedroom={bedroom}
                bedroomCount={bedroomCount}
              /></div>
            );
          })
        }
        <div className="float-ender">
        </div>
      </div>
    </div>
  );
}

export default SleepingArrangementList;
