import { JSXElement } from "solid-js";
import "./ImageDisplayItem.css";
import { CatalogDates } from "../atom/CatalogDates";
import { setImageToDisplayInModal } from "../layout/Explorer";
import { ImageToDisplayType } from "../../_services/search.service";

export function ImageDisplayItem(props: {
  image: ImageToDisplayType;
}): JSXElement {
  function onClick() {
    setImageToDisplayInModal({
      image: props.image.image,
      startDate: props.image.startDate,
      endDate: props.image.endDate,
      idCatalog: props.image.idCatalog,
    });
  }

  return (
    <div>
      <img
        src={`data:image/jpeg;base64,${props.image.image}`}
        onClick={onClick}
      />
      <CatalogDates
        startDate={props.image.startDate}
        endDate={props.image.endDate}
      />
    </div>
  );
}
