// TODO: Récup depuis l'environnement
const backBaseURL = "http://127.0.0.1:8000/";

export class ServiceUtils {
  static async generic(urlEnd: string, options = {}) {
    let response: Response;
    try {
      response = await fetch(backBaseURL + urlEnd, { ...options });
    } catch (error) {
      // TODO: Setup corresponding actions
      console.log("Error:", error);
      return false;
    }
    return await response.json();
  }

  static async post(endURL: string, data: object) {
    const headers = {
      "Content-Type": "application/json",
    };

    return await this.generic(endURL, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
  }
}
