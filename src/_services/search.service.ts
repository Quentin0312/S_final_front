import { ServiceUtils } from "./_utils.service";

export type ImageToDisplayType = {
  image: string;
  startDate: string;
  endDate: string;
};

type SearchResponseType = {
  categories: number[];
  list_image_base64: ImageToDisplayType[];
};

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
