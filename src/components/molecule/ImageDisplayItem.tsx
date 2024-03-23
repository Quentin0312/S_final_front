import { JSXElement } from "solid-js";
import "./ImageDisplayItem.css";

export function ImageDisplayItem(props: { image: string }): JSXElement {
  return (
    <div>
      <img src={`data:image/jpeg;base64,${props.image}`} />
      <div>TEST</div>
    </div>
  );
}
