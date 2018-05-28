import React from 'react';

const CurrentWeather = ({ data }) => {
  console.log(data)
  return (
    <div className='currentWeather'>
      <p>{data.locationName}</p>
      <p>{data.currentCondition}</p>
      <p>{data.currentDay}</p>
      <p>{data.currentTemp}</p>
      <p>{data.currentHigh}</p>
      <p>{data.currentLow}</p>
      <p>{data.currentSummary}</p>
    </div>
  )
}

export default CurrentWeather;