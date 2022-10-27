import React from "react";
import styles from "./nav.module.css";
import "../../global.css";

export default function Nav(props) {
  return (
    <>
      <nav
        className={`${
          props.darkMode && styles.dark
        } navbar p-3 shadow-sm pr-5 pl-5`}
      >
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            <b>Where in the world?</b>
          </span>
          <button onClick={props.toggleDarkMode}>
            <i className="bi bi-moon"></i> Dark Mode
          </button>
        </div>
      </nav>
    </>
  );
}
