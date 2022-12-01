import React from "react";
import style from "./filter.module.css";
import "../../global.css";

export default function Filter(props) {
  //function that runs custom event handler passed down from props when the dropdown changes
  function filterCountry(e) {
    let filter = e.target.value;
    props.onChangeRegion(filter);
  }

  return (
    <div className="float-md-right mt-4 mt-md-0 shadow">
      <select
        onChange={filterCountry}
        className={`${style.selector} ${
          props.darkMode ? style["selector-dark"] : style["selector-light"]
        }`}
      >
        <option disabled selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Americas">America</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
