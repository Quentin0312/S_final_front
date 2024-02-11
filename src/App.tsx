import { createSignal, type Component, For, JSXElement } from "solid-js";
import { SearchBar } from "./components/organism/SearchBar";
import { ImagesDisplay } from "./components/organism/ImagesDisplay";

// TODO: Changer le favicon

export function App(): JSXElement {
  const [imagesToDisplay, setImagesToDisplay] = createSignal<string[]>([]);
  return (
    <>
      <SearchBar setImagesToDisplay={setImagesToDisplay} />
      <ImagesDisplay getImagesToDisplay={imagesToDisplay} />
    </>
  );
}
