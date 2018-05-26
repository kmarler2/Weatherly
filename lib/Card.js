import React from 'react';

const card = ({data}) => {
	return (
		<div>
			<h3 className="card-temp">{data.temp}</h3>
			<h4 className="card-hour">{data.hour}</h4>
			<h4 className="card-icon">{data.icon}</h4>
			<h4 className="card-day">{data.weekday}</h4>
			<h4 className="card-high">High:{data.high}</h4>
			<h4 className="card-low">Low:{data.low}</h4>
		</div>
		)
}

export default card;
