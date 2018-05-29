import React from 'react';
import Card from './Card.js';
import './css/TenDay.css'

function TenDay( { days } ) {
  return (
  	<div className='tenDay'>
  	  {
  		days.map((day,index) => {
  			return <Card timeUnit={day} key={index} />
  			})
  	  }
  	</div>
  )
}
export default TenDay;