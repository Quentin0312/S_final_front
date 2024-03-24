import { JSXElement, createSignal, onMount } from "solid-js";
import {
  imageToDisplayInModal,
  setImageToDisplayInModal,
} from "../layout/Explorer";
import "./ImageViewer.css";
import {
  ImageToDisplayType,
  SearchService,
} from "../../_services/search.service";

export function ImageViewer(props: {
  imageToDisplay: ImageToDisplayType;
}): JSXElement {
  const [firstImage, setFirstImage] = createSignal("");
  // const [lastImage, setLastImage] = createSignal("");

  onMount(async () => {
    console.log("onMount");
    const response = await SearchService.getImportantImages(
      imageToDisplayInModal()?.idCatalog as string
    );
    console.log("response", response);
    setFirstImage(response.first_image);
    // setLastImage(response.last_image);
  });

  return (
    <div id="modal" onclick={() => setImageToDisplayInModal()}>
      <div class="flex items-center ml-10">
        <div>
          {/* TODO: Afficher première page du catalog correspondant */}
          <div>
            <img src={`data:image/jpeg;base64,${firstImage()}`} />
          </div>
          {/* TODO: Externalie in another file */}
          <div class="flex justify-center">
            <div class="text-white">
              Du {props.imageToDisplay.startDate} au{" "}
              {props.imageToDisplay.endDate}
            </div>
          </div>

          {/* TODO: Afficher dernière page du catalog correspondant */}
          {/* <div class="text-white">
          IMage 2
          <img src={`data:image/jpeg;base64,${lastImage()}`} />
        </div> */}
        </div>
      </div>
      <img
        class="modal-content"
        src={`data:image/jpeg;base64,${props.imageToDisplay.image}`}
      />
    </div>
  );
}
