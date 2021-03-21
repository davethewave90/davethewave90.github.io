function sodaprings_display_date()
{
  let today = new Date();
  let myday = today.getDay();
  let mymonth = today.getMonth();
  let my_day_of_month = today.getDate();
  let year = today.getFullYear();
  let day = "notset";
  let month = "notset";
  let day3 = "notset";
  let day4 = "notset";
  let day5 = "notset";

  if (myday == 1)
  {
    day = "Monday";
    day3 = "Wednesday";
    day4 = "Thursday";
    day5 = "Friday";
  }
  else if (myday == 2)
  {
    day = "Tuesday";
    day3 = "Thursday";
    day4 = "Friday";
    day5 = "Saturday";
  }
  else if (myday == 3)
  {
    day = "Wednesday";
    day3 = "Friday";
    day4 = "Saturday";
    day5 = "Sunday";
  }
  else if (myday == 4)
  {
    day = "Thursday";
    day3 = "Saturday";
    day4 = "Sunday";
    day5 = "Monday";
  }
  else if (myday == 5)
  {
    day = "Friday";
    day3 = "Sunday";
    day4 = "Monday";
    day5 = "Tuesday";
  }
  else if (myday == 6)
  {
    day = "Saturday";
    day3 = "Monday";
    day4 = "Tuesday";
    day5 = "Wednesday";
  }
  else
  {
    day = "Sunday";
    day3 = "Tuesday";
    day4 = "Wednesday";
    day5 = "Thursday";
  }

  if (mymonth == 0)
  {
    month = "January";    
  }
  else if (mymonth == 1)
  {
    month = "February";
  }
  else if (mymonth == 2)
  {
    month = "March";
  }
  else if (mymonth == 3)
  {
    month = "April";
  }
  else if (mymonth == 4)
  {
    month = "May";
  }
  else if (mymonth == 5)
  {
    month = "June";
  }
  else if (mymonth == 6)
  {
    month = "July";
  }
  else if (mymonth == 7)
  {
    month = "August";
  }
  else if (mymonth == 8)
  {
    month = "September";
  }
  else if (mymonth == 9)
  {
    month = "Ocotber";
  }
  else if (mymonth == 10)
  {
    month = "November";
  }
  else
  {
    month = "December";
  }

  document.getElementById("sodaprings_time").innerHTML = day + ", " + my_day_of_month + " " + month + " " + year;

  document.getElementById("days3").innerHTML = day3;
  document.getElementById("days4").innerHTML = day4;
  document.getElementById("days5").innerHTML = day5;
}