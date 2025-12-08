import { WeatherCard } from './weatherCard.js';
import * as WeatherData from "./assets/weatherdata.js";

await WeatherData.loadCities();

const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");

btnHtml.addEventListener("click", async () => {
    const cityName = userInputHtml.value.trim();
    if (!cityName) return;

    const result = await WeatherData.getWeather(cityName);
    if (!result) return;

    const { city, weather } = result;
//   CardCreator.addCity(city, weather);

    let card = new WeatherCard(city);
    weatherCards.push(card);
    console.log(weatherCards);

    userInputHtml.value = "";
});

let weatherCards = [];

function init(){
    // const card1 = new WeatherCard('Stockholm', 59.33, 18.06);
    // const card2 = new WeatherCard('Malmö', 59.33, 18.06);
    // weatherCards.push(card1, card2);
    // weatherCards.push(card1);
    console.log(weatherCards);
    
}

window.onload = init;