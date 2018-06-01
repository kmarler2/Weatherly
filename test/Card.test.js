import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card.js'

describe('Card', () => {
  let renderedCard;

  beforeEach( () => {
    const cardObject = {hour: '4', temp: '76', icon: 'duude!'}
    renderedCard = shallow(<Card timeUnit={cardObject} />)
  })

  it('should exist', () => {
    expect(renderedCard).toBeDefined();
  })

  it('should render a div with a class of card', () => {
    expect(renderedCard.find('.card').length).toEqual(1);
  })

  // it('should render a card with props passed', () => {

  //   const element =   
  //   <div className="card">
  //     <h3 className="card-hour">Hour: '4'</h3>
  //     <h4 className="card-temp">Temp: '76'</h4>
  //     <img src='duude!'/>
  //   </div>

  //   expect(renderedCard.matchesElement(element)).toEqual(true);
  // })

})