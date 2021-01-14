function display_time()
{
let last_updated = document.lastModified;
document.getElementById("time").innerHTML = last_updated;
  
let date = new Date();
let this_year = date.getFullYear();
document.getElementById("year").innerHTML = this_year;
}