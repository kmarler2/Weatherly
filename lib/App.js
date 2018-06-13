import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';
import apiKey from './apiKey.js';
import CardContainer from './CardContainer.js';
import Search from './Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
    this.fetchData = this.fetchData.bind(this);
    this.storeLocation = this.storeLocation.bind(this);
  }

  componentDidMount() {
    let location = localStorage.getItem('location');
    if (location) {
      this.fetchData(location.split(',')[0], location.split(',')[1]);
    }
  }

  fetchData(city, state) {
    //console.log(city, state)
    let url;

    if (typeof city === 'number') {
      url = `http://api.wunderground.com/api/${apiKey}
      /conditions/forecast10day/hourly/q/${city}.json`;
    } else {
      url = `http://api.wunderground.com/api/${apiKey}
      /conditions/forecast10day/hourly/q/${state}/${city}.json`;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({
        data: cleanData(data),
        }, this.storeLocation(city + ', ' + state));
    })
    .catch(error => {
      alert('Could not find location. Please enter (City, STATE) or a valid zipcode');
      console.log('Error: ', error);
      });
  }

  storeLocation(location) {
    localStorage.setItem('location',location)
  }

  currentCondition() {
    return this.state.data.currentCondition 
      ? <CurrentWeather data={ this.state.data } />
      : null;
  }
  hoursAndDays() {
    return this.state.data.sevenHour 
      ? <CardContainer hours={ this.state.data.sevenHour }
                       days={this.state.data.tenDay}/>
      : null;
  }

  render() {
    return (
      <div className='entire'>
        {
          <Search 
          fetchData={this.fetchData} 
          storeLocation={this.storeLocation} />
        }
        {this.currentCondition()}
        {this.hoursAndDays()}
      </div>
    )
  }
}

export default App;