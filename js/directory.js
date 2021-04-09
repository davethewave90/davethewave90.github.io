const requestURL = '../json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  
  const businesses = jsonObject['businesses'];
  
  
  for (let i = 0; i < businesses.length; i++)
  {
	let card = document.createElement('section');
	let name = document.createElement('p');
    let address = document.createElement('p');
    let telephone = document.createElement('p');
    let email = document.createElement('p');
    let business_url = document.createElement('p');
    let hours = document.createElement('p');
    
    name.innerHTML = "Business Name: " + businesses[i].name;
    address.innerHTML = "Street Address: " + businesses[i].address;
    telephone.innerHTML = "Telephone Number: " + businesses[i].telephone;
    email.innerHTML = "Email Address: " + businesses[i].email;
    business_url.innerHTML = "Website URL: " + businesses[i].business_url;
    hours.innerHTML = "Hours of Operation: " + businesses[i].hours;
	  
	card.appendChild(name);
	card.appendChild(address);
	card.appendChild(telephone);
	card.appendChild(email);
    card.appendChild(business_url);
    card.appendChild(hours);
    
    document.querySelector('div.cards').appendChild(card);
  } 
 });