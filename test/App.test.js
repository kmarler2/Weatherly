import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search.js';
import CurrentWeather from '../lib/CurrentWeather.js';
import App from '../lib/App.js';
import CardContainer from '../lib/CardContainer.js'
import LocalStorage from './test_helpers/mockLocalStorage.js';


describe('App', () => {

  let renderedApp;

  beforeEach( () => {
    renderedApp = shallow(<App />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined()
  });

  it('should have default state', () => {
    let expected = {
      data: {}
    }
    let actual = renderedApp.state();

    expect(actual).toEqual(expected);
  })

  it('should render a CardContainer, a CurrentWeather, and a Search component when data exists in state', () => {

    renderedApp.setState({
      data: {currentCondition: 'some data',
            sevenHour:['ohh yeah']
          }
    })

    expect(renderedApp.find(Search).length).toEqual(1);
    expect(renderedApp.find(CurrentWeather).length).toEqual(1);
    expect(renderedApp.find(CardContainer).length).toEqual(1);
  })

  it('should have a storeLocation method that puts data in localStorage', () => {
    global.localStorage = new LocalStorage();
    localStorage.clear();
    const app = renderedApp.instance();
    
    app.storeLocation('Alabama');
    const actual = localStorage.getItem('location');

    expect(actual).toEqual('Alabama');
  })
})



