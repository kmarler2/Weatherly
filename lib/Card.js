import React from 'react';

const Card = ({ timeUnit }) => {
  return (
	<div className='card'>
	  {timeUnit.hour &&
	  <div className="hourCard">
			<h3 className="card-hour">Hour: {timeUnit.hour}</h3>
			<h4 className="card-temp">Temp: {timeUnit.temp}</h4>
			<img src={timeUnit.icon}/>
		</div>
	  }
	  {timeUnit.weekDay &&
	  <div className="dayCard">
			<h3 className="cardTemp">{timeUnit.weekDay}</h3>
			<h4 className="cardHigh">High: {timeUnit.high}</h4>
			<h4 className='cardLow'>Low: {timeUnit.low}</h4>
		</div>
	  }
	</div>	
  )
}

export default Card;
