import { JSXElement, Show, createSignal } from "solid-js";
import { ImagesDisplay } from "../organism/ImagesDisplay";
import { SearchBar, keyWords } from "../organism/SearchBar";
import { ImageToDisplayType } from "../../_services/search.service";

export const [imageToDisplayInModal, setImageToDisplayInModal] =
  createSignal<ImageToDisplayType>();

export function Explorer(): JSXElement {
  const [imagesToDisplay, setImagesToDisplay] = createSignal<
    ImageToDisplayType[]
  >([]);

  return (
    <div>
      <SearchBar setImagesToDisplay={setImagesToDisplay} />
      <ImagesDisplay getImagesToDisplay={imagesToDisplay} />
      <Show when={keyWords().length > 0 && imagesToDisplay().length == 0}>
        <div class="flex justify-center text-2xl items-center h-32">
          <div>Pas de résultat !</div>
        </div>
      </Show>
    </div>
  );
}
