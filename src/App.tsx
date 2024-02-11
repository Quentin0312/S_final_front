import { createSignal, type Component, For, JSXElement } from "solid-js";
import { SearchBar } from "./components/organism/SearchBar";

// TODO: Changer le favicon

export function App(): JSXElement {
  const [imagesToDisplay, setImagesToDisplay] = createSignal<string[]>([]);
  // TODO: Do not use raw value for img height
  // TODO: Mettre en place des alt
  return (
    <>
      <SearchBar setImagesToDisplay={setImagesToDisplay} />
      {/* TODO: Create ImagesDisplay component */}
      <div class="flex">
        <For each={imagesToDisplay()}>
          {(image) => (
            <img src={`data:image/jpeg;base64,${image}`} width={"300px"}></img>
          )}
        </For>
      </div>
    </>
  );
}
