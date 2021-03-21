const forecast_api = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=7c6f7825f69597372e84c7b35b753a83&units=imperial';

  fetch(forecast_api)
  .then(response => response.json())
  .then((jsObject) => {
      console.log(jsObject);
    
  const weather_forecast = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

  console.log(weather_forecast);

  let day = 1;
  weather_forecast.forEach(forecast => {
  document.getElementById('img' + day).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
  document.getElementById('img' + day).alt = forecast.weather[0].description
  document.getElementById('temperature' + day).textContent = Math.round(forecast.main.temp) + ' °F';
  day++;	  
  });
});