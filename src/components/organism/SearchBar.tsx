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
  const [keyWord, setKeyWord] = createSignal<string>(""); // TODO: Update to use a list of keyword

  return (
    <div id="search-bar">
      <SearchBarKeyWordsInputs
        setKeyWord={setKeyWord}
        setCategories={setCategories}
        setImagesToDisplay={props.setImagesToDisplay}
      />
      <SearchBarCategoriesSelect
        getCategories={categories}
        getKeyWord={keyWord}
        setImagesToDisplay={props.setImagesToDisplay}
      />
    </div>
  );
}
