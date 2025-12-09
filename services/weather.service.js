import { ApiService } from "./api.service.js";
import { API_CONFIG, messages } from "../config/constants.js";

class WeatherService {
  constructor() {
    this.api = new ApiService(API_CONFIG.BASE_URL);
    this.cities = [];
    this.isLoaded = false;
  }

  // Ladda alla städer
  async loadCities() {
    if (this.isLoaded) {
      return this.cities;
    }
    try {
      this.cities = await this.api.get(API_CONFIG.ENDPOINTS.CITIES);
      this.isLoaded = true;
      console.log(`Laddar ${this.cities.length} städer`);
      return this.cities;
    } catch (error) {
      console.error("Kan inte hämta städer:", error);
      throw new Error(messages);
    }
  }

  //Matcha stadnamn med Lon, lat
  findCityByName(name) {
    if (!name || typeof name !== "string") {
      return null;
    }

    const normalCityName = name.trim().toLowerCase();
    return (
      this.cities.find((city) => city.name.toLowerCase() === normalCityName) ||
      null
    );
  }

  // Väder data till stad
  async getWeatherForCity(cityName) {
    const city = this.findCityByName(cityName);

    if (!city) {
      console.warn(`Stad finns inte: ${cityName}`);
      return null;
    }

    try {
      const weatherData = await this.api.get(API_CONFIG.ENDPOINTS.WEATHER, {
        lat: city.latitude,
        lon: city.longitude,
      });

      const weather = this._parseWeatherData(weatherData);

      return { city, weather };
    } catch (error) {
      console.error(`Kunde inte fetcha väder till ${cityName}:`, error);
      throw new Error(messages);
    }
  }

  _parseWeatherData(data) {
    const current = data.current;
    const weatherCode = current.weather_code;

    return {
      temperature: current.temperature_2m,
      weatherCode: weatherCode,
      desciption: convertWmoCode(weatherCode),
      time: formatWeatherTime(current.time),
      rawTime: current.time,
    };
  }

  // Hämta alla städer
  getAllCities() {
    return [...this.cities];
  }

  searchCities(query, limit = 5) {
    if (!query || typeof query !== "string") {
      return [];
    }

    const normalQuery = query.trim().toLowerCase();

    return this.cities
      .filter((city) => city.name.toLowerCase().includes(normalQuery))
      .slice(0, limit);
  }
}

export const weatherService = new WeatherService();