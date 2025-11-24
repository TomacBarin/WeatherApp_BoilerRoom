let addedCities = [];

export function init() {
  console.log("Created city storage array");
}

export function getWeatherIcon(weatherCode) {
  switch (weatherCode) {
    case 0:
      return "Solemoji";
    case 1:
      return "Delvis molnigt";
    case 2:
      return "Molnigt";
    case 3:
      return "Regnigt";
    case 45:
    case 48:
      return "Dimma";
    case 51:
    case 53:
    case 55:
      return "Lätt regn";
    case 61:
    case 63:
    case 65:
      return "Regn";
    case 71:
    case 73:
    case 75:
      return "Snö";
    case 95:
    case 96:
    case 99:
      return "Åska";
    default:
      return "Molnigt";
  }
}

export function createCard(city, weather) {
  const temp = Math.round(weather.temperature);
  const weatherCards = document.querySelector("#weather-cards");

  const card = document.createElement("div");
  card.className = "weather-container";
  card.tabIndex = 0;

  // BÄTTRE än "region" – VoiceOver säger "artikel" istället för "område"
  card.setAttribute("role", "article");

  // Unikt ID för aria-labelledby
  const cardId = `weather-card-${city.name}-${Date.now()}`;
  card.setAttribute("aria-labelledby", cardId);

  // Osynlig text – detta är vad VoiceOver läser upp (med engelsk röst, men det är okej!)
  const srOnly = document.createElement("div");
  srOnly.className = "sr-only";
  srOnly.id = cardId;
  srOnly.textContent = `${city.name}: ${temp} grader, ${weather.description}, hämtad ${weather.time}`;

  // Synligt innehåll
  const cityName = document.createElement("h2");
  cityName.className = "stad";
  cityName.textContent = city.name;

  const weatherIcon = document.createElement("div");
  weatherIcon.className = "displayIcon";
  weatherIcon.textContent = `${getWeatherIcon(weather.weathercode)} ${temp} °C`;
  weatherIcon.setAttribute("aria-hidden", "true");

  const weatherInfo = document.createElement("p");
  weatherInfo.className = "weatherInfo";
  weatherInfo.textContent = weather.description;

  const infoGet = document.createElement("p");
  infoGet.className = "infoGet";
  infoGet.textContent = `Hämtad ${weather.time}`;

  // Ta bort-knapp
  const removeBtnField = document.createElement("div");
  removeBtnField.className = "removeCardField";

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-button";
  removeBtn.setAttribute("aria-label", `Ta bort väder för ${city.name}`);
  removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  removeBtn.onclick = () => card.remove();

  // Bygg ihop
  const infoField = document.createElement("section");
  infoField.className = "infoField";
  infoField.append(cityName, weatherIcon, weatherInfo, infoGet);

  removeBtnField.appendChild(removeBtn);
  card.append(srOnly, removeBtnField, infoField);
  weatherCards.appendChild(card);

  // Fokus direkt när kortet dyker upp
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
