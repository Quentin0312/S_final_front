import { For, JSXElement, Setter, createSignal } from "solid-js";
import { SearchService } from "../../_services/search.service";

type OnChangeInputType = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

type OnChangeSelectType = Event & {
  currentTarget: HTMLSelectElement;
  target: HTMLSelectElement;
};

type SearchBarPropsType = {
  setImagesToDisplay: Setter<string[]>;
};

// TODO: Create molecules and atoms files
// TODO: Setup "tags" system to use multiple keywords
export function SearchBar(props: SearchBarPropsType): JSXElement {
  const [categories, setCategories] = createSignal<number[]>([]);
  const [keyWord, setKeyWord] = createSignal<string>(""); // TODO: Update to use a list of keyword
  const [selectedCategory, setSelectedCategory] = createSignal<number>(-1);

  // TODO: Adapt to work with multiple key_words
  async function onChangeKeyWords(e: OnChangeInputType) {
    const keyWordValue = e.target.value;
    setKeyWord(keyWordValue);
    // Display only available category in selectbox
    const response = await SearchService.search([keyWordValue], -1);
    setCategories(response.categories);
    props.setImagesToDisplay(response.list_image_base64);
  }

  async function onChangeCategory(e: OnChangeSelectType) {
    setSelectedCategory(Number(e.target.value));
    const response = await SearchService.search(
      [keyWord()],
      selectedCategory()
    );
    props.setImagesToDisplay(response.list_image_base64);
  }

  enum CategoryNameEnum {
    Meubles,
    Electromenager,
    Multimédia,
    Exterieur,
    Papeterie,
    Telephone,
    Informatique,
    GrandeDistribution,
    Bricolage,
    Culture,
    Sport,
    Bebe,
    BienEtre,
    Vehicule,
    Jouets,
  }

  // TODO: Put in utils AND CLEAN
  function getCategoryName(idCategory: CategoryNameEnum) {
    const dict_mapping = {
      0: "Meubles",
      1: "Électroménager",
      2: "Multimédia",
      3: "Exterieur",
      4: "Papeterie",
      5: "Téléphone",
      6: "Informatique",
      7: "Grande distribution",
      8: "Bricolage",
      9: "Culture",
      10: "Mode",
      11: "Sport",
      12: "Bébé",
      13: "Bien être",
      14: "Véhicule",
      15: "Jouets",
    };

    return dict_mapping[idCategory];
  }
  return (
    <>
      {/* TODO: Put in css file */}
      <div class="flex">
        {/* Make SearchBarKeyWordsInputs.tsx */}
        <div>
          <label for="keyword">Entrez un mots clés:</label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            onChange={onChangeKeyWords}
          />
        </div>
        {/* Make SearchBarCategoriesSelect */}
        <div>
          <select id="categories" name="categories" onChange={onChangeCategory}>
            <option value={-1}>Veuillez selectionner une catégorie</option>
            <For each={categories()}>
              {/* TODO: Display category name */}
              {(category) => (
                <option value={category}>{getCategoryName(category)}</option>
              )}
            </For>
          </select>
        </div>
      </div>
    </>
  );
}
