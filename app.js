const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");
const weatherInfo = document.querySelector("#weatherInfo");
const displayIcon = document.querySelector("#displayIcon");

// Display Weather

async function showWeather() {
  const cityName = userInputHtml.value.trim();
  if (cityName === "") {
    weatherInfo.textContent = "Skriv in en stad";
    return;
  }

  const city = CITIES.find(
    (c) => c.name.toLowerCase() === cityName.toLowerCase()
  );

  const key = `${city.lat},${city.lon}`;
  const weather = WEATHER[key];

  displayIcon.innerHTML = `${weather.temp}°C`;

  weatherInfo.innerHTML = `
  ${weather.description}  | 
  ${weather.icon} | (Hämtad: 
  ${weather.updatedAt}) 
`;
}

btnHtml.addEventListener("click", showWeather);

// Mockup from Robin - to be replaced

const CITIES = [
  { name: "Stockholm", country: "SE", lat: 59.3293, lon: 18.0686 },
  { name: "Göteborg", country: "SE", lat: 57.7089, lon: 11.9746 },
  { name: "Malmö", country: "SE", lat: 55.605, lon: 13.0038 },
  { name: "Uppsala", country: "SE", lat: 59.8586, lon: 17.6389 },
  { name: "Lund", country: "SE", lat: 55.7047, lon: 13.191 },
];

const WEATHER = {
  "59.3293,18.0686": {
    temp: 7,
    description: "Mulet",
    icon: "☁️",
    updatedAt: "2025-11-02T09:00:00Z",
  },
  "57.7089,11.9746": {
    temp: 8,
    description: "Lätt regn",
    icon: "🌧️",
    updatedAt: "2025-11-02T09:00:00Z",
  },
  "55.605,13.0038": {
    temp: 9,
    description: "Klart",
    icon: "☀️",
    updatedAt: "2025-11-02T09:00:00Z",
  },
  "59.8586,17.6389": {
    temp: 6,
    description: "Dis",
    icon: "🌫️",
    updatedAt: "2025-11-02T09:00:00Z",
  },
  "55.7047,13.191": {
    temp: 8,
    description: "Halvklart",
    icon: "⛅",
    updatedAt: "2025-11-02T09:00:00Z",
  },
};
