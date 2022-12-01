import React from "react";
import styles from "./nav.module.css";
import "../../global.css";

export default function Nav(props) {
  return (
    <>
      <nav className={`${props.darkMode && styles.dark} navbar shadow-sm `}>
        <div className="container p-2">
          <span className="float-left">
            <b>Where in the world?</b>
          </span>
          <button className="float-right" onClick={props.toggleDarkMode}>
            <i className="bi bi-moon"></i> Dark Mode
          </button>
        </div>
      </nav>
    </>
  );
}