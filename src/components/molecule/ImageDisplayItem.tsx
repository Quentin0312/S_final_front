import { JSXElement } from "solid-js";
import "./ImageDisplayItem.css";

export function ImageDisplayItem(props: { image: string }): JSXElement {
  return (
    <div class="image-display-item">
      <img src={`data:image/jpeg;base64,${props.image}`} width={"300px"} />
    </div>
  );
}
