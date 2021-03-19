const requestURL = 'weather.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  
    const towns = jsonObject['towns'];
  
    for (let i = 0; i < towns.length; i++ )
    {
      if(towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs")
      {
        let card = document.createElement('section');
        let town_name = document.createElement('p');
        let town_motto = document.createElement('p');
        let year_founded = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let myimage = document.createElement('img');

        town_name.textContent = towns[i].name;
        town_name.setAttribute('class', "card_p");
        
        town_motto.textContent = towns[i].motto;
        town_motto.setAttribute('class', "card_p");
        
        year_founded.innerHTML = "Year Founded: " + towns[i].yearFounded; 
        year_founded.setAttribute('class', "card_p");
        
        population.innerHTML = "Population: " + towns[i].currentPopulation;
        population.setAttribute('class', "card_p");
        
        rainfall.innerHTML = "Average Rainfall: " + towns[i].averageRainfall;
        rainfall.setAttribute('class', "card_p");
        
        myimage.setAttribute('src', "images/" + towns[i].photo);
        myimage.setAttribute('alt', towns[i].name);
        myimage.setAttribute('class', "card_images");

        card.appendChild(myimage);
        card.appendChild(town_name);
        card.appendChild(town_motto);
        card.appendChild(year_founded);
        card.appendChild(population);
        card.appendChild(rainfall);

        document.querySelector('div.cards').appendChild(card);
      }
    }
  });


