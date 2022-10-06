import React, { useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import Results from "./Results";

export default function Interface(props) {
  const [filteredRegion, setfilteredRegion] = useState("");

  let filteredCountries = props.countries

  const regionChangeHandler = (selectedRegion) => {
    console.log(selectedRegion);
    setfilteredRegion(selectedRegion);
  };

  // Sometimes it takes awile for props.countries to load.
  // So right now, the if checks if it exists and upon the component
  // re-rendering and the informaiton being available, then the if 
  // statement allows us to filter the array
  if ((props.countries) && (filteredRegion != "")) {
    filteredCountries = props.countries.filter((item) => {
      return item.region == filteredRegion
    });
  }

  return (
    <>
      <Search />
      <Filter onChangeRegion={regionChangeHandler} />
      <Results countries={filteredCountries} />
    </>
  );
}
