let addedCities = [];

export function init() {
  console.log("Created city storage array");
}

export function getWeatherIcon(weatherCode) {
  switch (weatherCode) {
    case 0:
      return "partly-cloudy.png";
    case 1:
      return "partly-cloudy.png";
    case 2:
      return "mostly-cloudy.png";
    case 3:
      return "rain.png";
    case 45:
    case 48:
      return "mostly-cloudy.png";
    case 51:
    case 53:
    case 55:
      return "partly-cloudy-rain.png";
    case 61:
    case 63:
    case 65:
      return "rain.png";
    case 71:
    case 73:
    case 75:
      return "mostly-cloudy.png";
    case 95:
    case 96:
    case 99:
      return "thunderstorm.png";
    default:
      return "partly-cloudy.png";
  }
}

export function createCard(city, weather) {
  const temp = Math.round(weather.temperature);
  const weatherCards = document.querySelector("#weather-cards");

  const card = document.createElement("div");
  card.className = "weather-container";
  card.tabIndex = 0;

  card.setAttribute("role", "article");

  const cardId = `weather-card-${city.name}-${Date.now()}`;
  card.setAttribute("aria-labelledby", cardId);

  const srOnly = document.createElement("div");
  srOnly.className = "sr-only";
  srOnly.id = cardId;
  srOnly.textContent = `${city.name}: ${temp} grader, ${weather.description}, hämtad ${weather.time}`;

  const cityName = document.createElement("h2");
  cityName.className = "stad";
  cityName.textContent = city.name;

  const weatherIconContainer = document.createElement("div");
  weatherIconContainer.className = "displayIcon";

  const iconImg = document.createElement("img");
  iconImg.src = `/assets/images/${getWeatherIcon(weather.weathercode)}`;
  iconImg.alt = weather.description; // bra för tillgänglighet!
  iconImg.className = "weather-icon";

  const tempSpan = document.createElement("span");
  tempSpan.textContent = `${temp} °C`;
  tempSpan.className = "temperature";

  weatherIconContainer.append(iconImg, tempSpan);

  const weatherInfo = document.createElement("p");
  weatherInfo.className = "weatherInfo";
  weatherInfo.textContent = weather.description;

  const infoGet = document.createElement("p");
  infoGet.className = "infoGet";
  infoGet.textContent = `Hämtad ${weather.time}`;

  const removeBtnField = document.createElement("div");
  removeBtnField.className = "removeCardField";

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-button";
  removeBtn.setAttribute("aria-label", `Ta bort väder för ${city.name}`);
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  removeBtn.onclick = () => card.remove();

  const infoField = document.createElement("section");
  infoField.className = "infoField";
  infoField.append(cityName, weatherIconContainer, weatherInfo, infoGet);

  removeBtnField.appendChild(removeBtn);
  card.append(srOnly, removeBtnField, infoField);
  weatherCards.appendChild(card);

  requestAnimationFrame(() => {
    card.focus();
  });

  return card;
}

class City {
  constructor(city, weather) {
    this.city = city;
    this.weather = weather;
  }
}

export function addCity(city, weather) {
  const addedCity = new City(city, weather);
  addedCities.push(addedCity);
  console.log(`Added city "${city.name}" to storage!`);
  createCard(city, weather);
  console.log(`Added card for "${city.name}" to DOM`);
  getAddedCities();
}

export function getAddedCities() {
  addedCities.forEach((cityInstance) => {
    console.log(cityInstance.city);
  });
}
