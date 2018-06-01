import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContainer from '../lib/CardContainer.js';
import Card from '../lib/Card.js';


describe('CardContainer',() => {
  let renderedContainer;
  const pops = [{ hour:3 },{ hour: 5 },{ hour: 8 }];
  const paps = [{ day: 'Monday' },{ day: 'Tuesday' },{ day: 'Wednesday' }];

  beforeEach(() => {
   renderedContainer = shallow(<CardContainer hours={ pops } days={ paps }/>)
 });

  it('should render 6 Card components', () => {
    expect(renderedContainer.find(Card).length).toBe(6);
  })
  it('should return one sevenHour div of hourCards', () => {
    expect(renderedContainer.find('.sevenHour').length).toBe(1);
  })
  it('should render one tenDay div of dayCards', () => {
    expect(renderedContainer.find('.tenDay').length).toBe(1);
  })
  it('should render elements based on props passed in', () => {
    let actual = renderedContainer.children().get(0).props.children[0].props.timeUnit;
    let expected = { hour:3 };
    
    expect(actual).toEqual(expected);

    actual = renderedContainer.children().get(1).props.children[0].props.timeUnit;
    expected = { day: 'Monday' };

    expect(actual).toEqual(expected);
  })
})
