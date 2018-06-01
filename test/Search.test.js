import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js'

describe('Search', () => {
  let renderedSearch;

  beforeEach( ()=> {
    renderedSearch = shallow(<Search />)
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
    const mockEvent = {target: {value: 'sweet!'}};

    let search = renderedSearch.instance();
    search.handleChange(mockEvent);

    expect(search.state.value).toEqual('sweet!');
  })
})