import data from './test_helpers/mockData.js'
import cleanData from '../lib/data.js';
import React from 'react';
import { shallow, mount } from 'enzyme';

describe('dataCleaner', () => {
  it('should be defined', () => {
    expect(cleanData).toBeDefined();
  })

  it('should return an object of clean Data', () => {
    let actual = cleanData(data);
    const expected =  { 
        locationName: 'Louisville, KY',
        currentCondition: 'Mostly Cloudy',
        currentDay: 'Wednesday',
        currentTemp: '46.0 F (7.8 C)',
        currentHigh: '51',
        currentLow: '32',
        currentSummary: 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.',
        sevenHour: 
         [ { hour: 12,
             temp: '47',
             icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
           { hour: 1,
             temp: '49',
             icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
           { hour: 2,
             temp: '49',
             icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif' },
           { hour: 3,
             temp: '51',
             icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
           { hour: 4,
             temp: '50',
             icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
           { hour: 5,
             temp: '48',
             icon: 'http://icons.wxug.com/i/c/k/clear.gif' },
           { hour: 6,
             temp: '45',
             icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif' },
           { hour: 7,
             temp: '43',
             icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif' } ],
        tenDay: 
         [ { weekDay: 'Wednesday',
             icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
             high: '51',
             low: '32' },
           { weekDay: 'Thursday',
             icon: 'http://icons.wxug.com/i/c/k/clear.gif',
             high: '55',
             low: '51' },
           { weekDay: 'Friday',
             icon: 'http://icons.wxug.com/i/c/k/chancerain.gif',
             high: '57',
             low: '44' },
           { weekDay: 'Saturday',
             icon: 'http://icons.wxug.com/i/c/k/rain.gif',
             high: '47',
             low: '30' },
           { weekDay: 'Sunday',
             icon: 'http://icons.wxug.com/i/c/k/cloudy.gif',
             high: '37',
             low: '22' },
           { weekDay: 'Monday',
             icon: 'http://icons.wxug.com/i/c/k/clear.gif',
             high: '35',
             low: '19' },
           { weekDay: 'Tuesday',
             icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
             high: '32',
             low: '20' },
           { weekDay: 'Wednesday',
             icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
             high: '33',
             low: '26' },
           { weekDay: 'Thursday',
             icon: 'http://icons.wxug.com/i/c/k/snow.gif',
             high: '35',
             low: '23' },
           { weekDay: 'Friday',
             icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
             high: '31',
             low: '18' } 
          ]  
    }
    expect(actual).toEqual(expected);
  })
})