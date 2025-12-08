// __tests__/weatherdata.test.js

import * as weatherData from "../assets/weatherdata.js";

// Mocka direkt på det importerade objektet (funkar om det är named exports)
jest.spyOn(weatherData, "findCityByName").mockImplementation((name) => {
  const lower = name.toLowerCase();
  return weatherData.allCities.find(
    (city) => city.name.toLowerCase() === lower
  );
});

test("findCityByName hittar stad oavsett skiftläge", () => {
  // Sätt en kontrollerad lista först
  weatherData.allCities = [
    { name: "Stockholm", lat: 59.3293, lon: 18.0686 },
    { name: "Göteborg", lat: 57.7089, lon: 11.9746 },
  ];

  expect(weatherData.findCityByName("stockholm")).toEqual(
    weatherData.allCities[0]
  );
  expect(weatherData.findCityByName("GÖTEBORG")).toEqual(
    weatherData.allCities[1]
  );
  expect(weatherData.findCityByName("malmö")).toBeUndefined();
});
