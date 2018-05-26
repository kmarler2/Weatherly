import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';
import apiKey from './apiKey.js';
import SevenHour from './SevenHour.js'
import Card from './Card.js';
// import Search from './Search';

class App extends Component {
  constructor() {
    super()
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
      })
  }

  render() {
    console.log(this.state.data.sevenHour)
    return (
      <div>
        <CurrentWeather
          data={this.state.data}
        />
        <SevenHour 
          hours={this.state.data.sevenHour} 
        />
      </div>
    )
  }
}

export default App;