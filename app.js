import * as WeatherData from "./weatherdata.js";
import * as CardCreator from "./cardcreator.js";

const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");


let addedCities = [];

btnHtml.addEventListener("click", () => {
  const cityName = userInputHtml.value.trim();
  if (!cityName) return;

  const city = WeatherData.CITIES.find(c => c.name.toLowerCase() === cityName.toLowerCase());
  if (!city) {
    alert("Staden finns inte!");
    return;
  }

  const key = `${city.lat},${city.lon}`;
  const weather = WeatherData.WEATHER[key];

  CardCreator.createCard(city, weather);

  userInputHtml.value = "";
});