import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import Results from "./Results";
import style from "./interface.module.css";

export default function Interface(props) {
  const [filteredCountryList, setFilteredCountryList] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    setFilteredCountryList(props.countries);
    console.log("DEBUG: Re-Rendered");
  }, [props.countries]); //waits on props.countries to update and then re-renders app with new filteredcountrylist. Only runs once

  const regionChangeHandler = (selectedRegion) => {
    let filter = props.countries.filter(
      (country) => country.region === selectedRegion
    );
    setFilteredCountryList(filter);
    setRegionFilter(selectedRegion);
  };

  const filteredTextHandler = (text) => {
    let regex = new RegExp(`${text}`, "i");

    let filter;

    if (regionFilter !== "") {
      filter = props.countries
        .filter((country) => country.region === regionFilter)
        .filter((country) => regex.test(country.name.common));
    } else {
      filter = props.countries.filter((country) =>
        regex.test(country.name.common)
      );
    }
    setFilteredCountryList(filter);
  };

  return (
    <div className={`${props.darkMode && style["bg-dark-theme"]} ${style['min-height']}`}>

      <div className="container pt-5">
        <Search
          filteredTextHandler={filteredTextHandler}
          darkMode={props.darkMode}
        />
        <Filter
          darkMode={props.darkMode}
          onChangeRegion={regionChangeHandler}
        />
      </div>
      <Results darkMode={props.darkMode} countries={filteredCountryList} />
    </div>
  );
}
