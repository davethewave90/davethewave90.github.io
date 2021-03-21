const weather_api = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=7c6f7825f69597372e84c7b35b753a83&units=imperial';

fetch(weather_api)
  .then((response) => response.json())
  .then((town) => {
    console.log(town);
    let description = town.weather[0].description;
    document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
    document.getElementById('temperature').innerHTML = Math.round(town.main.temp);
    document.getElementById('high').innerHTML = Math.round(town.main.temp_max);
    document.getElementById('humidity').innerHTML = town.main.humidity;
    document.getElementById('wind_speed').innerHTML = Math.round(town.wind.speed);
    display_windchill();
  });

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ )
   {
     if (towns[i].name == 'Soda Springs')
     {
      let events = towns[i].events;
      for (let i=0; i < events.length; i++)
      {
        let event = document.createElement('p');
        event.innerHTML = events[i];
        document.querySelector('#town_events').appendChild(event);
      }
    }
   }
});