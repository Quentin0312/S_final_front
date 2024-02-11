import { Accessor, For, JSXElement } from "solid-js";
import "./ImagesDisplay.css";

interface ImagesDisplayProps {
  getImagesToDisplay: Accessor<string[]>;
}

// TODO: Do not use raw value for img height
// TODO: Mettre en place des alt
export function ImagesDisplay(props: ImagesDisplayProps): JSXElement {
  return (
    <div id="images-display">
      <For each={props.getImagesToDisplay()}>
        {(image) => (
          <img src={`data:image/jpeg;base64,${image}`} width={"300px"}></img>
        )}
      </For>
    </div>
  );
}
