export async function getWeather() {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`
    );
    const data = await response.json();
    console.log(data.current_weather.temperature);
  } catch (error) {
    console.error("Fel vid hämtning", error);
  }
}
