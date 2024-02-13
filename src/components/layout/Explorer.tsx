import { JSXElement, createSignal } from "solid-js";
import { ImagesDisplay } from "../organism/ImagesDisplay";
import { SearchBar } from "../organism/SearchBar";
import "./Explorer.css";

export function Explorer(): JSXElement {
  const [imagesToDisplay, setImagesToDisplay] = createSignal<string[]>([]);

  return (
    <div id="explorer-layout">
      <SearchBar setImagesToDisplay={setImagesToDisplay} />
      <ImagesDisplay getImagesToDisplay={imagesToDisplay} />
    </div>
  );
}
