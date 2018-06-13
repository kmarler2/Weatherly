import React, { Component } from 'react';
import './css/Welcome.css';
import locationData from './locationData.js';
import Trie from '@dsdunn/complete-me';

const locationTrie = new Trie();
locationTrie.populate(locationData);

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      suggestions: [],
      welcome: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.defineCityAndState = this.defineCityAndState.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    let val = e.target.value;
    let suggestions = locationTrie.suggest(val);
    this.setState({
      value: val,
      suggestions: suggestions
    })
  }
  defineCityAndState(e){
    e.preventDefault();
    let val = this.state.value;
    let city = val.split(',')[0];
    let state = val.split(',')[1];
    this.props.fetchData(city,state);
    this.setState({
      welcome: false
    });
  }
  render(){
    const welcome = () => this.state.welcome ? <h2 className='Welcome'>Welcome to Weatherly!</h2>
                                              : null;
    return (
      <form className='searchComponent' onSubmit={this.defineCityAndState}>
       {welcome()}
        <input type='text' list="locations" placeholder='Enter a city and state or zipcode' className='title-input' onChange={this.handleChange} />
          <datalist id="locations">
            {
              this.state.suggestions.map((loc, i) => {
                return (
                  <option key={i}className='suggestion'>{loc}</option>
                  )
              })
            }
          </datalist>
        <button className='title-btn' > Search </button>
      </form> 
    )
  }
}

module.exports = Search;