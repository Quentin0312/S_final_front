import { JSXElement } from "solid-js";
import { NavBar } from "./components/organism/NavBar";
import { Explorer } from "./components/layout/Explorer";

// TODO: Changer le favicon

export function App(): JSXElement {
  return (
    <>
      <NavBar />
      <Explorer />
    </>
  );
}
