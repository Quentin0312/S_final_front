import { Accessor, For, JSXElement } from "solid-js";
import "./ImagesDisplay.css";
import { ImageDisplayItem } from "../molecule/ImageDisplayItem";

interface ImagesDisplayProps {
  getImagesToDisplay: Accessor<string[]>;
}

// TODO: Do not use raw value for img height
// TODO: Mettre en place des alt
export function ImagesDisplay(props: ImagesDisplayProps): JSXElement {
  return (
    <div
      id="images-display"
      class={props.getImagesToDisplay().length != 0 ? "overflow-x-scroll" : ""}
    >
      <For each={props.getImagesToDisplay()}>
        {(image) => <ImageDisplayItem image={image} />}
      </For>
    </div>
  );
}
