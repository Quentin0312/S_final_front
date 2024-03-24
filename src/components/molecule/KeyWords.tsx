import { Accessor, For, JSXElement, Setter } from "solid-js";
import { KeyWord } from "../atom/KeyWord";
import { ImageToDisplayType } from "../../_services/search.service";

type KeyWordsProps = {
  getKeyWords: Accessor<string[]>;
  setKeyWords: Setter<string[]>;
  setCategories: Setter<number[]>;
  setImagesToDisplay: Setter<ImageToDisplayType[]>;
};

export function KeyWords(props: KeyWordsProps): JSXElement {
  return (
    <For each={props.getKeyWords()}>
      {(keyWord) => (
        <KeyWord
          keyWord={keyWord}
          setKeyWords={props.setKeyWords}
          getKeyWords={props.getKeyWords}
          setCategories={props.setCategories}
          setImagesToDisplay={props.setImagesToDisplay}
        />
      )}
    </For>
  );
}
