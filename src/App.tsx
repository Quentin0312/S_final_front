import { createSignal, type Component, For } from "solid-js";
import { SearchBar } from "./components/organism/SearchBar";

// TODO: Changer le favicon

const App: Component = () => {
  const [imagesToDisplay, setImagesToDisplay] = createSignal([]);
  // TODO: Do not use raw value for img height
  // TODO: Mettre en place des alt
  return (
    <>
      {/* @ts-ignore */}
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
};

export default App;
