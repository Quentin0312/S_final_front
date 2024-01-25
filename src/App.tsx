import { createSignal, type Component, createEffect, Show } from "solid-js";
import { SearchBar } from "./components/organism/SearchBar";

// TODO: Changer le favicon

// const [imageData, setImageData] = createSignal<string>();

const App: Component = () => {
  const [imageToDisplay, setImageToDisplay] = createSignal();
  // async function onChange(
  //   e: Event & {
  //     currentTarget: HTMLInputElement;
  //     target: HTMLInputElement;
  //   }
  // ) {
  //   const keyword = e.target.value;
  //   console.log("keyword =>", keyword);

  //   // TODO: Setup a service
  //   const response = await fetch(`http://127.0.0.1:8000/search/${keyword}`);
  //   const data = await response.json();
  //   setImageData(data.image_base64);
  // }
  // TODO: Do not use raw value for img height
  // TODO: Mettre en place des alt
  return (
    <>
      <SearchBar />
      {/* <Show when={imageData()}>
        <img
          src={`data:image/jpeg;base64,${imageData()}`}
          height={"750px"}
        ></img>
      </Show> */}
    </>
  );
};

export default App;
