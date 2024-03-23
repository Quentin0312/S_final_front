import { For, JSXElement, Setter, Show, createSignal } from "solid-js";
import { SearchBarKeyWordsInputs } from "../atom/SearchBarKeyWordsInputs";
import { SearchBarCategoriesSelect } from "../atom/SearchBarCategoriesSelect";

import "./SearchBar.css";
import { KeyWords } from "../molecule/KeyWords";

type SearchBarPropsType = {
  setImagesToDisplay: Setter<string[]>;
};

// TODO: Setup "tags" system to use multiple keywords
export function SearchBar(props: SearchBarPropsType): JSXElement {
  const [categories, setCategories] = createSignal<number[]>([]);
  const [keyWords, setKeyWords] = createSignal<string[]>([]);

  return (
    <div id="search-bar-container">
      <div id="search-bar">
        <SearchBarKeyWordsInputs
          setKeyWords={setKeyWords}
          getKeyWords={keyWords}
          setCategories={setCategories}
          setImagesToDisplay={props.setImagesToDisplay}
        />

        <Show when={keyWords().length > 0}>
          <KeyWords
            getKeyWords={keyWords}
            setKeyWords={setKeyWords}
            setCategories={setCategories}
            setImagesToDisplay={props.setImagesToDisplay}
          />
        </Show>

        <SearchBarCategoriesSelect
          getCategories={categories}
          getKeyWords={keyWords}
          setImagesToDisplay={props.setImagesToDisplay}
        />
      </div>
    </div>
  );
}
