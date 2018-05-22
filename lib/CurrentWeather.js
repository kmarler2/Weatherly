import React from 'react';

const CurrentWeather = (props) => {
  return (
    <div>
      <p>{props.locationName}</p>
      <p>{props.currentCondition}</p>
      <p>{props.currentDay}</p>
      <p>{props.currentTemp}</p>
    </div>
  )
}

export default CurrentWeather;