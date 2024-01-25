// TODO: Récup depuis l'environnement
const backBaseURL = "http://127.0.0.1:8000/";

type APISearchResponseType = {
  key_word: string;
  first_text_content: string;
  image_base64: string;
};

export class ServiceApi {
  static async GET(endURL: string): Promise<any> {
    try {
      const response = await fetch(backBaseURL + endURL);
      const data = await response.json();
      return data;
    } catch (error) {
      // TODO: Setup error actions (display message !?)
    }
  }
  // TODO: Add response type
  // TODO: Use post to send multiple keyWords in body !
  static async getCategoriesLinked(keyWord: string): Promise<any> {
    return await ServiceApi.GET(`search/${keyWord}`);
  }
}
