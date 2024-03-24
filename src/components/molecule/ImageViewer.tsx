import { JSXElement } from "solid-js";
import { setImageToDisplayInModal } from "../layout/Explorer";
import "./ImageViewer.css";
import { ImageToDisplayType } from "../../_services/search.service";

export function ImageViewer(props: {
  imageToDisplay: ImageToDisplayType;
}): JSXElement {
  return (
    <div id="modal" onclick={() => setImageToDisplayInModal()}>
      <div>
        {/* TODO: Externalie in another file */}
        <div class="text-white">
          Du {props.imageToDisplay.startDate} au {props.imageToDisplay.endDate}
        </div>

        {/* TODO: Afficher première page du catalog correspondant */}
        <div class="text-white">IMage 1</div>

        {/* TODO: Afficher dernière page du catalog correspondant */}
        <div class="text-white">IMage 2</div>
      </div>
      <img
        class="modal-content"
        src={`data:image/jpeg;base64,${props.imageToDisplay.image}`}
      />
    </div>
  );
}
