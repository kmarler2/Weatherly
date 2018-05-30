import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather.js';
import cleanData from './data.js';
import apiKey from './apiKey.js';
import SevenHour from './SevenHour.js'
import Card from './Card.js';
import TenDay from './TenDay.js'
import Search from './Search.js';
import Welcome from './Welcome.js'

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

  componentDidMount() {
    let location = JSON.parse(localStorage.getItem('location')) || ''
    console.log(location)
    if (location) {
      this.setState({
        location: location
      })
      this.fetchData(location.split(',')[0], location.split(',')[1])
    }
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
      //this.error();
      console.log('Error: ', error);
      })
  }

  // error() {
  //   console.log("error function ran")
  //   return (
  //     <div className="error">
  //       <h2>Oops! Something went wrong with your search...</h2>
  //       <h4>please enter a City and State (abbreviation) or a valid zipcode.</h4>
  //       <Search onChange={this.updateSearchValue} 
  //         fetchData={this.fetchData} 
  //         storeLocation={this.storeLocation} />
  //     </div>
  //   )
  // }

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
        !this.state.location && 
        <Welcome />
      }
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