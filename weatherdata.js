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
