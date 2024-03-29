import { JSXElement, Show } from "solid-js";
import { NavBar } from "./components/organism/NavBar";
import { Explorer, imageToDisplayInModal } from "./components/layout/Explorer";
import { ImageViewer } from "./components/molecule/ImageViewer";
import { ImageToDisplayType } from "./_services/search.service";

// TODO: Changer le favicon

export function App(): JSXElement {
  return (
    <>
      <NavBar />
      <Explorer />

      <Show when={imageToDisplayInModal()}>
        <ImageViewer
          imageToDisplay={imageToDisplayInModal() as ImageToDisplayType}
        />
      </Show>
    </>
  );
}
