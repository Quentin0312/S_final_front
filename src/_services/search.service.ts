import { ServiceUtils } from "./_utils.service";

export type ImageToDisplayType = {
  image: string;
  startDate: string;
  endDate: string;
  idCatalog: string;
};

type SearchResponseType = {
  categories: number[];
  list_image_base64: ImageToDisplayType[];
};

type ImportantImagesResponseType = {
  first_image: string;
  last_image: string;
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

  static async getImportantImages(
    id_catalog: string
  ): Promise<ImportantImagesResponseType> {
    return await ServiceUtils.post("get_important_pages", {
      id_catalog,
    });
  }
}
