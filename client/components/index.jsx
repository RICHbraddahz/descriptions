import React from 'react';
import ReactDOM from 'react-dom';
import Description from './description';

import boat from '../../mockData';


ReactDOM.render(
  <Description boat={boat} />,
  document.getElementById('app')
);
