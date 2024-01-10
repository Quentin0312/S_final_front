import { createSignal, type Component, createEffect, Show } from "solid-js";

// TODO: Changer le favicon

const App: Component = () => {
  const [imageData, setImageData] = createSignal<string>();

  async function onChange(
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) {
    const keyword = e.target.value;
    console.log("keyword =>", keyword);

    // TODO: Setup a service
    const response = await fetch(`http://127.0.0.1:8000/search/${keyword}`);
    const data = await response.json();
    setImageData(data.image_base64);
  }
  // TODO: Do not use raw value for img height
  // TODO: Mettre en place des alt
  return (
    <>
      <div>
        <label for="keyword">Entrez un mots clés:</label>

        <input type="text" id="keyword" name="keyword" onChange={onChange} />
      </div>
      <Show when={imageData()}>
        <img
          src={`data:image/jpeg;base64,${imageData()}`}
          height={"750px"}
        ></img>
      </Show>
    </>
  );
};

export default App;
