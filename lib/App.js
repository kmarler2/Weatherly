import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import data from './data.js';

// import Card from './Card.js';
// import Search from './Search';

class App extends Component {
  render(){
    return (
      <div>
        <CurrentWeather
          locationName='Idaho'
          currentCondition='dry'
          currentDay='Tuesday'
          currentTemp='80'
        />
      </div>

      )
  }
}












export default App;