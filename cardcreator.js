export function createCard(city, weather){

  const temp = Math.round(weather.temperature);

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
  // Create info element
  const infoField = document.createElement("section");
  infoField.className = "infoField";
  const cityName = document.createElement("h2");
  cityName.className = "stad";
  cityName.textContent = city.name;
  const weatherIcon = document.createElement("h2");
  weatherIcon.className = "displayIcon";
  weatherIcon.textContent = `🌞 ${temp} °C`;
  const weatherInfo = document.createElement("p");
  weatherInfo.className = "weatherInfo";
  weatherInfo.textContent = weather.description;
  const infoGet = document.createElement("p");
  infoGet.className = "infoGet";
  infoGet.textContent = `Hämtad ${weather.updatedAt}`;

  // Append elements
  weatherCards.appendChild(card);
  card.appendChild(removeBtnField);
  removeBtnField.appendChild(removeBtn);
  card.appendChild(infoField);
  infoField.appendChild(cityName);
  infoField.appendChild(weatherIcon);
  infoField.appendChild(weatherInfo);
  infoField.appendChild(infoGet);
  
  // Add event listener to remove button
  removeBtn.onclick = () => {
    card.remove();
  };

  return card;

}