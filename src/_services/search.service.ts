import { ServiceUtils } from "./_utils.service";

type SearchResponseType = { categories: number[]; list_image_base64: string[] };

export class SearchService {
  static async search(
    keyWords: string[],
    category: number
  ): Promise<SearchResponseType> {
    return await ServiceUtils.post("search", {
      key_words: keyWords,
      category,
    });
  }
}
