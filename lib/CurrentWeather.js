import React from 'react';
import './css/CurrentWeather.css'

const CurrentWeather = ({ data }) => {
  return (
    <div className='currentDiv'>
      <p className='currentWeather'> Current Conditions in {data.locationName}</p>
      <p className='currentWeather'>{data.currentCondition}</p>
      <p className='currentWeather'>{data.currentDay}</p>
      <p className='currentWeather'>{data.currentTemp}</p>
      <p className='currentWeather'>High: {data.currentHigh}</p>
      <p className='currentWeather'>Low: {data.currentLow}</p>
      <p className='currentWeather'>{data.currentSummary}</p>
    </div>
  )
}

export default CurrentWeather;