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
       fetch('http://api.wunderground.com/api/'+ApiKey+'/conditions/forecast10day/q/CO/Denver.json')
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
          console.log(this.state.data);
  }

  render() {
    <p></p>
    return (
      <div>
        <CurrentWeather
          locationName={cleanData.locationName}
          currentCondition={cleanData.currentCondition}
          currentDay={cleanData.currentDay}
          currentTemp={cleanData.currentTemp}
          currentHigh={cleanData.currentHigh}
          currentLow={cleanData.currentLow}
          currentSummary={cleanData.currentSummary}
        />
      </div>
    )
  }
}

export default App;