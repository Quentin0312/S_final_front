import { Accessor, JSXElement, Setter } from "solid-js";
import "./KeyWord.css";
import {
  ImageToDisplayType,
  SearchService,
} from "../../_services/search.service";

type KeyWordProps = {
  keyWord: string;
  setKeyWords: Setter<string[]>;
  getKeyWords: Accessor<string[]>;
  setCategories: Setter<number[]>;
  setImagesToDisplay: Setter<ImageToDisplayType[]>;
};

export function KeyWord(props: KeyWordProps): JSXElement {
  return (
    <div
      class="key-word"
      onClick={() =>
        onClick(
          props.keyWord,
          props.setKeyWords,
          props.getKeyWords,
          props.setCategories,
          props.setImagesToDisplay
        )
      }
    >
      {props.keyWord}
    </div>
  );
}

async function onClick(
  targetKeyWord: string,
  setKeyWords: Setter<string[]>,
  getKeyWords: Accessor<string[]>,
  setCategories: Setter<number[]>,
  setImagesToDisplay: Setter<ImageToDisplayType[]>
): Promise<void> {
  // Remove targetKeyWord from keyWords()
  setKeyWords((prev) => {
    const keyWords = [...prev];
    return keyWords.filter((keyWord) => keyWord != targetKeyWord);
  });

  if (getKeyWords().length == 0) {
    setCategories([]);
    setImagesToDisplay([]);
  } else {
    // TODO: Refactor
    // Send keyWords to back
    const response = await SearchService.search(getKeyWords(), -1);

    // Display only available category in selectbox
    setCategories(response.categories);

    // Display images
    setImagesToDisplay(response.list_image_base64);
  }
}
