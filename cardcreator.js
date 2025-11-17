import * as WeatherData from "./weatherdata.js";

const btnHtml = document.querySelector("#searchBtn");
const userInputHtml = document.querySelector("#cityInput");
const weatherCards = document.querySelector("#weather-cards");

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

  // const cardHtml = `
  //   <div class="weather-container">
  //     <div class="removeCardField">
  //       <button class="remove-button" aria-label="Remove weather card">
  //         <i class="fa-solid fa-xmark"></i>
  //       </button>
  //     </div>
  //     <section class="weatherIcon">
  //       <h2 class="stad">${city.name}</h2>
  //       <h2 class="displayIcon">${weather.icon} ${weather.temp}°C</h1>
  //       <p class="weatherInfo">${weather.description}</p>
  //       <p class="infoGet">( Hämtad ${weather.updatedAt} )</p>
  //     </section>
  //   </div>
  // `;

  // weatherCards.insertAdjacentHTML("beforeend", cardHtml);

  createCard();

  const removeButtons = weatherCards.querySelectorAll(".remove-button");
  removeButtons.forEach(btn => {
    btn.onclick = (e) => e.target.closest(".weather-container").remove();
  });

  userInputHtml.value = "";
});

function createCard(){

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
  // Create icon element
  // const 


  weatherCards.appendChild(card);
  card.appendChild(removeBtnField);
  removeBtnField.appendChild(removeBtn);
}