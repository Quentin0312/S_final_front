import { Accessor, For, JSXElement, Setter, createSignal } from "solid-js";
import { SearchBarUtils } from "../../utils/SearchBar.utils";
import { SearchService } from "../../_services/search.service";

type OnChangeSelectType = Event & {
  currentTarget: HTMLSelectElement;
  target: HTMLSelectElement;
};

interface SearchBarCategoriesSelectProps {
  getCategories: Accessor<number[]>;
  getKeyWord: Accessor<string>;
  setImagesToDisplay: Setter<string[]>;
}

export function SearchBarCategoriesSelect(
  props: SearchBarCategoriesSelectProps
): JSXElement {
  return (
    <div>
      <select
        id="categories"
        name="categories"
        onChange={(e) =>
          onChangeCategory(e, props.getKeyWord, props.setImagesToDisplay)
        }
      >
        <option value={-1}>Veuillez selectionner une catégorie</option>
        <For each={props.getCategories()}>
          {(category) => (
            <option value={category}>
              {SearchBarUtils.getCategoryName(category)}
            </option>
          )}
        </For>
      </select>
    </div>
  );
}

async function onChangeCategory(
  e: OnChangeSelectType,
  keyWord: Accessor<string>,
  setImagesToDisplay: Setter<string[]>
) {
  const response = await SearchService.search(
    [keyWord()],
    Number(e.target.value)
  );

  setImagesToDisplay(response.list_image_base64);
}
