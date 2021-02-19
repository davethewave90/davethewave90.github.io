function display_windchill()
{
  let my_wind_speed = parseFloat(document.getElementById("wind_speed").innerHTML);
  let my_temperature = parseFloat(document.getElementById("temperature").innerHTML);
  let rounded_windchill = 0;
  
  if (my_temperature <= 50 && my_wind_speed >= 3)
  {
    let my_windchill = (35.74 + (0.6215 * my_temperature) - (35.75 * (my_wind_speed ** 0.16)) + (0.4275 * my_temperature * (my_wind_speed ** 0.16)))
    rounded_windchill = my_windchill.toFixed(1);

    document.getElementById("windchill").innerHTML = rounded_windchill;
  }
  else
  {
    document.getElementById("windchill").innerHTML = "N/A";
  }
}