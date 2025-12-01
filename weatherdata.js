// // Exempeldata
// export const CITIES = [
//   { name: "Berlin", lat: 52.52, lon: 13.4050 },
//   { name: "Stockholm", lat: 59.3294, lon: 18.0686 },
//   { name: "Göteborg", lat: 57.7089, lon: 11.9746 },
//   { name: "Malmö", lat: 55.6050, lon: 13.0038 },
//   { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
//   { name: "Seoul", lat: 37.5665, lon: 126.9780 },
//   { name: "Prague", lat: 50.0880, lon: 14.4208 },
//   { name: "Paris", lat: 48.8566, lon: 2.3522 },
//   { name: "London", lat: 51.5072, lon: -0.1276 },
//   { name: "Rome", lat: 41.9028, lon: 12.4964 },
//   { name: "Madrid", lat: 40.4168, lon: -3.7038 },
//   { name: "Oslo", lat: 59.9139, lon: 10.7522 },
//   { name: "Copenhagen", lat: 55.6761, lon: 12.5683 },
//   { name: "Helsinki", lat: 60.1699, lon: 24.9384 },
//   { name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
//   { name: "Lisbon", lat: 38.7167, lon: -9.1390 },
//   { name: "Vienna", lat: 48.2082, lon: 16.3738 },
//   { name: "Warsaw", lat: 52.2297, lon: 21.0122 },
//   { name: "Athens", lat: 37.9838, lon: 23.7275 },
//   { name: "Reykjavik", lat: 64.1355, lon: -21.8954 },
//   { name: "Malmö", country: "SE", lat: 55.6050, lon: 13.0038 },
//   { name: "Uppsala", country: "SE", lat: 59.8586, lon: 17.6389 },
//   { name: "Lund", country: "SE", lat: 55.7047, lon: 13.1910 },
// ];

// export async function getWeather(cityName) {
//   try {
//     const city = CITIES.find(c => c.name.toLowerCase() === cityName.toLowerCase());
//     if (!city) {
//       alert("Staden finns inte!");
//       return null;
//     }

//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`;
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error("Något gick fel med API-förfrågan.");
//     }

//     const data = await res.json();
//     console.log(data);
//     return { city, weather: data.current_weather };

//   } catch (error) {
//     console.error("Fel vid hämtning av väder:", error);
//     alert("Kunde inte hämta väderdata just nu. Försök igen senare.");
//     return null;
//   }
// }

export class ApiService {
  constructor(url) {
    this.url = url;
    this.data = null;
  }

  async fetchData() {
    try {
      const res = await fetch(this.url);
      if (!res.ok) throw new Error('Kunde inte hämta data');
      return await res.text();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
