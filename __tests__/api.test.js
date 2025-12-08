// __tests__/api.test.js
import { ApiService } from "../assets/api.js";

// Mocka fetch globalt
global.fetch = jest.fn();

describe("ApiService", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetchData hämtar data och returnerar json vid lyckat svar", async () => {
    const mockData = { city: "Stockholm", temp: 15 };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const api = new ApiService("http://fake-url.se");
    const result = await api.fetchData();

    expect(fetch).toHaveBeenCalledWith("http://fake-url.se");
    expect(result).toEqual(mockData);
  });

  test("fetchData kastar fel vid network error", async () => {
    fetch.mockRejectedValueOnce(new Error("Network error"));

    const api = new ApiService("http://fake-url.se");

    await expect(api.fetchData()).rejects.toThrow("Network error");
  });

  test("fetchData kastar fel om responsen inte är ok", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
    });

    const api = new ApiService("http://fake-url.se");

    await expect(api.fetchData()).rejects.toThrow("Kunde inte hämta data");
  });
});
