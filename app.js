import * as WeatherData from "./weatherdata.js";
import * as CardCreator from "./cardcreator.js";


const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");


let addedCities = [];

btnHtml.addEventListener("click", async () => {
  const cityName = userInputHtml.value.trim();
  if (!cityName) return;

  const result = await WeatherData.getWeather(cityName);
  if (!result) return;

  const { city, weather } = result;

  CardCreator.createCard(city, weather);

  userInputHtml.value = "";
});