import React from 'react';
import Card from './Card.js';

function SevenHour({ hours }) {
  return (
    <div className='sevenHour'>
      {
      	hours.map((hour, index) => {
      		return <Card timeUnit={hour} key={index} />
      	})
      }
    </div>
  )
}
export default SevenHour;
