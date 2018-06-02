import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js'

describe('Search', () => {
  let renderedSearch;

  beforeEach( ()=> {
    renderedSearch = shallow(<Search fetchData={() => 'burritos'}/>)
  })

  it('should exist', () => {
    expect(renderedSearch).toBeDefined()
  })

  it('should have a default state', () => {
    let expected = {
      value: '',
      suggestions: [],
      welcome: true
    }
    let actual = renderedSearch.state();
    expect(actual).toEqual(expected);
  })

  it('should render an search container, an input element and a button element', () => {
    expect(renderedSearch.find('.searchComponent').length).toBe(1);
    expect(renderedSearch.find('.title-input').length).toBe(1);
    expect(renderedSearch.find('.title-btn').length).toBe(1);
  })

  it('should have a handleChange method that updates the its state', () => {
    const mockFunction = () => 'beans';
    const mockEvent = {target: {value: 'sweet!'},
                      preventDefault: mockFunction };
    const search = renderedSearch.instance();
    search.handleChange(mockEvent);

    expect(search.state.value).toEqual('sweet!');
  })

  it('should listen for submits on the form to invoke defineCityAndState', () => {
    const mockFunction = () => 'beans';
    const mockEvent = {target: {value: 'sweet!'},
                      preventDefault: mockFunction };

    renderedSearch.find('form').simulate('submit', mockEvent);
    expect(renderedSearch.state().welcome).toEqual(false);
  })

  it('should listen for changes on the input to invoke handleChange', () => {
    const mockFunction = () => 'beans';
    const mockEvent = {target: {value: 'sweet!'},
                      preventDefault: mockFunction };

    renderedSearch.find('input').simulate('change', mockEvent);
    expect(renderedSearch.state().value).toEqual('sweet!');
  })

  it('should give suggestions', () => {
    const mockFunction = () => 'beans';
    const mockEvent = {target: {value: 'den'},
                      preventDefault: mockFunction };
    
    renderedSearch.find('input').simulate('change', mockEvent);
    console.log(renderedSearch.state().suggestions)
    expect(renderedSearch.state().suggestions.length).toEqual(2);
  })
})





