import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';
import apiKey from './apiKey.js';
import SevenHour from './SevenHour.js'
import Card from './Card.js';
import TenDay from './TenDay.js'
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
    return (
      <div>
        {
          this.state.data.currentCondition && 
          <CurrentWeather
          data={this.state.data}
        />
        }
        {
          this.state.data.sevenHour &&
          <SevenHour 
            hours={this.state.data.sevenHour} 
          />
        }
        {
          this.state.data.tenDay &&
          <TenDay
            days={this.state.data.tenDay}
          />
        }
      </div>
    )
  }
}

export default App;