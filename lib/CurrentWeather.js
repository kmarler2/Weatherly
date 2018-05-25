import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div>
      <p>{data.locationName}</p>
      <p>{data.currentCondition}</p>
      <p>{data.currentDay}</p>
      <p>{data.currentTemp}</p>
    </div>
  )
}

export default CurrentWeather;