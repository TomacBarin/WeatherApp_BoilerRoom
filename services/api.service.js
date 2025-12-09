export class ApiService {
    constructor(baseUrl = '') {
        this.baseUrl = baseUrl;
    }

    async fetchData() {
        try {
            const res = await fetch(this.baseUrl);
            if(!res.ok) throw new Error('Kunde inte hämta data');
            return await res.json();
        } catch (error) {
            console.error(`API Error (${this.baseUrl}):` , error);
            throw error;
        }
    }
}