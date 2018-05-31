import React from 'react';
import Card from './Card.js';
import './css/CardContainer.css';

function CardContainer({ hours, days }) {

  const hoursList = hours.map((hour, index) => {
          return <Card timeUnit={hour} key={index} />
        });

  const daysList = days.map((day, index) => {
          return <Card timeUnit={day} key={index} />
          });

  return (
    <div className='cardContainer'>
      <div className='sevenHour'>{ hoursList }</div>
      <div className='tenDay'>{ daysList }</div>
    </div>
  )
}
export default CardContainer;
