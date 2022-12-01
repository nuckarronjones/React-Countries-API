import React from "react";
import style from "./search.module.css";
import "../../global.css";

export default function Search(props) {

const changingText = (e) =>{
  props.filteredTextHandler(e.target.value)
}

  return (
    <>
      <input
        className={`${
          props.darkMode ? style[`search-dark`] : style[`search-light`]
        } ${style.search} shadow`}
        onChange={changingText}
        type="text"
        placeholder="Search for a country..."
      />
    </>
  );
}
