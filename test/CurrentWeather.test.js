import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather.js';
import cleanData from '../lib/data.js';
import data from './test_helpers/mockData.js'

describe('CurrentWeather', () => {
  it('should exist', () => {
    expect(true).toEqual(true);
  })
  it('should render one currentDiv <div> and 7 currentWeather <p> tags', () => {

    const dataObj = cleanData(data);
    let renderedCurrentWeather = shallow(<CurrentWeather data={dataObj} />);

    expect(renderedCurrentWeather.find('.currentDiv').length).toEqual(1);
    expect(renderedCurrentWeather.find('.currentWeather').length).toEqual(7);
  })

})