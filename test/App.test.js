import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';
import App from '../lib/App.js';
import CardContainer from '../lib/CardContainer.js'
import Card from '../lib/Card.js';

describe('App', () => {
  global.localStorage = {
    getItem: () => 'tacos'
  };

  it('should exist', () => {
    const wrapper = shallow(<App /> ) //options.disableLifecycleMethods: true)
    expect(wrapper).toBeDefined()
  })

  it('should have default state', () => {
    const wrapper = shallow(<App /> ); 
    let expected = {
      data: {}
    }
    let actual = wrapper.state();

    expect(actual).toEqual(expected);
  })
})

describe('Search', () => {
  it('should exist', () => {
    const wrapper = shallow(<Search /> ) //options.disableLifecycleMethods: true)
    expect(wrapper).toBeDefined()
  })

  it('should have a default state', () => {
    const wrapper = shallow(<Search /> );
    let expected = {
      value: '',
      suggestions: [],
      welcome: true
    }
    let actual = wrapper.state();
    expect(actual).toEqual(expected);
  })
})

describe('CardContainer',() => {
  it('should render Card components', () => {
    const pops = [{},{},{}]
    const wrapper = shallow(<CardContainer hours={ pops } />);

    let actual = wrapper.find(Card).length;
    expect(actual).toBe(3);
  })
})

describe('Card', () => {
  it('it should return elements depending on which units it takes as arguments', () => {
    let hour = {timeUnit:{hour: 12, temp: 32, icon: 'url'}}
    let day = {weekday: 'saturday', high: 66, low: 20}

    const wrapper = shallow(
        <Card timeUnit={hour} />
      )

    let expected =
    <div className="card">
      <div className="hourCard">
        <h3 className="card-hour">12</h3>
        <h4 className="card-temp">32</h4>
        <img src='url'/>
      </div>
    </div>
   
    
    expect(wrapper.containsMatchingElement(<h3 className="card-hour">12</h3>)).to.equal(true);
  })
})

