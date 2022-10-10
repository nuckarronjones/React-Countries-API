import React, { useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import Results from "./Results";
import style from "./interface.module.css";

export default function Interface(props) {
  const [filteredRegion, setfilteredRegion] = useState("");

  let filteredCountries = props.countries;

  const regionChangeHandler = (selectedRegion) => {
    console.log(selectedRegion);
    setfilteredRegion(selectedRegion);
  };

  // Sometimes it takes awile for props.countries to load.
  // So right now, the if checks if it exists and upon the component
  // re-rendering and the informaiton being available, then the if
  // statement allows us to filter the array
  if (props.countries && filteredRegion != "") {
    filteredCountries = props.countries.filter((item) => {
      return item.region == filteredRegion;
    });
  }

  return (
    <div className={`${props.darkMode && style["bg-dark-theme"]} pt-5`}>
      <div className="container">
        <Search darkMode={props.darkMode} />
        <Filter
          darkMode={props.darkMode}
          onChangeRegion={regionChangeHandler}
        />
      </div>
      <Results darkMode={props.darkMode} countries={filteredCountries} />
    </div>
  );
}