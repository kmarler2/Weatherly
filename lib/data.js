
export default function cleanData(data) { 
  let sevenHour = [];
  for (let i = 0; i < 8; i++) {
    let obj = {
      hour: data.hourly_forecast[i].FCTTIME.hour,
      temp: data.hourly_forecast[i].temp.english,
      icon: data.hourly_forecast[i].icon_url
    }
    if (obj.hour > 12) {
      obj.hour = (obj.hour - 12);
    }
    if (obj.hour == 0) {
      obj.hour = 12;
    }
    sevenHour.push(obj);
  }

  let tenDay = [];
  for (let i = 0; i < 10; i++) {
    let obj = {
      weekDay: data.forecast.simpleforecast.forecastday[i].date.weekday,
      icon: data.forecast.simpleforecast.forecastday[i].icon_url,
      high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
    }
    tenDay.push(obj);
  }

  let newData = {locationName: data.current_observation.display_location.full, 
  currentCondition: data.current_observation.weather, 
  currentDay: data.forecast.txt_forecast.forecastday[0].title, 
  currentTemp: data.current_observation.temperature_string,
  currentHigh: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
  currentLow: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
  currentSummary: data.forecast.txt_forecast.forecastday[0].fcttext,
  sevenHour: sevenHour,
  tenDay: tenDay  
  }
  return newData;
}
