import React from 'react';
import Card from './Card.js';
import './css/CardContainer.css'

function CardContainer({ hours, days }) {
  return (
    <div className='cardContainer'>
      <div className='sevenHour'>
      {
      	hours.map((hour, index) => {
      		return <Card timeUnit={hour} key={index} />
      	})
      } 
      </div>
      <div className='tenDay'>
        {
        days.map((day, index) => {
          return <Card timeUnit={day} key={index} />
          })
        }
      </div>
    </div>
  )
}
export default CardContainer;
