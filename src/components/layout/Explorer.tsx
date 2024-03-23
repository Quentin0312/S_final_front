import { JSXElement, createSignal } from "solid-js";
import { ImagesDisplay } from "../organism/ImagesDisplay";
import { SearchBar } from "../organism/SearchBar";

export function Explorer(): JSXElement {
  const [imagesToDisplay, setImagesToDisplay] = createSignal<string[]>([]);

  return (
    <div>
      <SearchBar setImagesToDisplay={setImagesToDisplay} />
      <ImagesDisplay getImagesToDisplay={imagesToDisplay} />
    </div>
  );
}
