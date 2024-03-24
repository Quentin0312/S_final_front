import { JSXElement } from "solid-js";
import "./ImageDisplayItem.css";
import { CatalogDates } from "../atom/CatalogDates";
import { setImageToDisplayInModal } from "../layout/Explorer";

export function ImageDisplayItem(props: { image: string }): JSXElement {
  function onClick() {
    setImageToDisplayInModal({
      image: props.image,
      startDate: "todo",
      endDate: "todo",
    });
  }

  return (
    <div>
      <img src={`data:image/jpeg;base64,${props.image}`} onClick={onClick} />
      <CatalogDates />
    </div>
  );
}
