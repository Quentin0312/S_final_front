import { createSignal, type Component, createEffect, Show } from "solid-js";

// TODO: Changer le favicon

const App: Component = () => {
  const [imageUrl, setImageUrl] = createSignal<string>("");

  async function onChange(
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) {
    const keyword = e.target.value;
    console.log("keyword =>", keyword);

    // TODO: Setup a service
    fetch(`http://127.0.0.1:8000/search/${keyword}`)
      .then((response) => response.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching the image:", error);
      });
  }
  // TODO: Do not use raw value for img height
  return (
    <>
      <div>
        <label for="keyword">Entrez un mots clés:</label>

        <input type="text" id="keyword" name="keyword" onChange={onChange} />
      </div>
      <Show when={imageUrl()}>
        <img src={imageUrl()} height={"750px"}></img>
      </Show>
    </>
  );
};

export default App;
