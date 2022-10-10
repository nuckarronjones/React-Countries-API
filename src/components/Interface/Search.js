import React from "react";
import style from "./search.module.css"

export default function Search(props) {
  return (
    <>
        <input
        className={`${props.darkMode ? style[`search-dark`] : style[`search-light`]} ${style.search}`}
          type="text"
          placeholder="Search for a country..."
        />
    </>
  );
}
