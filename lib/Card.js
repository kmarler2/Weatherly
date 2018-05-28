import React from 'react';

const card = ({ timeUnit }) => {
  return (
	<div>
	  {timeUnit.hour &&
	  	<div className="hourCard">
			<h3 className="card-temp">{timeUnit.hour}</h3>
			<h4 className="card-hour">{timeUnit.temp}</h4>
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

export default card;
