import { JSXElement, createEffect, createSignal, on } from "solid-js";

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
      <div>
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
          <label for="categories">Entrez un mots clés:</label>
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
