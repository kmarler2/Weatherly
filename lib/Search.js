import React, { Component } from 'react';
//import suggestionTrie from './Trie.js';
import './css/Welcome.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      suggestions: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.defineCityAndState = this.defineCityAndState.bind(this);
  }
  handleChange(e) {
    let val = 'de' // e.target.value;
    //let newSuggestion = suggestionTrie.suggest(val);
    this.setState({
      value: val,
      suggestions: newSuggestion
    })
    //console.log(this.state.suggestions)
    this.props.updateSearchValue(val);
  }
  defineCityAndState(){
    let val = this.state.value;
    let city = val.split(',')[0];
    let state = val.split(',')[1];
    this.props.fetchData(city,state);
    this.props.storeLocation();
  }
  render(){
    return (
      <div className='searchComponent'>
        <input type='text' className='title-input' onChange={this.handleChange} />
        <button className='title-btn' onClick={this.defineCityAndState}> Search </button>
      </div> 
    )
  }
}

export default Search;