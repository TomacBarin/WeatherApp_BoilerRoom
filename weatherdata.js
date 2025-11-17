// Exempeldata
export const CITIES = [
  { name: "Stockholm", country: "SE", lat: 59.3293, lon: 18.0686 },
  { name: "Göteborg", country: "SE", lat: 57.7089, lon: 11.9746 },
  { name: "Malmö", country: "SE", lat: 55.605, lon: 13.0038 },
  { name: "Uppsala", country: "SE", lat: 59.8586, lon: 17.6389 },
  { name: "Lund", country: "SE", lat: 55.7047, lon: 13.191 }
];

export async function getWeather(cityName) {
  try {
    const city = CITIES.find(c => c.name.toLowerCase() === cityName.toLowerCase());
    if (!city) {
      alert("Staden finns inte!");
      return null;
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Något gick fel med API-förfrågan.");
    }

    const data = await res.json();

    return { city, weather: data.current_weather };

  } catch (error) {
    console.error("Fel vid hämtning av väder:", error);
    alert("Kunde inte hämta väderdata just nu. Försök igen senare.");
    return null;
  }
}