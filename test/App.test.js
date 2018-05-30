import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js';
//import Search from '../lib/Search.js';

describe('App', () => {
  global.localStorage = {
    getItem: () => 'tacos'
  };

  it('should exist', () => {
    const wrapper = shallow(<App /> ) //options.disableLifecycleMethods: true)
    expect(wrapper).toBeDefined()
  })

  it('should have default state', () => {
    const wrapper = shallow(<App /> ) 
    let expected = {
      data: {},
      searchTerms: '',
      location: ''
    }

    let actual = wrapper.state();

    expect(actual).toEqual(expected);
  })
})

