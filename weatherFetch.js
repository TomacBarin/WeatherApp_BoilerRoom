export function weatherFetch(sendWeather) {
  sendWeather.textContent = "Sidan laddar...";

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nätverksfel. Försök senare.");
      }
      return response.json();
    })
    .then((data) => {
      sendWeather.textContent = `Temperatur: ${data.current_weather.temperature}`;
      console.log("Detta är från modul.");
    })
    .catch((error) => {
      sendWeather.textContent = "Kunde inte hämta data.";
      console.error("Fel: ", error);
    });
}
