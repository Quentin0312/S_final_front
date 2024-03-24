import { JSXElement, createSignal } from "solid-js";
import { ImagesDisplay } from "../organism/ImagesDisplay";
import { SearchBar } from "../organism/SearchBar";
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
    </div>
  );
}
