import React from "react";
import Toggle from "./Toggle"

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-white bg-white p-3 shadow-sm pr-5 pl-5">
        <span class="navbar-brand mb-0 h1"><b>Where in the world?</b></span>
        <Toggle />
      </nav>
    </>
  );
}