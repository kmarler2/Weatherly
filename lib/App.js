import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';
import apiKey from './apiKey.js';
import SevenHour from './SevenHour.js'
import Card from './Card.js';
import TenDay from './TenDay.js'
import Search from './Search.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      searchTerms: '',
      location: ''
    };
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.storeLocation = this.storeLocation.bind(this);
  }

  compenentDidMount() {
    this.setState({
      location: JSON.parse(localStorage.getItem(location)) || ''
    })
  }

  fetchData(city,state) {
    let url;

    if(typeof city === 'number') {
      url = `http://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/q/${city}.json`
    } else {
      url = `http://api.wunderground.com/api/${apiKey}/conditions/forecast10day/hourly/q/${state}/${city}.json`
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
            this.setState({
              data: cleanData(data),
              location: this.state.searchTerms
            },this.storeLocation())
          }
         )
    .catch(error => {
      alert('Could not find location. Please enter (City, STATE) or a valid zipcode')
      console.log('Error: ', error);
      })
  }

  updateSearchValue(terms) {
    this.setState({
      searchTerms: terms
    },function() {console.log(this.state)})
  }

  storeLocation() {
    console.log('store')
    localStorage.setItem('location',JSON.stringify(this.state.searchTerms))
  }

  render() {
    return (
      <div>
      {
        <Search 
        onChange={this.updateSearchValue} 
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