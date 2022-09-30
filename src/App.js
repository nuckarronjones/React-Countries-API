import React from "react";
import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";
import Interface from "./components/Interface/Interface";

export default function App() {
  return (
    <>
      <Nav />
      
      <div class="p-3 pr-5 pl-5">
        <Interface />
        <Results />
      </div>
    </>
  );
}
