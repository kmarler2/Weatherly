import React from 'react';
import Card from './Card.js';

function SevenHour(props) {

  console.log(props)
  return (
    <div>
      <p>{props.hours}</p>
    </div>
  )
}
export default SevenHour;
