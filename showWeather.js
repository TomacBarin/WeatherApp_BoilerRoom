export async function showWeather() {
  const cityName = userInputHtml.value.trim();

  if (cityName === "") {
    return;
  }

  try {
    const city = CITIES.find(
      (c) => c.name.toLowerCase() === cityName.toLowerCase()
    );

    if (!city) {
      throw new Error(`Staden "${cityName}" hittades inte i listan.`);
    }

    // CHANGE!
    const key = `${city.lat},${city.lon}`;
    const weather = WEATHER[key];

    if (!weather) {
      throw new Error(`Ingen väderdata finns för ${city.name}.`);
    }

    displayIcon.innerHTML = `${weather.temp}°C`;
    stadDisplay.innerHTML = `${city.name}`;
    weatherInfo.innerHTML = `
      ${weather.description}  
      ${weather.icon}
    `;
    infoGetHtml.innerHTML = `(Hämtad ${weather.updatedAt})`;
    userInputHtml.value = "";
  } catch (error) {
    console.error("Fel vid hämtning av väder:", error);

    weatherInfo.innerHTML = `<p style="color: red;">⚠️ ${error.message}</p>`;
    stadDisplay.innerHTML = "Okänt ställe";
    displayIcon.innerHTML = "";
    infoGetHtml.innerHTML = "";
  }
}
