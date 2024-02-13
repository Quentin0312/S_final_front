import { JSXElement, Setter } from "solid-js";
import { SearchService } from "../../_services/search.service";

type OnChangeInputType = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

interface SearchBarKeyWordsInputsProps {
  setKeyWord: Setter<string>;
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
            props.setKeyWord,
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
  setKeyWord: Setter<string>,
  setCategories: Setter<number[]>,
  setImagesToDisplay: Setter<string[]>
) {
  const keyWordValue = e.target.value;
  setKeyWord(keyWordValue);
  // Display only available category in selectbox
  const response = await SearchService.search([keyWordValue], -1);
  setCategories(response.categories);
  setImagesToDisplay(response.list_image_base64);
}
