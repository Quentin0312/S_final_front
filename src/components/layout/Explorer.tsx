import { JSXElement, createSignal } from "solid-js";
import { ImagesDisplay } from "../organism/ImagesDisplay";
import { SearchBar } from "../organism/SearchBar";

// TODO: Make it contain dates ! Use this type =>
export type ImageToDisplayType = {
  image: string;
  startDate: string;
  endDate: string;
};
export const [imageToDisplayInModal, setImageToDisplayInModal] =
  createSignal<ImageToDisplayType>();

export function Explorer(): JSXElement {
  const [imagesToDisplay, setImagesToDisplay] = createSignal<string[]>([]);

  return (
    <div>
      <SearchBar setImagesToDisplay={setImagesToDisplay} />
      <ImagesDisplay getImagesToDisplay={imagesToDisplay} />
    </div>
  );
}
