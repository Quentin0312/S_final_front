import { JSXElement } from "solid-js";
import "./NavBar.css";
import { Logo } from "../../assets/Logo";

export function NavBar(): JSXElement {
  return (
    <div id="nav-bar">
      <Logo />
      <div class="text-4xl ml-2 text-slate-800">RODALI</div>
    </div>
  );
}
