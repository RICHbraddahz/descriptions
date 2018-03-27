import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import Description from './description';
import axios from 'axios';
import dummy from '../../mockData.js';

const App = ( {data} ) => (
      <Description boat={ data }/>
    );

export default App;