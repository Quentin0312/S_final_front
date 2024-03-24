import { Accessor, For, JSXElement } from "solid-js";
import "./ImagesDisplay.css";
import { ImageDisplayItem } from "../molecule/ImageDisplayItem";
import { ImageToDisplayType } from "../../_services/search.service";

interface ImagesDisplayProps {
  getImagesToDisplay: Accessor<ImageToDisplayType[]>;
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
