import { showWeather } from "./showWeather.js";

const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");
const weatherInfo = document.querySelector("#weatherInfo");
const displayIcon = document.querySelector("#displayIcon");
const infoGetHtml = document.querySelector("#infoGet");
const stadDisplay = document.querySelector(".stad");

btnHtml.addEventListener("click", () => {
  console.log("Knapp klickad – uppdaterar väder");
  weatherFetch(weatherInfo);
});

let autoUpdateInterval;

function startAutoUpdate() {
  weatherFetch(weatherInfo);

  autoUpdateInterval = setInterval(() => {
    console.log("Automatisk uppdatering...");
    weatherFetch(weatherInfo);
  }, 10000);
}

startAutoUpdate();
