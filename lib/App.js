import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';

// import Card from './Card.js';
// import Search from './Search';

class App extends Component {
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