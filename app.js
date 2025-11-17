import * as WeatherData from "./weatherdata.js";
import * as CardCreator from "./cardcreator.js";

CardCreator.init();

const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");

btnHtml.addEventListener("click", async () => {
  const cityName = userInputHtml.value.trim();
  if (!cityName) return;

  const result = await WeatherData.getWeather(cityName);
  if (!result) return;

  const { city, weather } = result;

  CardCreator.addCity(city, weather);

  userInputHtml.value = "";
});

userInputHtml.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

    btnHtml.click();
  }
});
