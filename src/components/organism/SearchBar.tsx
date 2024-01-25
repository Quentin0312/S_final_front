import { JSXElement, createEffect, createSignal } from "solid-js";
import { ServiceApi } from "../../service";

type OnChangeInputType = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

type OnChangeSelectType = Event & {
  currentTarget: HTMLSelectElement;
  target: HTMLSelectElement;
};

// TODO: Create molecules and atoms files
export function SearchBar(): JSXElement {
  const [categories, setCategories] = createSignal<number[]>([]);
  const [keyWord, setKeyWord] = createSignal<string>(""); // Update to use a list of keyword
  const [selectedCategory, setSelectedCategory] = createSignal<number>();

  createEffect(() => {
    /* React on keyWord() and selectedCategory() changes */
  });

  async function onChangeKeyWords(e: OnChangeInputType) {
    const keyWordValue = e.target.value;
    setKeyWord(keyWordValue);
    // Display only available category in selectbox
    const rawCategoriesLinked: number[] = await ServiceApi.getCategoriesLinked(
      keyWordValue
    );
    setCategories(rawCategoriesLinked);
    console.log("Categories linked:" + rawCategoriesLinked);
  }

  async function onChangeCategories(e: OnChangeSelectType) {
    console.log("TODO");
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
          <select
            id="categories"
            name="categories"
            onChange={onChangeCategories}
          >
            <option value="">Veuillez selectionner une catégorie</option>
          </select>
        </div>
      </div>
    </>
  );
}
