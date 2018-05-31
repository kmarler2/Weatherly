import React from 'react';

const Card = ({ timeUnit }) => {
	const hourCard = 
		<div className="card">
			<h3 className="card-hour">Hour: {timeUnit.hour}</h3>
			<h4 className="card-temp">Temp: {timeUnit.temp}</h4>
			<img src={timeUnit.icon}/>
		</div>

	const dayCard = 
		<div className="card">
			<h3 className="cardTemp">{timeUnit.weekDay}</h3>
			<h4 className="cardHigh">High: {timeUnit.high}</h4>
			<h4 className='cardLow'>Low: {timeUnit.low}</h4>
		</div>

  return timeUnit.hour ? hourCard : dayCard 
}

export default Card;
