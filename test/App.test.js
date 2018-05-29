import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App.js'

describe('App', () => {
  global.localStorage = {
    getItem: () => 'tacos'
  };

  it('should exist', () => {
    const wrapper = shallow(<App />, ) //options.disableLifecycleMethods: true)
    expect(wrapper).toBeDefined()
  })

  it('should take a location', () => {
    
  })

})

