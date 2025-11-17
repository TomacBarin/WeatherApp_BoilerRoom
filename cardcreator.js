let addedCities = [];

export function init(){
  console.log("Created city storage array");
    }

export function getWeatherIcon(weatherCode) {
  switch (weatherCode) {
    case 0: return '☀️';
    case 1: return '🌤️';
    case 2: return '☁️';
    case 3: return '🌧️';
    case 61: return '❄️';

  }
}

export function createCard(city, weather){

  const temp = Math.round(weather.temperature);

  // Get card container
  const weatherCards = document.querySelector("#weather-cards");

  // Create card element
  const card = document.createElement("div");
  card.className = "weather-container";
  // Create remove button
  const removeBtnField = document.createElement("div");
  removeBtnField.className = "removeCardField";
  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-button";
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  // Create info element
  const infoField = document.createElement("section");
  infoField.className = "infoField";
  const cityName = document.createElement("h2");
  cityName.className = "stad";
  cityName.textContent = city.name;
  const weatherIcon = document.createElement("h2");
  weatherIcon.className = "displayIcon";
  weatherIcon.textContent = `${getWeatherIcon(weather.weathercode)} ${temp} °C`;
  const weatherInfo = document.createElement("p");
  weatherInfo.className = "weatherInfo";
  weatherInfo.textContent = weather.description;
  const infoGet = document.createElement("p");
  infoGet.className = "infoGet";
  infoGet.textContent = `Hämtad ${weather.updatedAt}`;

  // Append elements
  weatherCards.appendChild(card);
  card.appendChild(removeBtnField);
  removeBtnField.appendChild(removeBtn);
  card.appendChild(infoField);
  infoField.appendChild(cityName);
  infoField.appendChild(weatherIcon);
  infoField.appendChild(weatherInfo);
  infoField.appendChild(infoGet);
  
  // Add event listener to remove button
  removeBtn.onclick = () => {
    card.remove();
  };

  return card;


}

class City {
  constructor(city, weather) {
    this.city = city;
    this.weather = weather;
  }
}

export function addCity(city, weather){
  const addedCity = new City(city, weather);
  addedCities.push(addedCity);
  console.log(`Added city "${city.name}" to storage!`);
  createCard(city, weather);
  console.log(`Added card for "${city.name}" to DOM`);
  getAddedCities();
}

export function getAddedCities(){
  addedCities.forEach(cityInstance => {
  console.log(cityInstance.city);
});
}
