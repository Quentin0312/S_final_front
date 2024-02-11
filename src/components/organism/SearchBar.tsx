import { For, JSXElement, Setter, createSignal } from "solid-js";
import { SearchService } from "../../_services/search.service";
import { SearchBarUtils } from "../../utils/SearchBar.utils";
import { SearchBarKeyWordsInputs } from "../molecule/SearchBarKeyWordsInputs";

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

  async function onChangeCategory(e: OnChangeSelectType) {
    setSelectedCategory(Number(e.target.value));
    const response = await SearchService.search(
      [keyWord()],
      selectedCategory()
    );
    props.setImagesToDisplay(response.list_image_base64);
  }

  return (
    <>
      {/* TODO: Put in css file */}
      <div class="flex">
        <SearchBarKeyWordsInputs
          setKeyWord={setKeyWord}
          setCategories={setCategories}
          setImagesToDisplay={props.setImagesToDisplay}
        />
        {/* Make SearchBarCategoriesSelect */}
        <div>
          <select id="categories" name="categories" onChange={onChangeCategory}>
            <option value={-1}>Veuillez selectionner une catégorie</option>
            <For each={categories()}>
              {/* TODO: Display category name */}
              {(category) => (
                <option value={category}>
                  {SearchBarUtils.getCategoryName(category)}
                </option>
              )}
            </For>
          </select>
        </div>
      </div>
    </>
  );
}
