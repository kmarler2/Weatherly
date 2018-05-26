import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';
import apiKey from './apiKey.js';

// import Card from './Card.js';
// import Search from './Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: 'Denver',
      data: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/q/CO/Denver.json`)
    .then(response => response.json())
    .then(data => {
            this.setState({
              data: cleanData(data)
            })
          }
         )
    .catch(error => {
      console.log('Error: ', error);
       // throw new Error(error);
       //(--or--) this.setState({
       //   error: error
       // })
      })
  }

  render() {
          console.log(this.state.data);
    return (
      <div>
        <CurrentWeather
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App;