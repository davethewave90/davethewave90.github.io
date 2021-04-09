function copyright_year()
{
	var today = new Date();
	var year = today.getFullYear();

	document.getElementById("year").innerHTML = year;
}