import React from 'react';

const Card = ({ timeUnit }) => {
  return (
	<div className='card'>
	  {timeUnit.hour &&
	  <div className="hourCard">
			<h3 className="card-hour">{timeUnit.hour}</h3>
			<h4 className="card-temp">{timeUnit.temp}</h4>
			<img src={timeUnit.icon}/>
		</div>
	  }
	  {timeUnit.weekDay &&
	  <div className="dayCard">
			<h3 className="cardTemp">{timeUnit.weekDay}</h3>
			<h4 className="cardHour">{timeUnit.high}</h4>
			<h4 className='cardLow'>{timeUnit.low}</h4>
		</div>
	  }
	</div>	
  )
}

export default Card;
