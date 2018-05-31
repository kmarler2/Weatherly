import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';
import apiKey from './apiKey.js';
import SevenHour from './SevenHour.js';
import TenDay from './TenDay.js';
import Search from './Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      searchTerms: ''
    };
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.storeLocation = this.storeLocation.bind(this);
  }

  componentDidMount() {
    let location = JSON.parse(localStorage.getItem('location'));

    if (location) {
      this.setState({
        searchTerms: location
      });
      this.fetchData(location.split(',')[0], location.split(',')[1]);
    }
  }

  fetchData(city, state) {
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
        location: this.state.searchTerms
        }, this.storeLocation());
    })
    .catch(error => {
      alert('Could not find location. Please enter (City, STATE) or a valid zipcode');
      console.log('Error: ', error);
      });
  }

  updateSearchValue(terms) {
    if(terms) {
      this.setState({
        searchTerms: terms
      })
    }
  }

  storeLocation() {
    localStorage.setItem('location',JSON.stringify(this.state.searchTerms))
  }

  render() {
    return (
      <div>
      {
        <Search 
        updateSearchValue={this.updateSearchValue} 
        fetchData={this.fetchData} 
        storeLocation={this.storeLocation} />
      }
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