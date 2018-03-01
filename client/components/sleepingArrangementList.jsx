import React from 'react';
import SleepingArrangement from './sleepingArrangement.jsx';

const SleepingArrangementList = ({ sleepingArrangement }) => {
  let bedroomCount = 0;
  return (
    <div className="sleeping-arrangement-list">
      Sleeping Arrangemnt
      <div>
        {
          sleepingArrangement.map(bedroom => {
            bedroomCount++;
            return (<div><SleepingArrangement
              bedroom={bedroom}
              bedroomCount={bedroomCount}
            /></div>);
          })
        }
      </div>
    </div>
  );
}

export default SleepingArrangementList;
