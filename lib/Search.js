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
    let val = e.target.value;
    this.setState({
      value: val,
    })
  }
  defineCityAndState(){
    let val = this.state.value;
    let city = val.split(',')[0];
    let state = val.split(',')[1];
    this.props.fetchData(city,state);
    this.setState({
      welcome: false
    });
  }
  render(){
    const welcome = () => this.state.welcome ? <h2 className='Welcome'>Welcome to Weatherly! Enter a city and state or a zipcode.</h2>
                                              : null;
    return (
      <div className='searchComponent'>
       {welcome()}
        <input type='text' className='title-input' onChange={this.handleChange} />
        <button className='title-btn' onClick={this.defineCityAndState}> Search </button>
      </div> 
    )
  }
}

module.exports = Search;