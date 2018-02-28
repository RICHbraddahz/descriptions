import React from 'react';
import SleepingArangement from './sleepingArangement.jsx';

const SleepingArangementList = ({ sleepingArangement }) => (
  <div className="sleeping-arrangement-list">
    Sleeping Arrangemnt
    <div>
      {
        let bedroomCount = 0;
        sleepingArangement.map(bedroom => {
          bedroomCount++;
          return <div><SleepingArangement
            bedroom={bedroom}
            bedroomCount={bedroomCount}
          /></div>));
        }
      }
    </div>
  </div>
)

export default SleepingArangementList;
