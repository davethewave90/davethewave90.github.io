function main()
{
	let mydate = new Date();
	let event_day = mydate.getDay();

	if (event_day == 5)
	{
		document.getElementById("banner_span").innerHTML = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";    
	}

	let today = new Date();
	let myday = today.getDay();
	let mymonth = today.getMonth();
  let my_day_of_month = today.getDate();
	let year = today.getFullYear();
	let day = "notset";
	let month = "notset";

	if (myday == 1)
	{
	day = "Monday";    
	}
	else if (myday == 2)
	{
	day = "Tuesday";
	}
	else if (myday == 3)
	{
	day = "Wednesday";
	}
	else if (myday == 4)
	{
	day = "Thursday";
	}
	else if (myday == 5)
	{
	day = "Friday";
	}
	else if (myday == 6)
	{
	day = "Saturday";
	}
	else
	{
	day = "Sunday";
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

	document.getElementById("time").innerHTML = day + ", " + my_day_of_month + " " + month + " " + year;
}
