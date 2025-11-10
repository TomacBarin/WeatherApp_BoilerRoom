import { weatherFetch } from "./weatherFetch.js";

const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");
const weatherInfo = document.querySelector("#weatherInfo");
const displayIcon = document.querySelector("#displayIcon");
const infoGetHtml = document.querySelector("#infoGet");
const stadDisplay = document.querySelector(".stad");

btnHtml.addEventListener("click", () => {
  console.log("Knapp i app.js har klickats på.");
  weatherFetch(weatherInfo);
});
