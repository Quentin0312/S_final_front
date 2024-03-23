import { Accessor, JSXElement, Setter } from "solid-js";
import { SearchService } from "../../_services/search.service";

type OnChangeInputType = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

interface SearchBarKeyWordsInputsProps {
  setKeyWords: Setter<string[]>;
  getKeyWords: Accessor<string[]>;
  setCategories: Setter<number[]>;
  setImagesToDisplay: Setter<string[]>;
}

export function SearchBarKeyWordsInputs(
  props: SearchBarKeyWordsInputsProps
): JSXElement {
  return (
    <div>
      <input
        type="text"
        id="keyword"
        name="keyword"
        placeholder="Entrez un mots clés"
        onChange={(e) =>
          onChangeKeyWords(
            e,
            props.setKeyWords,
            props.getKeyWords,
            props.setCategories,
            props.setImagesToDisplay
          )
        }
      />
    </div>
  );
}

// TODO: Adapt to work with multiple key_words
async function onChangeKeyWords(
  e: OnChangeInputType,
  setKeyWords: Setter<string[]>,
  getKeyWords: Accessor<string[]>,
  setCategories: Setter<number[]>,
  setImagesToDisplay: Setter<string[]>
): Promise<void> {
  const keyWordValue = e.target.value;
  if (keyWordValue == "") return;

  // Add new keyWord to keyWords()
  setKeyWords((prev) => {
    const keyWords = [...prev];
    keyWords.push(keyWordValue);
    return keyWords;
  });

  // TODO: Refactor
  // Send keyWords to back
  const response = await SearchService.search(getKeyWords(), -1);

  // Display only available category in selectbox
  setCategories(response.categories);

  // Display images
  setImagesToDisplay(response.list_image_base64);

  // Reset input value
  e.target.value = "";
}
