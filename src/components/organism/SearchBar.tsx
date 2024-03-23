import { JSXElement, Setter, createSignal } from "solid-js";
import { SearchBarKeyWordsInputs } from "../atom/SearchBarKeyWordsInputs";
import { SearchBarCategoriesSelect } from "../atom/SearchBarCategoriesSelect";

import "./SearchBar.css";

type SearchBarPropsType = {
  setImagesToDisplay: Setter<string[]>;
};

// TODO: Setup "tags" system to use multiple keywords
export function SearchBar(props: SearchBarPropsType): JSXElement {
  const [categories, setCategories] = createSignal<number[]>([]);
  const [keyWords, setKeyWords] = createSignal<string[]>([]);

  return (
    <div id="search-bar">
      <SearchBarKeyWordsInputs
        setKeyWords={setKeyWords}
        getKeyWords={keyWords}
        setCategories={setCategories}
        setImagesToDisplay={props.setImagesToDisplay}
      />
      <SearchBarCategoriesSelect
        getCategories={categories}
        getKeyWords={keyWords}
        setImagesToDisplay={props.setImagesToDisplay}
      />
    </div>
  );
}
