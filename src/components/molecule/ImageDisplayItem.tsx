import { JSXElement } from "solid-js";
import "./ImageDisplayItem.css";
import { CatalogDates } from "../atom/CatalogDates";

export function ImageDisplayItem(props: { image: string }): JSXElement {
  return (
    <div>
      <img src={`data:image/jpeg;base64,${props.image}`} />
      <CatalogDates />
    </div>
  );
}
