import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';
import Description from './description';
import axios from 'axios';
import dummy from '../../mockData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : dummy[0],
    }
  }
  componentDidMount() {
    // if (window.location.pathname !== '/') {
    this.fetchInfo();
    // }
  }
  fetchInfo () {
      let id = this.props.id || parseInt(window.location.pathname.split('/')[2], 10);
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3001/amenities/${id}/amenities`)
          .then(({ data }) => this.setState({ data: data }))
          .then(()=> resolve())
          .catch((error) => {
            console.log('error', error)
          });
      });
    }
  render () {
    return (
      <Description boat={this.state.data}/>
    )
  }
}

// ReactDOM.render(<App/>, document.getElementById('app'));
window.Amenities = App;
