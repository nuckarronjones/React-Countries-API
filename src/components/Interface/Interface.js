import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import Results from "./Results";
import style from "./interface.module.css";

export default function Interface(props) {
  const [filteredCountryList,setFilteredCountryList] = useState("")
  
  useEffect(()=>{
    setFilteredCountryList(props.countries)
    console.log("DEBUG: Re-Rendered")
  },[props.countries])//waits on props.countries to update and then re-renders app with new filteredcountrylist. Only runs once

  const regionChangeHandler = (selectedRegion) => {
    let filter = props.countries.filter(country => country.region == selectedRegion)
    setFilteredCountryList(filter)
  };

  const filteredTextHandler = (text) => {
    let filter = props.countries.filter(country => console.log(/^A/.test(country.name.common)))
    console.log(text);
  };

  return (
    <div className={`${props.darkMode && style["bg-dark-theme"]} pt-5`}>
      <div className="container">
        <Search filteredTextHandler={filteredTextHandler} darkMode={props.darkMode} />
        <Filter
          darkMode={props.darkMode}
          onChangeRegion={regionChangeHandler}
        />
      </div>
      <Results darkMode={props.darkMode} countries={filteredCountryList} />
    </div>
  );
}