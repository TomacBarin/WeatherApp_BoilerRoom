export const API_CONFIG = {
  METEO:
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe/Berlin",
  BASE_URL: "http://kontoret.onvo.se:10480",
  ENDPOINTS: {
    CITIES: "/GetCities",
    WEATHER: "/GetWeather",
  },
};

// "Weather code" för ikon mapping
export const WEATHER_ICONS = {
  0: "partly-cloudy.png",
  1: "partly-cloudy.png",
  2: "mostly-cloudy.png",
  3: "rain.png",
  45: "mostly-cloudy.png",
  48: "mostly-cloudy.png",
  51: "partly-cloudy-rain.png",
  53: "partly-cloudy-rain.png",
  55: "partly-cloudy-rain.png",
  61: "rain.png",
  63: "rain.png",
  65: "rain.png",
  71: "mostly-cloudy.png",
  73: "mostly-cloudy.png",
  75: "mostly-cloudy.png",
  95: "thunderstorm.png",
  96: "thunderstorm.png",
  99: "thunderstorm.png",
};

export const defaultWeatherIcon = "partly-cloudy.png";

// "Weather Code" för väder beskrivning
export const weatherDesciption = {
  0: "Klart",
  1: "Lätt molnigt",
  2: "Molnigt",
  3: "Mulet",
  45: "Dimma",
  48: "Dimma",
  51: "Duggregn",
  53: "Duggregn",
  55: "Duggregn",
  61: "Regn",
  63: "Regn",
  65: "Regn",
  71: "Snöfall",
  73: "Snöfall",
  75: "Snöfall",
  95: "Åska",
  96: "Åska",
  99: "Åska",
};

export const defaultWeatherDescription = 'Okänt väder';

// Användar meddelande
export const messages = {
  CITY_NOT_FOUND: 'Staden finns inte i listan.',
  FETCH_CITIES_ERROR: 'Kunde inte hämta städer. Försök igen senare.',
  FETCH_WEATHER_ERROR: 'Kunde inte hämta väderdata. Försök igen senare.',
  CITY_ALREADY_ADDED: 'Staden är redan tillagd.',
  EMPTY_INPUT: 'Ange ett stadsnamn.'
};